import React, { Component } from 'react'
import Post from './Post'

export default class PostList extends Component {
  static propTypes = {
    data: React.PropTypes.array
  }

  render() {
    const postNodes = this.props.data.map( (post) => {
      return (
        <Post key={post.id} id={Number(post.id)} name={post.attributes.title}>
          {post.attributes.body}
        </Post>
      )
    })

    return (
      <div id="postlist">
        {postNodes}
      </div>
    )
  }
}
