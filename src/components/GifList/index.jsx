import React from 'react'
import Gif from '../Gif'
import { useGif } from '../../hooks/useGif'
import './GifsList.css'

export default function GifList({keyword}) {
  const {gifs} = useGif(keyword)

  return (
    <div className="gifs">
      {gifs.map((gif, id) => <Gif key={id} {...gif} />)
      }
    </div>
  )
  
}