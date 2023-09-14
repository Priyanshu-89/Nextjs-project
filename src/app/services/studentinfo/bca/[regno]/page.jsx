"use client"
import { useState } from 'react'

function StudentRegistrationDetails({ params }) {
  const { regno } = params;
  const [mycolor, setMycolor] = useState(true)
  const handleColorEffect = () => {
    setMycolor(!mycolor)
  }
  return (
    <>
      StudentRegistrationDetails
      <p className={`${mycolor ? "text-green-800" : "text-red-800"}`}>This is Your Registration Number :</p>
      {
        <p className={`${regno > 1000 ? "text-green-700" : "text-red-700"}`}>Your Registration number is : {regno}</p>
      }
      <button onClick={handleColorEffect} className='mt-5 px-4 py-2 bg-orange-950 text-orange-100'>Change Effect</button>

    </>
  )
}

export default StudentRegistrationDetails