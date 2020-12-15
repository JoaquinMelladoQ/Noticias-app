import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
   return state

}
const mapDispatchToProps = dispatch => ({} )

export default connect(mapStateToProps, mapDispatchToProps)(App)
