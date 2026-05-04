import axios from "axios";
import { createContext, useState } from "react";

export const AppContext = createContext()

const ContextProvider = ({ children }) => {

  const [reviews, setReviews] = useState([])
  const [message, setMessage] = useState('')

  const getReview = async () => {
    try {
      const response = await axios.get('/reviews')
      if(response.data){
        setReviews(response.data)
      }
    } catch (err) {
      console.log(err.message)
    }
  }


  const value = {
    getReview,
    reviews, setReviews,
    setMessage, message
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
export default ContextProvider