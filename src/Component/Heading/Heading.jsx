import React from 'react'

const Heading = ({data}) => {
  return (
    <div>
      <a href={data.url}>{data.text}</a>
    </div>
  )
}

export default Heading
