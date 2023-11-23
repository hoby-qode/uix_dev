import React from 'react'
import Link from 'next/link'
const NotFound = () => {
    return (
        <div className='container text-center vh-50 d-flex flex-column justify-content-center align-items-center'>
          <h1 style={{fontSize:"10rem"}}>404</h1>
          <h3 style={{fontSize:"5rem"}}>La page n'a pas été trouvée.</h3>
          <Link href="/" className='btn btn-primary'>Veuillez retourner à la page d'accueil</Link>
        </div>
      )
}

export default NotFound