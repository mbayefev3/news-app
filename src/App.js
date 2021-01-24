import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

      dataNews: [

      ]
    }

  }


  componentDidMount() {


    const url = 'https://newsapi.org/v2/everything?q=politics&apiKey=a940f64b7c854d089fc90af200c5af29&language=fr'

    fetch('https://newsapi.org/v2/everything?q=politics&apiKey=a940f64b7c854d089fc90af200c5af29&language=fr').then(response => response.json())
      .then(data => this.setState(() => {

        return {

          dataNews: data
        }
      }))
  }


  render() {

    console.log(this.state.dataNews)

    return (

      <div>
        <h1>Welcome to newsApp</h1>
      </div>
    )

  }

}

export default App