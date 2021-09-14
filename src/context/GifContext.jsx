import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const GifContext = createContext({})

function GifsContextProvider ({ children }) {
  const [gifs, setGifs] = useState([])
  return (
    <GifContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifContext.Provider>
  )
}

GifsContextProvider.propTypes = {
  children: PropTypes.object.isRequired
}

export default GifContext
