import React from 'react'
import Gif from '../Gif'
import PropTypes from 'prop-types'
import './GifsList.css'

function GifList ({ gifs }) {
  return (
    <div className="gifs">
      {gifs.map((gif, id) => <Gif key={id} {...gif} />)
      }
    </div>
  )
}

GifList.propTypes = {
  gifs: PropTypes.array.isRequired
}

export default GifList
