import React, { useState } from 'react'
import { default_pic, prof_pic } from '../assets'



const Dashbored = () => {

    const [contacts,setContacts] = useState([
        {
            id:"111222",
            name:"ronaldo",
            status:"available",
            img:default_pic
        },
        {
            id:"111222",
            name:"Messi",
            status:"available",
            img:default_pic
        },
        {
            id:"111222",
            name:"Neymar",
            status:"available",
            img:default_pic
        },
        {
            id:"111222",
            name:"Hazard",
            status:"available",
            img:default_pic
        }
    ])

  return (
    <div className=' w-screen flex'>
        <div className=' w-[25%] h-screen bg-slate-50'>
            <div className=' flex justify-center items-center my-8'>
                <div className=' w-[50px]' ><img src={prof_pic} alt='profile pic' className=' w-full h-full rounded-full' /></div>
                
                <div className=' ml-8'>
                    <h3 className=' text-2xl'>Tutorials Dev</h3>
                    <p className=' text-lg font-light'>My Account</p>
                </div>
            </div>
            <hr/>
            <div className=' ml-10'>
               <p>Messages</p>
               <div>
                {contacts ? (contacts.map((item,index)=>(
                    <div className=' flex  items-center my-8' key={index}>
                    <div className=' w-[30px]' ><img src={item.img} alt='contact pic' className=' w-full h-full rounded-full' /></div>
                    
                    <div className=' ml-8'>
                        <h3 className=' text-2xl'>{item.name}</h3>
                        <p className=' text-lg font-light'>{item.status}</p>
                    </div>
                </div>
                ))):(<>No contacts</>)}
                </div> 
            </div>
        </div>
        <div className=' w-[50%] h-screen bg-white flex flex-col items-center'>
            <div className=' w-[75%] bg-slate-50 h-[80px] mt-14 rounded-full flex items-center px-14'>
                <div><img src={default_pic} width={60} height={60}/></div>
                <div className=' ml-6 mr-auto'>
                    <h3 className=' text-lg'>Ronaldo</h3>
                    <p className=' text-sm font-light text-gray-600'>online</p>
                </div>
                <div className=' cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
</svg>
                </div>

            </div>

            <div className=' h-[75%] border w-full overflow-scroll'>
                <div className=' h-[1000px] p-14'>
                    <div className=' max-w-[40%] bg-slate-50 rounded-b-xl rounded-tr-xl p-4'>
                        this some randome text lol
                    </div>
                    <div className=' max-w-[40%] bg-blue-500 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                        this some randome text lol
                    </div>
                    <div className=' max-w-[40%] bg-slate-50 rounded-b-xl rounded-tr-xl p-4'>
                        this some randome text lol
                    </div>
                    <div className=' max-w-[40%] bg-blue-500 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                        this some randome text lol
                    </div>
                    <div className=' max-w-[40%] bg-slate-50 rounded-b-xl rounded-tr-xl p-4'>
                        this some randome text lol
                    </div>
                    <div className=' max-w-[40%] bg-blue-500 rounded-b-xl rounded-tl-xl ml-auto p-4 text-white'>
                        this some randome text lol this some randome text lol
                    </div>
                </div>
            </div>

            <div className=' p-14 w-full flex items-center'>
                <input type='text' placeholder='Type message...' className=' w-full p-4 border-0 shadow-md rounded-full bg-slate-50 focus:ring-0 focus:border-0 outline-none'/>
                <div className=' ml-4 p-2 cursor-pointer rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 14l11 -11" />
  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
</svg>
                </div>

                <div className=' ml-4 p-2 cursor-pointer rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-plus" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M9 12h6" />
  <path d="M12 9v6" />
</svg>
                </div>
            </div>
        </div>

        
        <div className=' w-[25%] h-screen'></div>
    </div>
  )
}

export default Dashbored