import React, { useEffect } from 'react'
import GifList from '../components/GifList'
import { useGif } from '../hooks/useGif'

export default function Results({params}) {
  const {keyword} = params
  const {gifs, setPage} = useGif(params)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleNextPage = () => setPage((prevPage) => prevPage + 1)

  return (<>
    <h2>{decodeURI(keyword)}</h2>
    <GifList gifs={gifs} />
    <button onClick={handleNextPage}>Next page</button>
  </>)
}