import NextBreadcrumb from "@/components/breadcrumb/NextBreadcrumb"
import Anchor from "@/components/ui/Anchor"
import ProgessBar from "@/components/ui/progessBar"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'
import SearchFilter from "../../[slug]/SearchFilter"

export default function Loading() {
  const tags = [1, 2, 3, 4, 5]
  return (
    <main className="container content">
      <Anchor height={50} />
      <ProgessBar />

      <div className="row justify-content-between">
        <section className="col-md-6 order-2">
          <NextBreadcrumb
            homeElement={'Uix dev'}
            separator={<span> &gt; </span>}
            activeClasses="active"
            containerClasses="d-flex gap-10 ml-0 pl-0"
            listClasses="list-style-none"
            capitalizeLinks
          />
          <div className="row mx-0 mt-5">
            <article>
              <div className="radius aspect-16-9 cover mb-5">
                <Skeleton height={340} width={640} />
              </div>
              <Skeleton height={40} style={{ marginBottom: '10px' }} />
              <div className="post-excerpt mb-4">
                <Skeleton count={3} />
              </div>
              <Skeleton count={5} />
            </article>
          </div>
        </section>
        <section className="col-md-2 order-1">
          <div className="sticky-top">
            <SearchFilter />
            <div>
              <h3>Tag:</h3>
              <div className="tags d-flex flex-wrap gap-10">
                {tags.map((tag) => (
                  <Skeleton key={tag} height={28} width={64} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="col-lg-3 order-3  d-none d-md-block">
          <div className="sticky-top">
            {/* <Navigation links={post.acf} /> */}
          </div>
        </section>
      </div>
    </main>
  )
}
