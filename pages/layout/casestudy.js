import Link from 'next/link'
import Image from 'next/image'
import { SiReact, SiFigma, SiTailwindcss } from "react-icons/si"

const CaseStudy = () => {
    return(
        // case study section starts
        <div className='py-28'>
            <div className='flex justify-between items-center w-full px-1 md:px-16'>
            <span className='caseText text-white font-semibold tracking-wider text-md md:text-2xl'>
                Case Studies
                <hr className='w-1/3 caseLine' />
            </span>

            <span className='caseText text-indigo-500 font-semibold tracking-wider text-md md:text-2xl '>
                <Link href='/'>
                <a>More Cases</a>
                </Link>
                <hr className='border border-indigo-500 w-1/3 caseLine' />
            </span>
            </div>


            {/* case studies starts */}
            <div className=' px-2 py-24 lg:pl-20'>
            <div className='grid lg:grid-cols-3 '>
            <div className='grid flex flex-col justify-start space-y-4 md:space-y-8 z-10 py-10 '>
                
                 {/* tags */}
                <div className='flex flex-wrap justify-start items-center text-gray-100 gap-2 text-sm md:text-md tracking-widest font-semibold'>
                <span>Construction,</span>
                <span>Building,</span>
                <span>3D</span>
                <span>Printing,</span>
                <span>CAD</span>
                </div>
                {/* description */}
                <h2 className='text-white font-semibold text-lg md:text-2xl leading-loose tracking-widest'>
                $40 Million Raised by the Mighty Buildings in Series B Funding
                </h2>

                {/* view project */}
                <div className='flex justify-start'>
                <span className='caseText text-white font-thin tracking-widest text-md uppercase'>
                <Link href='/'>
                    <a>View Project</a>
                </Link>            
                <hr className='border border-blue-300 w-1/3 caseLine' />
                </span>
                </div>
                

                {/* technologies used */}
                <div className=''>
                    <h1 className='text-white text-md tracking-widest font-medium'>
                        Crafted By:
                    </h1>
                    <div className='flex py-4 justify-start gap-2'>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiFigma />
                            </span>
                            <span className='text-gray-200 text-sm font-medium'>
                            Figma
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiTailwindcss />
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            TailwindCSS
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiReact />
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            ReactJS
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* case study snap pic */}
            <div className='grid col-span-2'>
                <Image 
                className='w-full ' 
                src="/images/preview1.avif" 
                alt=""
                width='100%'
                height='80'
                layout='responsive'
                />
            </div>
            </div>
            </div>
            {/* case studies end */}
            <hr className='mx-4 md:mx-24' /> 


            {/* case studies starts */}
            <div className='py-24 px-2 md:pr-20'>
            <div className='grid md:grid-cols-3 '>

            {/* case study snap pic */}
            <div className='grid col-span-2'>
            <Image 
                className='w-full ' 
                src="/images/preview2.avif" 
                alt=""
                width='100%'
                height='80'
                layout='responsive'
                />
            </div>
            <div className='grid flex flex-col justify-start space-y-4 md:space-y-8 z-10 py-10 md:p-10'>
                
                 {/* tags */}
                <div className='flex flex-wrap justify-start items-center text-gray-100 gap-2 text-sm md:text-md tracking-widest font-semibold'>
                <span>Construction,</span>
                <span>Building,</span>
                <span>3D</span>
                <span>Printing,</span>
                <span>CAD</span>
                </div>
                {/* description */}
                <h2 className='text-white font-semibold text-lg md:text-2xl leading-loose tracking-widest'>
                $40 Million Raised by the Mighty Buildings in Series B Funding
                </h2>

                {/* view project */}
                <div className='flex justify-start'>
                <span className='caseText text-white font-thin tracking-widest text-md uppercase'>
                <Link href='/'>
                    <a>View Project</a>
                </Link>            
                <hr className='border border-blue-300 w-1/3 caseLine' />
                </span>
                </div>
                

                {/* technologies used */}
                <div className=''>
                    <h1 className='text-white text-md tracking-widest font-medium'>
                        Crafted By:
                    </h1>
                    <div className='flex py-4 justify-start gap-2'>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiFigma />
                            </span>
                            <span className='text-gray-200 text-sm font-medium'>
                            Figma
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiTailwindcss />
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            TailwindCSS
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiReact />
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            ReactJS
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            </div>
            </div>
            {/* case studies end */}
            <hr className='mx-4 md:mx-24' />  
             {/* case studies starts */}
            <div className='px-2 py-24 lg:pl-20'>
            <div className='grid lg:grid-cols-3 '>
            <div className='grid flex flex-col justify-start space-y-4 md:space-y-8 z-10 py-10 '>
                
                 {/* tags */}
                <div className='flex flex-wrap justify-start items-center text-gray-100 gap-2 text-sm md:text-md tracking-widest font-semibold'>
                <span>Construction,</span>
                <span>Building,</span>
                <span>3D</span>
                <span>Printing,</span>
                <span>CAD</span>
                </div>
                {/* description */}
                <h2 className='text-white font-semibold text-lg md:text-2xl leading-loose tracking-widest'>
                $40 Million Raised by the Mighty Buildings in Series B Funding
                </h2>

                {/* view project */}
                <div className='flex justify-start'>
                <span className='caseText text-white font-thin tracking-widest text-md uppercase'>
                <Link href='/'>
                    <a>View Project</a>
                </Link>            
                <hr className='border border-blue-300 w-1/3 caseLine' />
                </span>
                </div>
                

                {/* technologies used */}
                <div className=''>
                    <h1 className='text-white text-md tracking-widest font-medium'>
                        Crafted By:
                    </h1>
                    <div className='flex py-4 justify-start gap-2'>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiFigma />
                            </span>
                            <span className='text-gray-200 text-sm font-medium'>
                            Figma
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiTailwindcss />
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            TailwindCSS
                            </span>
                        </div>
                        <div className='flex flex-col items-center gap-2 justify-center p-2'>
                            <span className='bg-gray-200 p-3 rounded-full text-indigo-700 text-3xl'>
                            <SiReact />
                            </span>
                            <span className='text-gray-200 text-sm font-medium '>
                            ReactJS
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* case study snap pic */}
            <div className='grid col-span-2'>
                <Image 
                className='w-full ' 
                src="/images/preview4.avif" 
                alt=""
                width='100%'
                height='80'
                layout='responsive'
                />
            </div>
            </div>
            </div>
            {/* case studies end */}
            <div className='flex justify-center items-center'>
            <span className='caseText text-indigo-500 font-semibold tracking-widest text-2xl '>
                <Link href='/'>
                <a>More Cases</a>
                </Link>
                <hr className='border border-indigo-500 w-1/3 caseLine' />
            </span>
            </div>
        </div>
        // case study section ends
    )
}

export default CaseStudy;