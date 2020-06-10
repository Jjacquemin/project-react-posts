import axios from 'axios'
import {AT_POSTS} from './action_types'

const END_POINT = 'http://localhost:4000'

export function readAllPost(){
  return function(dispatch){
    axios.get(`${END_POINT}/posts`)
      .then(response => {
        dispatch({ type: AT_POSTS.READ_ALL, payload: response.data })
      })
  }
}

export function readPost(id){
  return function(dispatch){
    axios.get(`${END_POINT}/posts/${id}`)
      .then(response => {
        dispatch({ type: AT_POSTS.READ, payload: response.data })
      })
  }
}

export function deletePost(id){
  return function(dispatch){
    axios.delete(`${END_POINT}/posts/${id}`)
      .then(response => {
        dispatch({ type: AT_POSTS.DELETE, payload: id })
      })
  }
}

export function createPost(post){
  const { title, content, author } = post
  return function(dispatch){
    axios.post(`${END_POINT}/posts/`, {
      title,
      content,
      author
    })
      .then(response => {
        dispatch({ type: AT_POSTS.CREATE, payload: response.data })
      })
  }
}
