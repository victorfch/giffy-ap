import React, {useEffect, useContext} from 'react'
import GifContext from '../context/GifContext'
import getGifs from '../services/getGifs'

export function useGif({keyword} = {keyword: null}) {
  const {gifs, setGifs} = useContext(GifContext)
  const keywordToUse = keyword || localStorage.getItem('last_search') || 'random'
  useEffect(() => {
	  getGifs({keyword: keywordToUse}).then(gifs => {
      setGifs(gifs)
      localStorage.setItem("last_search", keywordToUse)
    })
  }, [keyword])

  return {gifs}
}