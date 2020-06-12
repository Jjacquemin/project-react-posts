import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class PostForm extends Component {
  render() {
    return (
      <div>
        <h1>Nouveau post</h1>
        <form className='form-group'>
          <label>Titre</label>
          <input className='form-control' type='text'/>
          <div></div>
        </form>
        <form className='form-group'>
          <label>Description</label>
          <input className='form-control' type='textarea'/>
          <div></div>
        </form>
        <form className='form-group'>
          <label>Auteur</label>
          <input className='form-control' type='text'/>
          <div></div>
        </form>
        <Link className="button_space" to="/">
          <button className="btn btn-danger">Retour</button>
        </Link>
        <button type="submit" className="btn btn-primary">Créer</button>
      </div>
    )
  }
}

export default PostForm
