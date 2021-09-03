import React, { useEffect } from 'react'
import GifList from '../components/GifList'
import { useGif } from '../hooks/useGif'

export default function Results({params}) {
  const {keyword} = params
  const {gifs} = useGif(params)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (<>
    <h2>{decodeURI(keyword)}</h2>
    <GifList gifs={gifs} />
  </>)
}