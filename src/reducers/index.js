import { combineReducers } from 'redux'
import ReducerPosts from './reducer-posts'

const rootReducer = combineReducers({
  posts: ReducerPosts
})

export default rootReducer
