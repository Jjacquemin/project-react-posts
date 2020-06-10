import React, { Component } from 'react'
import PostContent from '../components/post-content'

class Post extends Component {
  render() {
    return (
      <div>
        <h1>post n°{ this.props.match.params.id }</h1>
        <PostContent/> 
      </div>
    )
  }
}

export default Post
