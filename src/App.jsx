import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Intro from './components/Intro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Intro/>
    </>
  )
}

export default App
