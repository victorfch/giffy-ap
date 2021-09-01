import React from 'react'
import {Route, Link} from 'wouter'
import GifList from '../GifList'

export default function Menu() {
  return (<>
    <Link to='/search/marvel'>Marvel</Link>
		<Link to='/search/morty'>Morty</Link>
		<Link to='/search/matrix'>Matrix</Link>
		<Route component={GifList} path="/search/:keyword" />
  </>)
}