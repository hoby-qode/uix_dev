import React from 'react'
import SearchFilter from '../../components/SearchFilter';
import TagFilter from '../../components/TagFilter';

export const revalidate = 3600

export default async function Tags({ params }: { params: { id: number } }) {

    async function getArticle(slug:string) {
        const options = {
            headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
        };
        try {
            const res = await fetch(`http://127.0.0.1:1337/api/articles?filters\[slug][$eq]=${slug}&populate=*`, options);
            const response  = await res.json()
            return response 
        } catch(err) {
            console.error(err)
        }
    }
    async function getTags() {
        const options = {
            headers: {
            Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
            },
        };
        try {
            const res  = await fetch(`http://127.0.0.1:1337/api/tags`, options)
            const response  = await res.json()
            return response 
        } catch(err) {
            console.error(err)
        }
    }
    const article = await getArticle(params.slug)
    const tags = await getTags()
    return (
        <main className="container">
            <div style={{ height: '50px' }}>
                <h1>{params.slug}</h1>
            </div>
            <div className="row justify-content-between">
                <section className="col-md-9">
                    <div className="row">
                        {article?.data?.map((post: any, key:number) => (
                            <article key={key}>
                                {post.attributes.Titre}
                                {post.attributes.Resume}
                                {article.data[0].attributes.tags.data.map((tag: any, key:number) => (
                                    <div key={key}>{tag.attributes.Titre}</div>
                                ))}
                            </article>
                        ))}
                    </div>
                </section>
                <section className="col-xl-2 col-lg-3">
                    <div className="sticky-top">
                        <SearchFilter />
                        <TagFilter tags={tags}/>
                    </div>
                </section>
            </div>
        </main>
    )
}
