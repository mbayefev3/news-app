import React from 'react'
import Contents from './components/Contents'
import './App.css'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      dataNews: [],
      articles: []
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


  render() {

    // console.log('da', this.state.dataNews)

    return (

      <div>
        <h1 id='title'>Welcome to world news</h1>
        <Contents content={this.state.articles} />
      </div>
    )

  }

}

export default App