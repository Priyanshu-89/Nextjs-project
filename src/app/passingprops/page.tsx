"use client"

import React, { useState } from 'react'
type Props={
  name:string,
  roll:number;
}
function page(props:Props) {
    const studentName=props.name="Ritu"
    const rollNumbder=props.roll=43

    function clickme(){
      console.log("You have to clicked me")
    }

    const arrowfunction=()=>{
      alert("I am arrow function")
    }

    // this is for usestate 

    const [number, setNumber]=useState(0)

    const handleNumber=()=>{
      setNumber(number=>number+1)
    }
  return (
    <>
    <p>The student name is {studentName}</p>
    <p>And the roll number is {rollNumbder}</p>

    <button className='border border-slate-900 p-1 ml-3' onClick={clickme}>Click Here</button>
    <button className='border border-slate-900 p-1 ml-3' onClick={arrowfunction}>Through arrow function</button>
    <button className='border border-slate-900 p-1 ml-3' onClick={handleNumber}>I am here</button>
    <p>The increment value is {number}</p>
    </>
  )
}

export default page