import React, { Component } from 'react'
import NewsForm from './NewsForm'
import NewsList from './NewsList'

export default class News extends Component {
     render() {
         const { News, addNews } = this.props
         return (
             <div>
                 <NewsForm onSubmit={addCategory} />
                 <NewsList news={news} />
             </div>
         )
     }
}