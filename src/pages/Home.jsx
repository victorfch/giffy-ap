import React from 'react'
import Menu from '../components/Menu'
import Finder from '../components/Finder'
import GifList from '../components/GifList'
import { useGif } from '../hooks/useGif'

export default function Home () {
  const { gifs } = useGif()
  return (<>
    <Finder />
    <h2>Búsqueda reciente</h2>
    <GifList gifs={gifs} />
    <Menu />
  </>)
}
