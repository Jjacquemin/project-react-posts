import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {readPost} from '../actions/index'
import PostContent from '../components/post-content'
import {Link} from 'react-router-dom'

class Post extends Component {

  UNSAFE_componentWillMount() {
    this.props.readPost(this.props.match.params.id)
  }

  render() {
    return (
      <div>
        <PostContent post={this.props.post}/> 
        <Link className="button_space" to="/">
          <button className="btn btn-danger">Retour</button>
        </Link>
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
