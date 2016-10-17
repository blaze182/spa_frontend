import 'whatwg-fetch'
import { POSTS_URL } from './index'
import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [], error: null }
  }

  componentDidMount() {
    this.loadDataFromServer()
  }

  loadDataFromServer = () => {
    fetch(POSTS_URL).
      then(response => { return response.json() }).
      then(json => { this.setState({ data: json.data }) }).
      catch( error => { this.setState({ error: error }) })
  }

  handlePostSubmit = (post) => {
    fetch(POSTS_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: post.author,
        title: post.title,
        body: post.body
      })
    }).
      then(() => { this.loadDataFromServer() }).
      catch(error => { this.setState({ error: error }) })
  }

  render() {
    const { data, error } = this.state

    return (
      <main>
        <h1>Noticias</h1>
        {
          error
          ? <strong>Error occurred: {error.message}</strong>
          : null
        }
        <PostList data={data} />
        <PostForm onPostSubmit={this.handlePostSubmit} />
      </main>
    )
  }
}
