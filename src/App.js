import React, { Component } form 'react'
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


export default connect(mapStateToProps, mapDispatchToProps)(App)
