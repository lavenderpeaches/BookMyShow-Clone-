import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Navbar/Slider'
import './App.css'
import movie1 from "./images/movie1.jpg"
import movie2 from "./images/movie2.jpg"
import movie3 from "./images/movie3.jpg"

function App() {
  const banner = [movie1, movie2, movie3]



  return (
    <>
    <Navbar />
    <Slider banners={banner} />
    </>
      )
}

export default App
