import { useContext, useEffect, useState } from 'react'
import GifContext from '../context/GifContext'
import getSingleGif from '../services/getSingleGif'

export function useSingleGif ({ id }) {
  const { gifs } = useContext(GifContext)
  const gifFromCache = gifs.find(g => g.id === id)
  const [gif, setGif] = useState(gifFromCache)

  useEffect(() => {
    if (!gif) {
      getSingleGif({ id })
        .then(setGif)
    }
  }, [gif, id])

  return { gif }
}
