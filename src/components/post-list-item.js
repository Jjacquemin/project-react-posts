import React from 'react'
import { Link } from 'react-router-dom'

const PostListItem = props => {
  const {post} = props
  return (
    <tr>
      <td><Link to={`post/${post.id}`}>{post.title}</Link></td>
      <td><button className='btn btn-danger'>Supprimer</button></td>
    </tr>
  )
}

export default PostListItem
