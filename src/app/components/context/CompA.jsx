"use client"
import React from 'react'
import CompB from './CompB'
import CompD from './CompD'
export const FeeContext=React.createContext()
export const BranchContext=React.createContext()
export const SessionContext=React.createContext()
function CompA() {
  return (
    <>
   ComA
   <FeeContext.Provider value={36500}>
    <BranchContext.Provider value={"BCA"}>
        <SessionContext.Provider value={"2021"-"2024"}>
            <CompB/>
            <CompD/>

        </SessionContext.Provider>

    </BranchContext.Provider>

   </FeeContext.Provider>
    </>
  )
}

export default CompA