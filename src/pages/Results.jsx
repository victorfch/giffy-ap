import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import debounce from 'just-debounce-it'
import GifList from '../components/GifList'
import { useGif } from '../hooks/useGif'
import { useNearScreen } from '../hooks/useNearScreen'

function Results ({ params }) {
  const { keyword } = params
  const { gifs, setPage } = useGif(params)
  const { isNearScreen, fromRef } = useNearScreen({ once: false })

  const debounceNextPage = useCallback(debounce(
    () => setPage((prevPage) => prevPage + 1), 200
  ), [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (isNearScreen) debounceNextPage()
  }, [isNearScreen, debounceNextPage])

  return (<>
    <h2>{decodeURI(keyword)}</h2>
    <GifList gifs={gifs} />
    <div id="visor" ref={fromRef}></div>
  </>)
}

Results.propTypes = {
  params: PropTypes.object.isRequired
}

export default Results
