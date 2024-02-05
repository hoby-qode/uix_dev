import Image from 'next/image'

export default function Loading() {
  return (
    <div className="vh-100 vw-100 d-flex align-content-center justify-content-center position-relative">
      <Image
        src="/images/loader/loader.gif"
        priority
        fill={true}
        alt="loader"
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}
