import { useContext, useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import axios from 'axios'
import { AppContext } from './context/ContextProvider'

function App() {

  const {getReview} = useContext(AppContext)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        await getReview()
      } catch (err) { 
        console.error("Error fetching reviews", err); 
      }
    };
    fetchReviews();
  }, []);

  return(
    <Routes>
      <Route index element={<LandingPage/>}/>
    </Routes>
  )
}

export default App
