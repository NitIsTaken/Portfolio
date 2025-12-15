import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Projects from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'
import Layout from './components/Layout'



function App() {


  return (

  <Layout>
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Layout>


    // <div>
    //   <Header />
    //   <h2>Bienvenue sur mon portfolio</h2>
    //   <About />
    //   <Projects />
    //   <Skills />
    //   <Contact />
    //   <Footer />
    // </div>
  )
}

export default App
