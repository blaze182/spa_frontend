import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Noticias</h1>
        <PostForm />
      </main>
    )
  }
}
