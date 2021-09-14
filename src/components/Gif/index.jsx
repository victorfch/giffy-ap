import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'wouter'
import './Gif.css'

function Gif ({ id, title, url }) {
  return (
    <Link to={`/gif/${id}`} className="gif">
      <h4>{title}</h4>
      <img loading='lazy' src={url} alt={title} />
    </Link>
  )
}

Gif.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Gif
