import 'whatwg-fetch'
import React, { Component } from 'react'
import PostList from './PostList'
import PostForm from './PostForm'

export default class App extends Component {
  static propTypes = {
    url: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { data: [], error: null }
  }

  componentDidMount() {
    this.loadDataFromServer()
  }

  loadDataFromServer = () => {
    fetch(this.props.url).
      then(response => { return response.json() }).
      then(json => { this.setState({ data: json.data }) }).
      catch( error => { this.setState({ error: error }) })
  }

  handlePostSubmit = (post) => {
    fetch(this.props.url, {
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
