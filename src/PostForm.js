import React, { Component } from 'react'

export default class PostForm extends Component {
  static propTypes = {
    onPostSubmit: React.PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = { author: '', title: '', body: '' }
  }

  handleAuthorChange = e => { this.setState({ author: e.target.value }) }
  handleTitleChange = e => { this.setState({ title: e.target.value }) }
  handleBodyChange = e => { this.setState({ body: e.target.value }) }

  handleSubmit = (e) => {
    e.preventDefault()
    const author = this.state.author.trim()
    const title = this.state.title.trim()
    const body = this.state.body.trim()
    if (!title || !author) {
      return
    }
    this.props.onPostSubmit({author: author, title: title, body: body})
    this.setState({author: '', title: '', body: ''})
  }

  render() {
    const { author, title, body } = this.state

    return (
      <form className="postForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={this.handleTitleChange}
        />
        <textarea
          type="text"
          placeholder="Body"
          value={body}
          onChange={this.handleBodyChange}
        />
        <input type="submit" value="Post" />
      </form>
    )
  }
}
