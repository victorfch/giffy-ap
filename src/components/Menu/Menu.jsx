import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'
import './style.css'
import getTrendingGifs from '../../services/getTrendingGifs'

export default function Menu () {
  const [trendings, setTrendings] = useState([])
  useEffect(() => {
    getTrendingGifs().then(setTrendings)
  }, [])

  return (<>
    <h2>Trendig topics</h2>
    <div className="menu">
      {trendings.map((gif, i) => <Link key={i} className="link" to={`/search/${gif}`}>{gif}</Link>)}
    </div>
  </>)
}
