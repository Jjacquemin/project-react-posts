import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PostList from './containers/post-list'
import PostForm from './containers/post-form'
import Post from './containers/post'
import NotFound from './components/not-found'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={PostList}/>
          <Route path="/create-post" component={PostForm}/>
          <Route path="/post/:id" component={Post}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router> 
    )
  }
}

export default Routes
