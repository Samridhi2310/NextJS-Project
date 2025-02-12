"use client"
import React from 'react'

export default function dynamic({params}) {
  const actualParams =  React.use(params);  
  return (
    <div>
      <h1>helo</h1>
       <p>Dynamic content:{actualParams.dynamic}</p>
    </div>
  )
}
