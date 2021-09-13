import React, {useCallback, useEffect, useRef } from 'react'
import debounce from 'just-debounce-it'
import GifList from '../components/GifList'
import { useGif } from '../hooks/useGif'
import {useNearScreen} from '../hooks/useNearScreen'

export default function Results({params}) {
  const {keyword} = params
  const {gifs, setPage} = useGif(params)
  const {isNearScreen, fromRef} = useNearScreen({once: false})
  
  const handleNextPage = () => setPage((prevPage) => prevPage + 1)

  const debounceNextPage = useCallback(debounce(
    handleNextPage, 200
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