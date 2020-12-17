import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import Category from './components/Category'
import addCategory from './reducers/Categorias'
import selectCategory from './reducers/Categorias'
import { reset } from 'redux-form'
import News from './components/News'

class App extends Component {
  render() {
    const { categories, addCategory, news, selectCategory } = this.props
    return (
      <div className="App">
        <Category
          selectCategory={selectCategory}
          addCategory={addCategory}
          categories={categories} 
        />
        <News news={news} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Categorias: { data: categories } } = state 
  const { Noticias: { data: news } } = state 
   return {
     categories,
     news,
  }
}
const mapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  },
  selectCategory: payload => dispatch(selectCategory(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
