import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'



const Login = () => {

  const navigate = useNavigate()

  const {login,error,isLoading} = useLogin()

  const [logData,setLogData] = useState({
    email:"",
    password:""
  })

  console.log(error)
  console.log(isLoading)

  const handleInput = (e) =>{
    const {name,value} = e.target;
    setLogData({
      ...logData,
      [name]:value
    })
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()

    await login(logData.email,logData.password)
  }

  //useEffect(()=>{
    //if(!isLoading){
    //  if(!error){
    //    navigate("/dashboard", { replace: true, state: { forceRefresh: true } })
     // }else if(error){
     //   alert(error)
    //  }
  //  }
 //},[isLoading,error])

  console.log(logData)

  


  return (
    <div className=' bg-black min-h-screen min-w-screen flex justify-center items-center'>
        <div className=' bg-white w-[500px] h-[500px]'>
            <div>
                <h1 className=' font-bold text-[20px]'>Welcome back</h1>
                <p>Log in now to get explored</p>
                
                <div className=' flex flex-col'>

                <label className=' mt-[10px]'>Email address</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300' name='email' onChange={handleInput}/>

                <label className=' mt-[10px]'>Password</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300' name='password' onChange={handleInput}/>
                </div>

                <button className=' bg-blue-500 w-[300px] h-[40px] text-white' onClick={handleSubmit} disabled={isLoading}>Log in</button>
                <div>Don't have an account? <span className=' cursor-pointer text-blue-500' onClick={()=>{navigate('/signup')}}>Sign up</span></div>
            </div>
            </div>
            </div>
  )
}

export default Login