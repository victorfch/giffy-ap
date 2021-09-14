import React from 'react'
import Routes from './components/Routes'
import Context from './context/Context'
import './App.css'
import { user } from './context/user'
import { Link } from 'wouter'

export default function App () {
  return (
    <Context.Provider value={user}>
      <div className="App">
        <section className="App-header">
          <Link to="/">
            <h1 className="App-header__title">App</h1>
          </Link>
          <Routes />
        </section>
      </div>
    </Context.Provider>
  )
}
