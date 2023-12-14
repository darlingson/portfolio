import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Intro from './components/Intro'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Contact from './components/Contact'
import SocialMediaContact from './components/SocialMediaContact'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
 
  }, [])
  return (
    <>
    <div className='bg-cyan-100 grid justify-center'>
      <NavBar/>
      <Intro/>
      <Tools/>
      <Projects/>
      <Contact/>
      <SocialMediaContact/>
    </div>
    </>
  )
}

export default App
