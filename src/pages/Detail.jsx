import React, { useContext } from 'react'
import Gif from '../components/Gif'
import GifContext from '../context/GifContext'
import PropTypes from 'prop-types'

function Detail ({ params }) {
  const { gifs } = useContext(GifContext)
  const gif = gifs.find(gif => gif.id === params.id)

  return <Gif {...gif} />
}

Detail.propTypes = {
  params: PropTypes.object.isRequired
}

export default Detail
