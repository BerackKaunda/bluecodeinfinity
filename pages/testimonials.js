import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa"
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5"

const Testimonials = () => {
    return(
        <div className="py-28">
            <div className='flex justify-between items-center w-full px-1 md:px-16'>
            <div>
                <span className='caseText text-white font-semibold tracking-wider text-md md:text-2xl'>
                Our Clients Say
                <hr className='w-1/3 caseLine' />
                </span>
            </div>
            </div>

            <div className="flex justify-center items-center p-20 space-x-10">
                <div>
                <span className=' flex justify-center items-center bg-transparent border border-gray-600 cursor-pointer  p-3 rounded-full text-white text-3xl hover:bg-indigo-700 hover:border-indigo-700'>
                    <IoChevronBackSharp />
                </span>
                </div>                
                <div className="bg-gradient-to-r from-slate-900 to-bg-transparent grid grid-cols-3 gap-5 p-20">
                <div className="flex justify-center items-center  space-x-5">
                    <div className=" flex flex-col space-y-2 justify-center -items-center">
                    <div>
                    <span className="text-white text-3xl font-bold ">
                    4.8
                    </span>
                    </div>                    
                    <div className='flex justify-center gap-2 flex-wrap py-4 font-bold'>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStar /></span>
                    <span className='text-yellow-500'><FaStarHalfAlt /></span>
                        </div>
                    </div>
                   
                    <div className="border-2 border-white h-32 ">
                    </div>
                </div>
                <div className="flex col-span-2 flex-col space-y-4">
                    <div>
                        <span className="text-white text-2xl">
                            <FaQuoteLeft />
                        </span>
                    </div>
                    <div>
                        <p className="text-white tracking-widest leading-tigter text-2xl">
                        The value we get from them and their quality work set them apart from others.
                        </p>
                    </div>
                    <div>
                        <span className="text-gray-400 tracking-widest">
                            Alexandar Zichenko, CEO Bidco
                        </span>
                    </div>
                </div>
            </div>
            <div>
            <span className=' flex justify-center items-center cursor-pointer bg-transparent border border-gray-600 p-3 rounded-full text-white text-3xl hover:bg-indigo-700 hover:border-indigo-700'>
                            <IoChevronForwardSharp />
            </span>
            </div>
                
            </div>

        </div>
    )
}

export default Testimonials;