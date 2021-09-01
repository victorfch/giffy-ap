import React from 'react'
import './App.css'
import Finder from './components/Finder'
import Menu from './components/Menu'

function App() {
	return (
		<div className="App">
			<section className="App-header">
				<h1>App</h1>
				<Finder />
				<Menu />
			</section>
		</div>
	)
}

export default App
