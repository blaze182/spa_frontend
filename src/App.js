import React, { Component } from 'react'
import Post from './Post'
import PostForm from './PostForm'

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>Noticias</h1>
        <Post />
        <PostForm />
      </main>
    )
  }
}
