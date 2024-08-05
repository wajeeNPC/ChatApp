import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'



const UserAuth = () => {

    const [userLoged,setUserLoged] = useState(true)

  return (
    <div className=' bg-black min-h-screen min-w-screen flex justify-center items-center'>
        <div className=' bg-white w-[500px] h-[500px]'>
            {userLoged ? (<Login/>):(<SignUp/>)}
        </div>
    </div>
  )
}

export default UserAuth