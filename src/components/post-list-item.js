import React from 'react'
import { Link } from 'react-router-dom'
import { deletePost } from '../actions'

const PostListItem = props => {
  const {post} = props

  const deletePost= (post) => {
    props.deletePostCallBack(post)
  }
  
  return (
    <tr>
      <td><Link to={`post/${post.id}`}>{post.title}</Link></td>
      <td><button className='btn btn-danger' onClick={() => deletePost(post) }>Supprimer</button></td>
    </tr>
  )

}

export default PostListItem
