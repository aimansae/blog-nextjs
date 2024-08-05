'use client'
import React, { useState } from 'react'

const Upvote = () => {
    const [upvote, setUpvote] = useState(0)

  return (
    <button onClick={()=>(setUpvote(prev=>prev+1))} className="bg-blue-500 text-white p-2">Upvote {upvote}</button>

  )
}

export default Upvote
