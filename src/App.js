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
        <PostForm />
      </main>
    )
  }
}
