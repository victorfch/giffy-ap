import React from 'react'
import Gif from '../Gif'
import './GifsList.css'

export default function GifList({gifs}) {
  return (
    <div className="gifs">
      {gifs.map((gif, id) => <Gif key={id} {...gif} />)
      }
    </div>
  )
  
}