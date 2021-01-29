import React from 'react'
import Contents from './Contents'
import Form from './Form'
import '../App.css'

class NewsFive extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            dataNews: [],
            articles: [],
            filtered: [],
            search: ''
        }

    }


    componentDidMount() {
        fetch('https://newsapi.org/v2/everything?q=politics&apiKey=a940f64b7c854d089fc90af200c5af29&language=fr')
            .then(response => response.json())
            .then(response => {
                const articles = response.articles;
                this.setState({ articles: articles });
            })
    }



    handleSubmit = (e) => {
        this.setState(() => {

            return {

                search: e.target.value
            }
        })


        const filtered = this.state.articles.filter(data => {

            if (data.author && data.author.toLowerCase().includes(this.state.search.toLocaleLowerCase().trim())) {

                return data.author
            }

            // return data.author
        })



        if (filtered) {

            this.setState(() => {

                return {

                    filtered: filtered
                }
            })
        } else {

            this.setState(() => {

                return {
                    filtered: [...this.state.articles]
                }
            })
        }

        if (this.state.search.length === 0) {

            this.setState(() => {

                return {

                    filtered: [...this.state.articles]

                }
            })
        }


    }




    render() {

        console.log('Search', this.state.search)
        // console.log('da', this.state.dataNews)


        return (

            <div>
                <h1 id='title'>Welcome to world news</h1>
                <Form handleSubmit={this.handleSubmit} />

                <Contents content={this.state.filtered} articles={this.state.articles} search={this.state.search} />

            </div>
        )

    }

}

export default NewsFive