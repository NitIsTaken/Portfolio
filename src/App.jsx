import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Projects from './Project'
import Skills from './Skills'
import Contact from './contact'

function Footer() {
  return(
    <footer>
      <p>© 2025 Martin.Dev</p>
    </footer>
  );
}

function App() {


  return (
    <div>
      <Header />
      <h2>Bienvenue sur mon portfolio</h2>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
