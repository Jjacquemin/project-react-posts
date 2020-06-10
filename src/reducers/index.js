import { combineReducers } from 'redux'
import ReducerPosts from './reducer-posts'
import ReducerActivePost from './reducer-active-post'

const rootReducer = combineReducers({
  posts: ReducerPosts,
  activePost: ReducerActivePost
})

export default rootReducer
