import React, { useEffect, useState } from 'react'
import { Link } from 'wouter'
import './Style.css'
import getTrendingGifs from '../../services/getTrendingGifs'

function Menu() {
  const [trendings, setTrendings] = useState([]);
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

export default function LazyMenu() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })

    observer.observe(document.getElementById('LazyMenu'))
  })

  return (
    <div id="LazyMenu">
      {show ? <Menu /> : null} 
    </div>
  )

}