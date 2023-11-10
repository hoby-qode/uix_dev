import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
import SearchFilter from '../components/SearchFilter';
import TagFilter from '../components/TagFilter';
import InnerHTML from '@/components/ui/InnerHTML';
import Link from 'next/link';
import NotificationNewsletter from '@/components/Notifications/NotificationNewsletter';
import ProgessBar from '@/components/ui/progessBar';
import { notFound } from 'next/navigation';
import Anchor from '@/components/ui/Anchor';
import Image from 'next/image';
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb';
import { ResolvingMetadata, Metadata } from 'next';
import { Props } from 'next/script';
import { getPost, getTags } from '@/src/query/posts.query';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const revalidate = 3600

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug
    const post = await getPost(String(slug))
   
    return {
      title: post?.title,
      description: post?.resum,
      authors: {
        url: 'https://uix-dev.vercel.app/',
        name: 'Rakotonialy H.M'
      },
      publisher: "https://uix-dev.vercel.app/blog/"
    }
}

export default async function Blog({ params }: { params: { slug: string } }) {

    // Ajout du langage javascript dans le module highlightjs.org 
    hljs.registerLanguage('javascript', javascript);
    
    //Récupération du post avec son slug 
    const posts = await getPost(String(params.slug))
    
    //Récupération des tags
    const tags = await getTags()
    
    if (!posts) {
		return notFound()
	}
    return (
        <main className="container content">
            <Anchor />
            <ProgessBar/>
            
            <div className="row justify-content-between">
                <section className="col-md-6 order-2">
                    <NextBreadcrumb 
                        homeElement={'Uix dev'}
                        separator={<span> &gt; </span>}
                        activeClasses='active'
                        containerClasses='d-flex gap-10 ml-0 pl-0' 
                        listClasses='list-style-none'
                        capitalizeLinks
                    />
                    <div className="row mx-0 mt-5">
                        
                        {posts.map((post: any, key:number) => (
                            <article key={key}>
                                <div className="radius aspect-16-9 cover mb-5">
                                    <Image src={post._embedded['wp:featuredmedia']['0'].source_url} alt={post.title} fill={true} sizes="(max-width: 768px) 100%, 33%" />
                                </div>
                                <h1>{post.title.rendered}</h1>
                                <div className="desc">
                                    <InnerHTML html={{__html: post.excerpt.rendered }} />
                                </div>
                                <NotificationNewsletter />
                                <InnerHTML html={{__html: post.content.rendered }} />
                            </article>
                        ))}
                    </div>
                </section>
                <section className="col-md-2 order-1">
                    <div className="sticky-top">
                        <SearchFilter />
                        <TagFilter tags={tags}/>
                    </div>
                </section>
                
                <section className="col-lg-3 order-3">
                    <div className="sticky-top">
                        <div className="tab-navigation d-flex flex-column">
                            <Link href="#" className="active">
                                Qu&apos;est-ce que le Dark Mode ?
                            </Link>
                            <Link href="#" className="active">
                                Pourquoi devriez-vous l&apos;adopter ?
                            </Link>
                            <Link href="#" className="active">
                                Comment activer le Dark Mode ?
                            </Link>
                            <Link href="#" className="active">
                                Dark Mode et développement
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}


