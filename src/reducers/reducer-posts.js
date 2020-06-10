import {AT_POSTS} from '../actions/action_types'

export default function reducerPosts (state=[], action) {
  switch(action.type) {
    case AT_POSTS.READ_ALL : return action.payload
    default : return state
  }
}
