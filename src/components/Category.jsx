import React, { Component } from 'react'

export default class Category extends Component {
     render() {
         const { categories, addCategory } = this.props
         return (
              <CategoryForm onSubmit={addCategory} />
              <CategoryList categories={categories} />
         )
     }
}