"use client"
import HigherOrderComponent from "@/app/components/session1/HigherOrderComponent"

function RegistrationNumber({name, num, handleNumber}) {
    
  return (
    <>
     <div className='mt-4 flex flex-col gap-4'>
    <p>Registration Number of {name} is :{num}</p>
    <p>
        <button className='px-4 py-2 border-2 border-pink-700 rounded-md ml-3 hover:bg-yellow-500 transition-all duration-500 hover:text-gray-100 ' onClick={handleNumber}>Increse Roll</button>
    </p>
    </div>
    </>
  )
}

export default HigherOrderComponent(RegistrationNumber)