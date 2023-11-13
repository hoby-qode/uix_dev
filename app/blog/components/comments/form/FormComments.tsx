import React, { useState } from 'react'
import { createComment } from '@/app/actions/actions';
const FormComments = ({ idComment }: { idComment: number }) => {
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      createComment(new FormData(), 9)      
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input type="text" placeholder="Votre prénom" id="prenom" name='author' onChange={(e) => setAuthor(e.target.value)} value={author}/>
        <label htmlFor="prenom">Votre prénom</label>
      </div>
      <div className="input-group">
        <input type="email" placeholder="Votre mail" id="email" name='mail' onChange={(e) => setEmail(e.target.value)}  value={email}/>
        <label htmlFor="email">Votre email</label>
      </div>
      <div className="input-group">
        <textarea
          placeholder="Votre commentaire"
          id="commentaire"
          cols={10}
          rows={5}
          onChange={(e) => setContent(e.target.value)}
          name='comment'
          value={content}></textarea>
        <label htmlFor="commentaire">Votre commentaire</label>
      </div>
      <div className="text-right">
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </div>
    </form>
  )
}

export default FormComments
