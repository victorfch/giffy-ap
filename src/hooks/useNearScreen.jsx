import React, {useEffect, useState, useRef} from 'react'

export function useNearScreen() {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '200px'
    })

    observer.observe(fromRef.current)
    return () => observer.disconnect()
  })
 
  return {isNearScreen, fromRef}
}