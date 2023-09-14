"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FcMenu } from 'react-icons/fc'

function Navigation() {
    const [open, setOpen] = useState(false)
    const handleMenu = () => {
        setOpen(!open)
        console.log("I clicked")
    }
    return (
        <>
            <div className="relative w-full bg-gray-300 h-auto drop-shadow-sm" >
                <div className="flex md:flex-row items-center justify-between px-2 h-20 w-full bg-pink-900">
                    <div className="text-3xl text-zinc-300 font-bold cursor-pointer hover:text-orange-200 hover:transition-all duration-500 hidden md:block">LOGO</div>
                    <div className='sm:hidden md:block'>
                        <div className='flex justify-between items-center'>
                            <div className="hidden sm:flex md:flex">
                                <Link href="#" className="mx-4 text-lg text-gray-300 font-bold">
                                    HOME
                                </Link>
                                <Link href="#" className="mx-4 text-lg text-gray-300 font-bold">
                                    ABOUT Us
                                </Link>
                                <Link href="#" className="mx-4 text-lg text-gray-300 font-bold">
                                    SERVICES
                                </Link>
                                <Link href="#" className="mx-4 text-lg text-gray-300 font-bold">
                                    CONTACT US
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mx-4 my-3">
                        <Link href="#" className='mx-4 text-zinc-300 border border-slate-400 px-8 py-2 text-xl hover:bg-yellow-600 hover:border hover:border-orange-900 hover:text-white-900 transition-all duration-500'>LogIn</Link>
                        <Link href="#" className='mx-4 text-zinc-300  bg-yellow-600 px-8 py-2 text-xl hover:bg-transparent hover:border hover:border-white-700 hover:text-gray-100 transition-all duration-500'>SignUp</Link>
                    </div>
                    <div className='absolute top-6 mx-0 md:hidden' onClick={handleMenu}>
                        <FcMenu size={40} className="md:hidden cursor-pointer" />
                        {

                            open && (
                                <div className='z-1 container mt-4 bg-pink-800 overflow-hidden p-4 w-full'>
                                    <div className='z-10 text-center text-black text-xl h-48  block md:hidden'>
                                        <Link href="#" className="block py-2 text-gray-500 font-sans font-semibold">HOME</Link>
                                        <Link href="#" className="block py-2 text-gray-500 font-sans font-semibold">ABOUT</Link>
                                        <Link href="#" className="block py-2 text-gray-500 font-sans font-semibold">SERVICE</Link>
                                        <Link href="#" className="block py-2 text-gray-500 font-sans font-semibold">CONTACT</Link>
                                       
                                    </div>
                                </div>)
                        }





                    </div>


                </div>
            </div>

          
        </>

    )
}

export default Navigation