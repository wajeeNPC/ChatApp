import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'



const Navbar = () => {

    const navigate = useNavigate()
    const {user} = useAuthContext()
    const {logout} = useLogout()

    const handleLogout = () =>{
      logout()
    }

  console.log(user)

  return (
    <div className=' bg-black w-screen flex justify-between text-white'>
        <h1>welcome to ZipChat</h1>

        <div>
            {user === null ? (<>
            <button onClick={() => navigate('/login')} className=' mr-5 bg-slate-400'>Login</button>
            <button onClick={() => navigate('/signup')} className='bg-slate-400'>Sign Up</button></>)
            :(<>
            <button className='bg-slate-400'>Profile</button>
            <button className='bg-slate-400' onClick={handleLogout}>Logout</button>
            </>)}
        </div>
    </div>
  )
}

export default Navbar