import React, {useContext} from 'react'
import Gif from '../components/Gif'
import GifContext from '../context/GifContext'

export default function Detail({params}) {
  const {gifs} = useContext(GifContext)
  const gif = gifs.find(gif => gif.id == params.id)

  return <Gif {...gif} />
}