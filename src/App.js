import 'whatwg-fetch'
import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  render() {
    const { data } = this.state

    return (
      <main>
        <h1>Noticias</h1>
        <PostList data={data} />
        <PostForm />
      </main>
    )
  }
}
