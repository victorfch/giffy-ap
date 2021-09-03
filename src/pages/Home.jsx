import React from 'react'
import Menu from '../components/Menu'
import Finder from '../components/Finder'
import GifList from '../components/GifList'

export default function Home() {
  return (<>
    <Finder />
    <h2>Búsqueda reciente</h2>
    <GifList />
    <Menu />
  </>)
}