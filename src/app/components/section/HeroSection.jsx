import React from 'react'

function HeroSection() {
  return (
    <div>
<div className='-z-1 flex items-center justify-center  h-[50vh] w-full relative'>
    <div className='relative'>
        <img className="w-screen h-[70vh] object-cover mt-36" src=" https://images.unsplash.com/photo-1460904577954-8fadb262612c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1390&q=80" alt="...Loading" />
        </div>
   
    <div className="absolute top-0 left-0 h-[70vh] w-full bg-black opacity-70 flex items-center justify-center text-white">
    <h1
  class="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 md:text-8xl"
>
  Tailwind CSS
</h1>
        </div>
</div>
    
    </div>
  )
}

export default HeroSection