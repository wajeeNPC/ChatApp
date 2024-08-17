import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import axios from "../api/axios";



const SignUp = () => {

  const navigate = useNavigate()

  const [result,error,isLoading,FetchUser,newFetchUser] = useAxios()
  const [userData,setUserData] = useState({
    firstName:"",
    lastName:"",
    phoneNumber:"",
    email:"",
    password:""
  })

  const handleInput = (e)=>{
    const {name,value} = e.target;

    setUserData({
      ...userData,
      [name]:value
    })
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    await newFetchUser({
      axiosInstance: axios,
      method: "POST",
      url: `/user/signup`,
      data:userData,
      headers: {
        "Content-Type": "application/json"
      },
    });
  }

  useEffect(() => {
    if (!isLoading) {
        if (error) {
            alert(error);
        } else if (result?.message === "User created successfully") {
            alert("User created successfully");
            navigate("/login", { replace: true, state: { forceRefresh: true } });   
        } else {
            console.log(result);
        }
    }
}, [isLoading]);
  
  return (
    <div className=' bg-black min-h-screen min-w-screen flex justify-center items-center'>
        <div className=' bg-white w-[500px] h-[500px]'>
            <div>
                <h1 className=' font-bold text-[20px]'>Welcome</h1>
                <p>Sign up now to get started</p>
                
                <div className=' flex flex-col'>
                <label className=' mt-[10px]'>First Name</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300' name='firstName' onChange={handleInput} />

                <label className=' mt-[10px]'>Last Name</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300' name='lastName' onChange={handleInput}/>

                <label className=' mt-[10px]'>Phone</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300' name='phoneNumber' onChange={handleInput} />

                <label className=' mt-[10px]'>Email address</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300' name='email' onChange={handleInput}/>

                <label className=' mt-[10px]'>Password</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300' name='password' onChange={handleInput}/>
                </div>

                <button className=' bg-blue-500 w-[300px] h-[40px] text-white' onClick={handleSubmit}>Sign up</button>
                <div>Already have an account? <span className=' cursor-pointer text-blue-500' onClick={()=>{navigate('/login')}}>Sign in</span></div>
            </div>
            </div>
            </div>
            
  )
}

export default SignUp