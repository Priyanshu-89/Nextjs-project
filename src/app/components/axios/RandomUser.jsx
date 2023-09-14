"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function RandomUser() {
    const [randomData,setRandomData]=useState([])
    useEffect(()=>{
        const getRandomData=async()=>{
            try {
                const ourUser=await axios.get("https://jsonplaceholder.typicode.com/users")
                console.log(ourUser.data)
            setRandomData(ourUser.data)
            } catch (error) {
                console.log("Error fetching random data",error)
            }
            
        }
        getRandomData();
        //console.log("After Setting state :",randomData )
    },[])
  return (
    <>
    
    <h1>User Details</h1>
    {
        randomData.map(userData=>{
            return (
               <p>
                {userData.id}
               </p> 
            )
        })
    }
    </>
  )
}

export default RandomUser