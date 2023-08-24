import React from 'react'
import Link from 'next/link'
const NotFound = () => {
    return (
        <div className='container text-center'>
          <h1 style={{fontSize:"10rem"}}>404</h1>
          <h3 style={{fontSize:"5rem"}}>Page non trouvé</h3>
          <Link href="/" className='btn btn-primary'>Retournez à la page d&apos;accueil</Link>
        </div>
      )
}

export default NotFound