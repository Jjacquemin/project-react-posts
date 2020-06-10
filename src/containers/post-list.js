import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {readAllPost, deletePost} from '../actions/index'
import PostListItem from '../components/post-list-item'

class PostList extends Component {

  UNSAFE_componentWillMount() {
    this.props.readAllPost()
  }

  renderPosts() {
    const {posts} = this.props
    if (posts) {
      return posts.map(post => {
        return <PostListItem key={post.id} post={post} deletePostCallBack={post => this.deletePostCallBack(post)}/>
      })
    }
  }

  deletePostCallBack(post){
    this.props.deletePost(post.id)
  }

  render() {
    return (
      <div>
        <h1>Boite à post</h1>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPosts()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({readAllPost, deletePost}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
