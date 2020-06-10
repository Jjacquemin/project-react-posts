import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PostList from './containers/post-list'
import PostForm from './containers/post-form'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PostList}/>                
          <Route path="/create-post" component={PostForm}/>                
        </div>
      </Router> 
    )
  }
}

export default Routes
