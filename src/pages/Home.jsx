import React from 'react'
import Menu from '../components/Menu'
import Finder from '../components/Finder'
import { useGif } from '../components/hooks/useGif'
import GifList from '../components/GifList'

export default function Home() {
  const {gifs} = useGif()
  return (<>
    <Finder />
    <Menu />
    <h2>Búsqueda reciente</h2>
    <GifList />
  </>)
}