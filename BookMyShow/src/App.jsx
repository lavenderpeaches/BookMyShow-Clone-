import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import RecommendedMovies from './components/MainContent/RecommendedMovies'
import Footer from './components/Footer'
import Banner from './components/MainContent/Banner'
import Primere from './components/MainContent/Primere'
import Trending from './components/MainContent/Trending'
import LiveEvents from './components/MainContent/LiveEvents'
import MusicStudio from './components/MainContent/MusicStudio'
import Outdoor from './components/MainContent/Outdoor'
import LaughterTherapy from './components/MainContent/LaughterTherapy'
import PopularEvents from './components/MainContent/PopularEvents'
import LatestPlays from './components/MainContent/LatestPlays'
import TopGames from './components/MainContent/TopGames'
import FunActivities from './components/MainContent/FunActivities'
import Slider from './components/MainContent/Slider'

function App() {
  
  return (
    <>
      <Header />
      <Slider />
      <RecommendedMovies /> 
      <Banner />
      <LiveEvents />
      <Primere />
      <MusicStudio />
      <Outdoor />
      <LaughterTherapy />
      <PopularEvents />
      <LatestPlays />
      <TopGames />
      <FunActivities />
      <Trending />
      <Footer />
    </>
  )
}

export default App
