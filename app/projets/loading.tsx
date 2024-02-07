import Anchor from '@/components/ui/Anchor'
import Image from 'next/image'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <>
      <div className="container" style={{height: '100vh'}}>
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Anchor height={30} />
          <div className="row">
            <div className="col-md-3">
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton />
              </div>
              <div>
                <Skeleton />
              </div>
            </div>
            <div className="col-md-6">
              <Skeleton />
              <Skeleton />
            </div>
            <div className="col-md-3">
              <div className="row">
                <div className="col-md-6">
                  <Skeleton/>
                </div>
                <div className="col-md-6">
                  <Skeleton/>
                </div>
                <div className="col-md-6">
                  <Skeleton/>
                </div>
                <div className="col-md-6">
                  <Skeleton/>
                </div>
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </div>
    </>
  )
}
