import React from 'react'

function CardSection() {
  return (
    <>

      <div className='h-auto w-100 flex flex-col flex-wrap items-center justify-center p-10 mt-36 md:flex'>
        <div className='h-auto w-full flex flex-wrap flex-col items-center'>
          <p className='text-pink-800 font-bold font-3xl text-center md:text-4xl'>Our Basics Courses</p>
          <div className='w-36 h-1 border-b-4 border-yellow-500 mb-8'></div>
        </div>
        <div className='w-full flex flex-wrap justify-evenly  md:flex items-center '>

          <div className='w-46 flex flex-col items-center mb-12  bg-gray-300 shadow-xl p-2'>
            <img className="w-52 h-48 border-4 border-purple-200" src="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/686515/retina_1708x683_01-HTML5_CM-8384522cf54d2bf230364f4a290605a1.png" alt="" />
            <p className='text-3xl font-bold text-pink-700'>HTML</p>
            <p class="text-center my-2">(HYPER TEXT MARKUP LANGUAGE)</p>
            <p class="text-center">Known As <span className='bg-pink-600 p-1 text-red-100 text-center'>SKELTON </span>of the any web page</p>
            <p className='text-3xl font-bold text-pink-700'></p>
          </div>

          <div className='w-46 flex flex-col items-center mb-12  bg-gray-300 shadow-xl p-2'>
          <img className="object-cover h-48 w-52 m-auto border-4 border-purple-200" src="https://play-lh.googleusercontent.com/8VWbaIQzYRPjCPVjuHbmSvbMNZOtLPENvZMYqHNl1I4Fmh9_OPti6gVjHOg_h7ck-Rk" alt="" />
            <h1 className='text-2xl text-center text-pink-800 font-bold p-1'>CSS</h1>
            <p class="text-center">(CASCADING STYLESHEET)</p>
            <p class="text-center">It's a <span className='bg-pink-600 p-1 text-red-100 text-center'>BEAUTY </span>of any webpage</p>
            </div>

          <div className='w-46 flex flex-col items-center mb-12  bg-gray-300 shadow-xl p-2'>
          <img className="object-cover h-48 w-52 m-auto border-4 border-purple-200" src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png" alt="" />
            <h1 className='text-2xl text-center text-pink-800 font-bold p-1'>JS</h1>
            <p class="text-center">(JAVASCRIPT)</p>
            <p class="text-center">Known As <span className='bg-pink-700 p-1 text-red-100 text-center'>BRAIN </span>of the any web page</p>
          </div>

          
        </div>
      </div>

    </>
  )
}

export default CardSection