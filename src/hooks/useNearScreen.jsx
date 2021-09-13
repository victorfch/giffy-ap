import React, {useEffect, useState, useRef} from 'react'

export function useNearScreen({once = true} = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
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