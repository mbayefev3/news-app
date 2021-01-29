import React from 'react'

import News from './components/News'
import './App.css'



class App extends React.Component {

  constructor(props) {

    super(props)
  }


  render() {

    return (
      <div >
        <News />
      </div>
    )
  }
}

export default News