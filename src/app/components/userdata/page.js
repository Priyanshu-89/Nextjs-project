"use client"
import {useEffect, useState} from 'react'
import axios from 'axios'

function UserData() {
    const [fee, setFee] = useState(0)
    useEffect(() => {
      const getUser=async()=>{
        const url="/api/student"
        const userResponse=await axios.get(url)
        console.log(userResponse.data)
        setFee(userResponse.data.fee)
      }
    getUser();
     
    }, [])
    
  return (
    <>UserData
    <h1>User Data Details</h1>
    <div>
       
        Student Fee : {fee}
    </div>
    {/* <div> Student Name:{roll}</div> */}
    
    </>
  )
}

export default UserData