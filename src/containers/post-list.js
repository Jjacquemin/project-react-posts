import React, { Component } from 'react'
import PostListItem from '../components/post-list-item'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {readAllPost,deletePost} from '../actions/index'
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Link} from 'react-router-dom'

class PostList extends Component {    
  UNSAFE_componentWillMount() {
    this.props.readAllPost()
  }

  renderPosts(){
    const {posts} = this.props

    return (
      posts.map(post => {
        return <PostListItem post={post} key={post.id} deletePostCallBack={this.deletePost.bind(this)}/>
      })
    )
  }

  deletePost(post){
    this.props.deletePost(post.id)
  }

  render() {
    return (
      <div className='default_margin_top'>
        <h1>Boite à post</h1>
        <div className='button_add'>
          <Link to={'/create-post'}>
            <button className='btn btn-primary btn-circle btn-lg'>+</button>
          </Link>
        </div>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Action</th>
            </tr>
          </thead>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            component="tbody"
          >
            {this.renderPosts()}
          </ReactCSSTransitionGroup>       
        </table>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({readAllPost,deletePost}, dispatch),
})

const mapStateToProps = state => {
  return {
    posts:state.posts
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (PostList)
