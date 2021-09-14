import React, { useState } from 'react'
import { useLocation } from 'wouter'

export default function Finder () {
  const [keyword, setKeyword] = useState('')
  const [, setPath] = useLocation()

  const handleInput = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPath(`/search/${keyword}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput}/>
    </form>
  )
}
