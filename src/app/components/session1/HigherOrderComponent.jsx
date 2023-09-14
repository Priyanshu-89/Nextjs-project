"use client"

import { useState } from 'react'


function HigherOrderComponent(OriginalComponent) {
  function NewComponent() {
    // ******************When we wnat to pass the bydefault value to all page be mention********************** 

    // return <OriginalComponent sName="Rahul"/>

    // ****************************************************************
    const [number, setNumber] = useState(0)
    const handleNumber = () => {

      setNumber(prevNum => prevNum + 1)

    }
    return <OriginalComponent name="Ritu" number={number} handleNumber={handleNumber} />
  }
  return NewComponent
}

export default HigherOrderComponent