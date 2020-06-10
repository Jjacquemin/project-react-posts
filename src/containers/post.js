import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {readPost} from '../actions/index'
import PostContent from '../components/post-content'

class Post extends Component {

  UNSAFE_componentWillMount() {
    this.props.readPost(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <PostContent post={this.props.post}/> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.activePost
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({readPost}, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps )(Post)
