"use client"

import React, { useState, useEffect } from 'react'
type props={
  name:string,
  roll:number
}
function Information() {
  const [num,setNum]=useState(0)
  return (
    <>
    <div className="className">
      <h2>This is my page information</h2>
    </div>
    
    </>
  )
}

export default Information