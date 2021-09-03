import React from 'react'
import {Route} from 'wouter'
import Results from '../../pages/Results'
import Detail from '../../pages/Detail'
import Home from '../../pages/Home'
import { GifsContextProvider } from '../../context/GifContext'

export default function Routes() {
  return (
		<GifsContextProvider>
			<Route component={Home} path="/" />
			<Route component={Detail} path="/gif/:id" />
			<Route component={Results} path="/search/:keyword" />
  	</GifsContextProvider>
	)
}