import React, { Component } from 'react'

export default class Post extends Component {
  static propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    children: React.PropTypes.string
  }

  render() {
    const articleId = 'post_id_' + this.props.id

    return (
      <article id={articleId}>
        <h4>{this.props.name}</h4>
        <div>{this.props.children}</div>
      </article>
    )
  }
}
