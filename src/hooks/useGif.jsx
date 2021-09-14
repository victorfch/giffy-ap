import { useEffect, useContext, useState } from 'react'
import GifContext from '../context/GifContext'
import getGifs from '../services/getGifs'

const INITIAL_PAGE = 0

export function useGif ({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifContext)
  const keywordToUse = keyword || localStorage.getItem('last_search') || 'random'
  const [page, setPage] = useState(INITIAL_PAGE)

  useEffect(() => {
    getGifs({ keyword: keywordToUse }).then(gifs => {
      setGifs(gifs)
      localStorage.setItem('last_search', keywordToUse)
    })
  }, [keyword])

  useEffect(() => {
    if (page === INITIAL_PAGE) return
    getGifs({ keyword: keywordToUse, page }).then(gifs => {
      setGifs(prevGifs => prevGifs.concat(gifs))
    })
  }, [page, keywordToUse])

  return { gifs, setPage }
}
