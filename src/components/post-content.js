import React from 'react'

const PostContent = ({post}) => {
  if(!post){
    return <div>Pas de post trouvé</div>
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p className='default_margin_top'>{post.content}</p>
      <p>Auteur : {post.author}</p>
    </div>
  )
}

export default PostContent