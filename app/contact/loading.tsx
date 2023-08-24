import Image from 'next/image'

export default function Loading() {
  return (
    <div className="vh-100 vw-100 d-flex align-content-center justify-content-center">
      <Image src="/images/loader.gif" priority width={400} height={400} alt='loader'/>
    </div>
  )
}