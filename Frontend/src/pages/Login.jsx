import React from 'react'

const Login = () => {
  return (
    <div className=' bg-black min-h-screen min-w-screen flex justify-center items-center'>
        <div className=' bg-white w-[500px] h-[500px]'>
            <div>
                <h1 className=' font-bold text-[20px]'>Welcome back</h1>
                <p>Log in now to get explored</p>
                
                <div className=' flex flex-col'>

                <label className=' mt-[10px]'>Email address</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300'/>

                <label className=' mt-[10px]'>Password</label>
                <input type='text' className=' w-[300px] h-[40px] bg-slate-300'/>
                </div>

                <button className=' bg-blue-500 w-[300px] h-[40px] text-white'>Log in</button>
                <div>Don't have an account? <span className=' cursor-pointer text-blue-500'>Sign up</span></div>
            </div>
            </div>
            </div>
  )
}

export default Login