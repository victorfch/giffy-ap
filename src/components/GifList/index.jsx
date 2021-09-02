import React from 'react'
import Gif from '../Gif'
import { useGif } from '../hooks/useGif'

export default function GifList({params}) {
  const {gifs} = useGif(params)

  return gifs.map(({id, title, url}) => 
    <Gif 
      key={id} 
      title={title} 
      url={url} 
      id={id} />
  )
  
}