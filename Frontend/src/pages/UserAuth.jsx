import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'



const UserAuth = () => {

    const [userLoged,setUserLoged] = useState(false)

  return (
    <div>
      {userLoged ? (<Login/>):(<SignUp/>)}
    </div>   
  )
}

export default UserAuth