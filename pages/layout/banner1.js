

const Banner1 = () => {
    return(
    <div className='py-24 md:px-10 px-2'>
    <div className='bg-banner1 w-full h-auto rounded-xl'>
        <div className='flex flex-col justify-center items-center space-y-8 md:space-y-0 p-5 md:px-32 md:py-16'>
        <h1 className='text-white text-center text-lg lg:text-5xl font-bold racking-wider leading-tight '>
        Web Design & Development
        </h1>
        <h2 className='text-white text-center text-sm tracking-wider leading-loose md:px-16 font-medium md:text-lg lg:py-10'>
            We create Apps, Websites, UI and UX designs, Content Management, Consultancy and eCommerce solutions to help businesses and organisations grow.
        </h2>
        <a href="">
        <button className='hover:bg-indigo-900 bg-blue-600 text-white font-semibold tracking-widest py-3 px-8 rounded-full'>
            Get in touch
        </button>
        </a>
        
        </div>
    </div>

    </div>
    )
}

export default Banner1;