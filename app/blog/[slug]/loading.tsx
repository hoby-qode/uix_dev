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


export default function Loading() {
    return (
        <main className="container content">
            <Anchor />
            <div className="row justify-content-between">
                <section className="col-md-6 order-2">
                    <div className="breadcrumb" style={{background: 'gray',height: "16px",width:"150px",borderRadius:"var(--radius)"}}></div>
                    <div className="row mx-0 mt-5">
                        <article>
                            <div className="radius aspect-16-9 cover mb-5">
                                <div className="w-100 h-100" style={{background: 'gray',borderRadius:"var(--radius)"}}></div>
                            </div>
                            <div className="title" style={{height:'62px',width: "100%",borderRadius:"var(--radius)"}}></div>
                        </article>
                    </div>
                </section>
                <section className="col-md-2 order-1">
                    <div className="sticky-top">
                        <div className="filter" style={{background: 'gray',width:"186px",height:"35px",borderRadius:"var(--radius)"}}></div>
                    </div>
                </section>
                
                <section className="col-lg-3 order-3">
                    <div className="sticky-top">
                        <div className="tab-navigation d-flex flex-column">
                            
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}


