import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cold from './components/Cold'
import Hit from './components/Hit'
import Features from './components/Features'
import Story from './components/Story'
import Footer from './components/Footer'
import Form from './components/Form'
import About from './components/About'




function App() {

  return (
    <div>
      < Navbar/>
      <Hero/>
      <Cold />
      <Hit />
      <About />
      <Form />
      <Footer />
    </div>
  )
}

export default App
