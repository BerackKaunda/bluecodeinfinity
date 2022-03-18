import { useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './layout/navbar'
import Image from 'next/image'

import { SiReact, SiFigma, SiTailwindcss } from "react-icons/si"
import CaseStudy from './layout/casestudy'
import Services from './layout/services'
import DevelopmentApproach from './layout/development'
import Footer from './layout/footer'
import Banner1 from './layout/banner1'
import Contactus from './layout/contactus'
import Expertise from './layout/expertise'
import News from './layout/news'
import ImageGallery from './layout/image-gallery'
import Testimonials from './testimonials'

const Home = () => {


  return (
    <main className=" ">

      {/* The head section */}
      <Head>
        <title>Bluecode Infinity - Your premium software development patner</title>
        <meta name="description" content="We create scalable and meaningful hi-tech solution for your business" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
        
      </Head>

      {/* slideshow section */}
      <div className=' '>
        {/* the first slideshow */}
        <div className='bg-opacity-10 bg-gradient-to-l  from-indigo-500 to-purple-800 h-auto w-full p-10'>
          <div className='grid grid-cols-2 gap-10 '>
            <div className='grid  p-10'>
              <h1 className='heroTxt text-5xl font-semibold tracking-wider leading-relaxed text-white '>
                <span className='text-pink-300 '>Design-driven </span>
                development of
                your <span className='text-pink-300'>web products </span>
                
                for years
              </h1>

              <div className='pt-10 flex justify-start space-x-10 items-center '>
              <Link href='#contact-us'>
                <a className='bg-pink-300 text-gray-900 border border-transparent p-3  rounded-lg hover:border-white hover:bg-transparent hover:text-white'>
                  Get project estimate
                </a>
                </Link>
                <Link href='/about'><a className='text-white underline underline-offset-4 hover:text-pink-300'>
                  All about our brand
                </a></Link>
                
              </div>
            </div>

          <div className='grid bg-hero-pattern'>

          </div>

          </div>
        </div>
      </div>

      <div className='flex justify-center items-center py-24 px-2 lg:px-40'>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div className='grid col flex flex-col space-y-3'>
            <div>
              <h1 className='text-white font-thin text-sm md:text-md '>
              Design. Build. Improve.
              </h1>
            </div>
            <div>
              <p className='text-white text-lg md:text-2xl font-semibold tracking-wider leading-tighter'>
              Driving your business <br /> forward with strong products
              </p>
            </div>
          </div>
          <div className='grid col'>
            <p className='text-white text-sm tracking-wider leading-6'>
            We are a full-service digital agency that builds immersive user experience. Our team creates an exceptional visualization and thought-out functionality. We believe, our clients deserve to be remarkable in their business. The studio develops the products people appreciate all around the world.
            </p>
          </div>

        </div>

      </div>

      {/* services section starts */}
      <Services />
      {/* services section ends */}


      {/* Image Gallery starts */}
      <ImageGallery />
      {/* Image Gallery ends */}

      {/* development approach section starts */}
      <DevelopmentApproach />
      {/* development approach section ends */}

      {/* case studies section starts */}
      <CaseStudy />
      {/* case studies section starts */}
      
      {/* expertise section starts */}
            <Expertise />
      {/* expertise section ends */}
    
      {/* testimonials starts */}
          <Testimonials />
      {/* testimonials ends*/}

      {/* banner starts */}
      <Banner1 />
      {/* banner ends*/}

      {/* contactus form starts */}
      <div id="contact-us">
      <Contactus />
      </div>      
      {/* contactus form ends */}

      {/* company news starts */}
      <News />
      {/* company news ends*/}


    </main>
  )
}

export default Home;