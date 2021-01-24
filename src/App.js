import React from 'react'
import Contents from './components/Contents'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      dataNews: [

      ]
    }

  }


  componentDidMount() {



    fetch('https://newsapi.org/v2/everything?q=politics&apiKey=a940f64b7c854d089fc90af200c5af29&language=fr').then(response => response.json())
      .then(data => this.setState(() => {

        return {

          dataNews: [...this.state.dataNews].concat(data)
        }
      }))
  }


  render() {

    console.log('da', this.state.dataNews)

    return (

      <div>
        <h1>Welcome to world news</h1>
        <Contents content={this.state.dataNews} />
      </div>
    )

  }

}

export default App