import React from 'react'
import { Link } from 'wouter'
import './Style.css'

export default function Menu() {
  return (<>
    <Link className="link" to='/search/marvel'>Marvel</Link>
	  <Link className="link" to='/search/morty'>Morty</Link>
	  <Link className="link" to='/search/matrix'>Matrix</Link>
  </>)
}