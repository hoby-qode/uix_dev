import NextBreadcrumb from '@/components/breadcrumb/NextBreadcrumb'
import Anchor from '@/components/ui/Anchor'
import SearchFilter from './components/searchFilter/SearchFilter'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  const array = [1, 2, 3, 4, 5]
  return (
    <main className="container">
      <Anchor height={50} />
      <div className="row justify-content-between">
        <section className="col-xl-2 col-lg-3">
          <div className="sticky-top">
            <SearchFilter />
            {/* <TagFilter tags={tags} /> */}
          </div>
        </section>
        <section className="col-md-9">
          <NextBreadcrumb
            homeElement={'Uix dev'}
            separator={<span> &gt; </span>}
            activeClasses="active"
            containerClasses="d-flex gap-10 ml-0 pl-0"
            listClasses="list-style-none"
            capitalizeLinks
          />
          <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {array.map((el) => (
              <div
                className="col-xl-4 col-lg-6"
                key={el}
                style={{ width: '320px' }}
              >
                <article>
                  <div className="picture">
                    <Skeleton height={146} width={300} />
                  </div>
                  <h3 className="like-h4 color-primary">
                    <Skeleton />
                  </h3>
                  <div>
                    <Skeleton />
                  </div>
                  <div>
                    <Skeleton count={6} />
                  </div>
                  <Skeleton />
                </article>
              </div>
            ))}
          </div>
          <ul className="d-flex align-items-center gap-10">
            <li className="list-style-none">
              <span className="next btn">{`<`}</span>
            </li>
            <li className="list-style-none">
              <span className="next btn">1</span>
            </li>
            <li className="list-style-none">
              <span className="next btn">2</span>
            </li>
            <li className="list-style-none">
              <span className="next btn">3</span>
            </li>

            <li className="list-style-none">
              <span className="next btn">{`>`}</span>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
