import React, { Component } from 'react'

export default class CategoryList extends Component {
    render() {
        const { categories } = this.props
        console.log(categories)
        return (
            <ul>
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3 </li>
            </ul>
        )
    }
}