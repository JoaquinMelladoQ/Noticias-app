import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import Category from './components/Category'
import News from './components/News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Category />
        <News />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Categorias: { data: categories } } = state 
   return categories

}
const mapDispatchToProps = dispatch => ({} )

export default connect(mapStateToProps, mapDispatchToProps)(App)
