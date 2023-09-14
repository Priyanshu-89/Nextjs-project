import React from 'react'

function GridSection() {
  return (
    <>
      <div className='h-auto w-full flex flex-wrap flex-col items-center'>
          <p className='text-pink-800 font-bold font-3xl text-center md:text-4xl'>Most Demanded</p>
          <div className='w-36 h-1 border-b-4 border-yellow-500 mb-8'></div>
        </div>
        <div className='h-auto w-100 flex flex-col flex-wrap items-center justify-center p-10'>
       <div class="grid grid-cols-1 gap-4 m-auto p-8 md:grid-cols-2">
  <div className=''>
    <img className='w-full p-1 h-full' src="https://media.istockphoto.com/id/1226444511/vector/mobile-website-development-technology-conceptual-illustration-design-of-internet-pages-of.jpg?s=612x612&w=0&k=20&c=pygvwNzpyOHXIQtJsD_fFY2S0Trylw_hy9Kq-MVRdUo=" alt="" />
  </div>
  
  <div className=' bg-gray-300 shadow-xl p-2'>
   <p className='p-1 text-justify'>MERN stack web development is a full-stack JavaScript technology stack used to build modern web applications. It comprises four key components:<br></br>

<span className='text-2xl text-center text-pink-800 font-bold '>1. MongoDB:</span> A powerful NoSQL database that stores data in flexible JSON-like documents. MongoDB offers scalability, easy integration with Node.js, and allows developers to work with dynamic data structures.<br></br>

<span className='text-2xl text-center text-pink-800 font-bold p-1'>2. Express.js:</span> A robust web application framework for Node.js, simplifying the process of creating server-side applications. It provides a set of tools and utilities for building RESTful APIs and handling HTTP requests and responses.<br></br>

<span className='text-2xl text-center text-pink-800 font-bold p-1'>3. React.js:</span> A popular front-end library developed by Facebook, allowing developers to build dynamic user interfaces efficiently. React's component-based architecture enables code reusability and smooth UI updates, providing a seamless user experience.<br></br>

<span className='text-2xl text-center text-pink-800 font-bold p-1'>4. Node.js:</span> A server-side JavaScript runtime that enables developers to build scalable and high-performance web servers. Node.js's event-driven, non-blocking I/O model makes it ideal for handling concurrent connections and real-time applications.

Combining these technologies, the MERN stack empowers developers to create feature-rich, responsive, and efficient web applications with a unified, end-to-end JavaScript solution.</p>
  </div>
</div>
</div>
    </>
  )
}

export default GridSection