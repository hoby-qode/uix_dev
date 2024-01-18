import React from 'react'

const Anchor = ({ height = 50 }: { height?: number }) => {
  return <div style={{ height: `${height ? height : 50}px` }}></div>
}

export default Anchor
