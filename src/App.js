import React from 'react'
import Contents from './components/Contents'
import Form from './components/Form'
import './App.css'

class App extends React.Component {
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

      if (data.author && data.author.toLowerCase().includes(this.state.search.toLocaleLowerCase())) {

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



  }




  render() {

    // console.log('da', this.state.dataNews)


    return (

      <div>
        <h1 id='title'>Welcome to world news</h1>
        <Form handleSubmit={this.handleSubmit} />

        <Contents content={this.state.filtered} articles={this.state.articles} />

      </div>
    )

  }

}

export default App