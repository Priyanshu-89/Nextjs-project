"use client"
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
function RandomImage() {
  const [image, setImage] = useState([])
  useEffect(() => {
    const getImage = async () => {
      const image = await axios.get("https://picsum.photos/v2/list")
      setImage(image.data)
    }

    getImage()
  }, [])

  return (
    <>
      {
      
       image.map((imgs)=>{
       return(

         <img src={imgs.download_url} width={300} height={300} className='m-10 rounded-md inline-block'/>
        )
        
       })

    }

        

    
    </>
  )
}

export default RandomImage