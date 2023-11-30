import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import Intro from './components/Intro'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)


  useEffect(() => {
    const intro = document.getElementById("intro");
    const tools = document.getElementById("tools");
    const projects = document.getElementById("projects");
    
    document.getElementById("introBtn").addEventListener("click", scrollToIntro);
    document.getElementById("toolsBtn").addEventListener("click", scrollToTools);
    document.getElementById("projectsBtn").addEventListener("click", scrollToProjects);
  
  }, [])

  function scrollToIntro() {
    intro.scrollIntoView(true);
  }
  function scrollToTools() {
    tools.scrollIntoView(true);
  }
  function scrollToProjects() {
    projects.scrollIntoView(true);
  }
  return (
    <>
    <div className='container bg-cyan-300'>
      <NavBar/>
      <Intro/>
      <Tools/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App
