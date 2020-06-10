import {AT_POSTS} from '../actions/action_types'

export default function reducerPosts (state=[], action) {
  switch(action.type) {
    case AT_POSTS.READ_ALL : return action.payload
    case AT_POSTS.DELETE : 
      return state.filter(post => {
        if (post.id === action.payload) {
          return false
        } else {
          return true
        }
      })
    default : return state
  }
}
