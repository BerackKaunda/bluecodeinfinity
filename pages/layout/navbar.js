import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { IoChevronDown, IoSunnyOutline, IoMoonSharp, IoChevronUp } from "react-icons/io5";
import Casestudies from "../casestudies/allcasestudies"

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const handleModes = () => {
        setToggle(!toggle)
    }

    return(
        <main>
            <div className='bg-gray-800 py-6 px-6 '>
                <div className='flex justify-between space-x-10 items-center'>
                {/* company logo */}
                <div>
                    <h1>
                    <span className='heroTxt tracking-wider text-sky-500  font-bold text-4xl h-32'>Blue</span>
                    <span className='underline tracking-wider underline-offset-2 decoration-sky-500 heroTxt text-white font-thin text-4xl h-32'>code</span>
                    </h1>
                    
                </div>
                {/* navbar menu */}
                <div className='flex justify-center items-center'>
                    <ul className='flex justify-between space-x-6 text-white'>

                    {/* Company menu */}
                    <li>
                        <div className='dropdownNav text-gray-300'>
                            <Link className='' href="/">
                            <a className='flex justify-center items-center gap-1 hover:text-blue-400 '>Company
                            <span className='text-lg chevronDown'><IoChevronDown /></span>
                            <span className='text-lg chevronUp'><IoChevronUp /></span>
                            </a>
                            </Link>
                        <div className='companyDropdown absolute grid-cols-3 gap-10 bg-gray-800 mx-10 p-10 rounded-lg h-auto left-0 overflow-hidden'>

                        <div className='hover:shadow-2xl p-3'>
                            <Link  href="/">
                            <a className='hover:text-blue-400'>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                About us
                                </span>
                                <span className='block'>
                                Boutique agency for custom software development
                                </span>
                            </a>
                            </Link>                        
                        </div>

                        <div className='hover:shadow-2xl  p-3'>
                            <Link  href="/">
                            <a className='hover:text-blue-400'>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                Why Blue codes
                                </span>
                                <span className='block'>
                                Key strengths that our customers value the most
                                </span>
                            </a>
                            </Link>                        
                        </div>

                        <div className='hover:shadow-2xl  p-3'>
                            <Link  href="/">
                            <a className='hover:text-blue-400'>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                Meet the Team
                                </span>
                                <span className='block'>
                                Meet the team of our top-notch engineers
                                </span>
                            </a>
                            </Link>                        
                        </div>
                        </div> 
                        </div>             
                    </li>



                    {/* How-we-work menu */}
                    <li>
                    <div className='dropdownNav text-gray-300'>
                            <Link className='' href="/">
                            <a className='flex justify-center items-center gap-1 hover:text-blue-400'>How we work
                            <span className='text-lg chevronDown'><IoChevronDown /></span>
                            <span className='text-lg chevronUp'><IoChevronUp /></span>
                            </a>
                            </Link>
                        <div className='companyDropdown absolute grid-cols-3 gap-10 bg-gray-800 mx-10 p-10 rounded-lg h-auto left-0 overflow-hidden'>

                        <div className='hover:shadow-2xl  p-3'>
                            <Link  href="/">
                            <a className=''>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                Services
                                </span>
                                <span className='block'>
                                We believe in long-term, mutually-beneficial partnerships between ourselves and our clients...
                                </span>
                            </a>
                            </Link>                        
                        </div>

                        <div className='hover:shadow-2xl  p-3'>
                            <Link  href="/">
                            <a className=''>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                Services
                                </span>
                                <span className='block'>
                                We believe in long-term, mutually-beneficial partnerships between ourselves and our clients...
                                </span>
                            </a>
                            </Link>                        
                        </div>

                        <div className='hover:shadow-2xl  p-3'>
                            <Link  href="/">
                            <a className=''>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                Who we are
                                </span>
                                <span className='block'>
                                We believe in long-term, mutually-beneficial partnerships between ourselves and our clients...
                                </span>
                            </a>
                            </Link>                        
                        </div>
                        </div> 
                        </div> 
                    </li>


                    {/* Expertise menu */}
                    <li>
                    <div className='dropdownNav text-gray-300'>
                            <Link className='' href="/">
                            <a className='flex justify-center items-center gap-1 hover:text-blue-400'>Expertise
                            <span className='text-lg chevronDown'><IoChevronDown /></span>
                            <span className='text-lg chevronUp'><IoChevronUp /></span>
                            </a>
                            </Link>
                        <div className='companyDropdown absolute grid-cols-3 gap-10 bg-gray-800 mx-10 p-10 rounded-lg h-auto left-0 overflow-hidden'>

                        <div className='hover:shadow-2xl  p-3'>
                            <Link  href="/">
                            <a className=''>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                Who we are
                                </span>
                                <span className='block'>
                                We believe in long-term, mutually-beneficial partnerships between ourselves and our clients...
                                </span>
                            </a>
                            </Link>                        
                        </div>

                        <div className='hover:shadow-2xl  p-3'>
                            <Link  href="/">
                            <a className=''>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                Who we are
                                </span>
                                <span className='block'>
                                We believe in long-term, mutually-beneficial partnerships between ourselves and our clients...
                                </span>
                            </a>
                            </Link>                        
                        </div>

                        <div className='hover:shadow-2xl  p-3'>
                            <Link  href="/">
                            <a className=''>
                                <span className='block text-3xl font-bold tracking-wide py-2'>
                                Who we are
                                </span>
                                <span className='block'>
                                We believe in long-term, mutually-beneficial partnerships between ourselves and our clients...
                                </span>
                            </a>
                            </Link>                        
                        </div>
                        </div> 
                        </div> 
                    </li>
                    <li className='text-gray-300 hover:text-blue-400'><Link href="/casestudies/allcasestudies"><a>Case studies</a></Link></li>
                    <li className='text-gray-300 hover:text-blue-400'><Link href="/testimonials"><a>Testimonials</a></Link></li>
                    </ul>
                </div>
                <div className='flex justify-between space-x-6 items-center'>
                    <span className='text-white border border-indigo-700 rounded bg-indigo-700 font-semibold py-2 px-4 hover:bg-transparent hover:border-white'>
                    <Link href="/"><a>Get a qoute</a></Link>
                    </span>
                    <span onClick={handleModes} className='bg-gray-300 p-3 rounded-full text-lg font-bold '>
                    <span className={`${toggle ? '' : 'hidden'}`}><IoSunnyOutline /></span>
                    <span className={`${toggle ? 'hidden' : ''}`}><IoMoonSharp /></span>             
                    </span>
                </div>
                
                </div>
        </div>
        </main>
    )
}

export default Navbar;