import React, {useContext} from 'react'
import GifContext from '../context/GifContext'

export default function Detail({params}) {
  const {gifs} = useContext(GifContext)
  console.log({gifs})

  return <h1>Gif con ID {params.id}</h1>
}