import React from 'react'
import { Metadata } from 'next'
import Anchor from '@/components/ui/Anchor'
import { embeddable } from '@/src/types/types'
import TeasePost from './components/TeasePost'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'UIX DEV : Blog',
  description: 'Description de la page blog',
}

export async function findAllPosts() {
  const res = await fetch(`http://uixdev.s193304.mos2.atester.fr/wp-json/wp/v2/posts?_embed&status=publish`, { cache: 'no-cache' })
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des données')
  }
  return res.json()
}
export default async function Blog() {

  const posts = await findAllPosts()
  return (
    <main className="container">
      <Anchor />
      <div className="row justify-content-between">
        <section className="col-xl-2 col-lg-3">
          
        </section>
        <section className="col-md-9">
          
          <div className="row">
            {posts.map((article: embeddable, key: number) => (
              <TeasePost article={article} key={key} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
