import React from 'react'
import Gif from '../components/Gif'
import PropTypes from 'prop-types'
import { useSingleGif } from '../hooks/useSingleGif'

function Detail ({ params }) {
  const { gif } = useSingleGif({ id: params.id })

  if (!gif) return null

  return <Gif {...gif} />
}

Detail.propTypes = {
  params: PropTypes.object.isRequired
}

export default Detail
