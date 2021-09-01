import React, {useState, useEffect} from 'react'
import getGifs from '../../services/getGifs'
import Gif from '../Gif'

export default function GifList({params}) {
  const [gifs, setGifs] = useState([])
  const {keyword} = params

  useEffect(() => {
	  getGifs({keyword}).then(gifs => setGifs(gifs))
  }, [keyword])

  return gifs.map(({id, title, url}) => 
    <Gif 
      key={id} 
      title={title} 
      url={url} 
      id={id} />
  )
  
}