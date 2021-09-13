import React, { Suspense } from 'react'
import './style.css'
import { useNearScreen } from '../../hooks/useNearScreen';

const Menu = React.lazy(
  () => import('./Menu')
)

export default function LazyMenu() {
  const {isNearScreen, fromRef} = useNearScreen()

  return (
    <div ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen ? <Menu /> : null} 
      </Suspense>
    </div>
  )

}