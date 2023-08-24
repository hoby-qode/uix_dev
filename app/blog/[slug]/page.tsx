import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';
import TeasePost from '../components/TeasePost';
import SearchFilter from '../components/SearchFilter';
import TagFilter from '../components/TagFilter';
import InnerHTML from '@/components/ui/InnerHTML';
import Link from 'next/link';
import NotificationNewsletter from '@/components/Notifications/NotificationNewsletter';
import ProgessBar from '@/components/ui/progessBar';
import { notFound } from 'next/navigation';
import prisma from '@/libs/prisma';
import Anchor from '@/components/ui/Anchor';
import Image from 'next/image';
import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb';
import { ResolvingMetadata, Metadata } from 'next';
import { Props } from 'next/script';

export const revalidate = 3600

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const slug = params.slug

    const post = await prisma.post.findFirst({
        where: {
            slug: String(params.slug)
        }
    })
    
    
   
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
    
    function CodeBlock({ content }:{content:any}) {
        console.log(content);
        
        // Extract code between triple backticks
        const codeRegex = /<pre><code[^>]*>([\s\S]*?)<\/code><\/pre>/g;
        const matches = content.match(codeRegex);
    
        if (!matches) {
            return null; // Handle case where no code blocks are found
        }
    
        const code = matches.map((match: string) => match.replace(/<\/?pre><code[^>]*>|<\/code><\/pre>/g, ''));
        return (
            <SyntaxHighlighter language="javascript" style={vs2015} showLineNumbers>
                {code.join('\n\n')}
            </SyntaxHighlighter>
        );
    }

    const post = await prisma.post.findFirst({
        where: {
            slug: String(params.slug)
        }
    })
    
    const tags = await prisma.tag.findMany()

    if (!post) {
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
                        <article>
                            <div className="radius aspect-16-9 cover mb-5">
                                <Image src={post.picture} alt={post.title} fill={true} sizes="(max-width: 768px) 100%, 33%" />
                            </div>
                            <h1>{post.title}</h1>
                            <div className="desc">
                                {post.resum}
                            </div>
                            <NotificationNewsletter />
                            <InnerHTML html={{__html: post.content }} />
                            {/* {post.tag.map((tag: any, key:number) => (
                                <div key={key}>{tag.attributes.Titre}</div>
                            ))} */}
                        </article>
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


