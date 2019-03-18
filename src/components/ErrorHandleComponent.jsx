import React from 'react'

const initState = {
  message: '',
  stack: '',
}

export default function({ data = initState }) {
  return (
    <div className="error">
      <div className="message">{data.message}</div>
      <div className="stack">{data.stack}</div>
    </div>
  )
}