
import React from 'react'
import { Metadata } from 'next'

import { getAllPosts, getTags } from '@/src/query/posts.query'

import SearchFilter from './components/SearchFilter'
import TagFilter from './components/TagFilter'
import TeasePost from './components/TeasePost'
import Anchor from '@/components/ui/Anchor'
import prisma from '@/libs/prisma'
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb'
import Pagination from '@/components/ui/Pagination'

export const revalidate = 3600

export const metadata: Metadata = {
    title: 'UIX DEV : Blog',
    description: 'Description de la page blog',
}


export default async function Blog({
    searchParams,
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
    const page              = parseInt(searchParams?.page as string) || 1
    const postsPerPage      = 2
    const skip              = ( (page-1) * postsPerPage) 

    // const allPosts = await getAllPosts(page)
    const tags = await getTags()
    const posts = await getAllPosts(page,postsPerPage,skip)
    console.log(posts);
    
    // const posts             = await getPosts(postsPerPage, skip)
    // const allPosts          = await prisma.post.findMany()
    
    // const tags = await prisma.tag.findMany()
  
    return (
        <main className="container">
            <Anchor />
            <div className="row justify-content-between">
                <section className="col-xl-2 col-lg-3">
                    <div className="sticky-top">
                        <SearchFilter />
                        <TagFilter tags={tags}/>
                    </div>
                </section>
                <section className="col-md-9">
                    <NextBreadcrumb 
                        homeElement={'Uix dev'}
                        separator={<span> &gt; </span>}
                        activeClasses='active'
                        containerClasses='d-flex gap-10 ml-0 pl-0' 
                        listClasses='list-style-none'
                        capitalizeLinks
                    />
                    <div className="row">
                        {posts.map((article: any, key:number) => (
                            <div className="col-xl-4 col-lg-6" key={key}>
                                <TeasePost article={article} key={key} />
                            </div>
                        ))}
                    </div>
                    <Pagination postsPerPage={postsPerPage} totalPosts={8}/>
                </section>
            </div>
        </main>
    )
}


