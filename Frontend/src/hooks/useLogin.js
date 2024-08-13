import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'



export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const navigate = useNavigate(); 

  const login = async (email, password) => {
    try{
    setIsLoading(true)
    setError(null)
    const response = await axios.post('/user/login',{email,password})
    const data =  await response?.data

      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(data))
      // update the auth context
      dispatch({type: 'LOGIN', payload: data})
      // update loading state
      setIsLoading(false)
      navigate('/dashboard')

    }catch(error){
      setIsLoading(false)
      setError(error.response.data.message)
    }  
   
  }
      
  return { login, isLoading, error }
}