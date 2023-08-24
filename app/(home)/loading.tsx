import { TbLoader } from 'react-icons/tb'

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-100 w-100 d-flex align-content-center justify-content-center">
      <TbLoader />
    </div>
  )
}
