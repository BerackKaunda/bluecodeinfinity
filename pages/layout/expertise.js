import { useState } from 'react';
import Image from 'next/image';

const Expertise = ()  => {

    const [activeExpertise , setActiveExpertise] = useState("healthcare");

    return(
        <div className="py-24">

            {/* on smaller devices starts */}
            <div className='px-2 lg:hidden'>
                <h1 className="text-gray-200 text-3xl font-semibold tracking-widest">
                Our industries expertise
                </h1>
                <div className='grid grid-cols-2 gap-2 py-5'>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            01
                        </span>
                        <h1 className='text-white text-lg font-semibold'>
                            Healthcare
                        </h1>
                    </div>

                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-purple-600 to-purple-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            02
                        </span>
                        <h1 className='text-white text-lg font-semibold'>
                            Education
                        </h1>
                    </div>

                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-purple-600 to-purple-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            03
                        </span>
                        <h1 className='text-white text-lg font-semibold'>
                            Logistics
                        </h1>
                    </div>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            04
                        </span>
                        <h1 className='text-white text-lg font-semibold'>
                            Marketplace
                        </h1>
                    </div>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            05
                        </span>
                        <h1 className='text-white text-lg font-semibold'>
                            Media
                        </h1>
                    </div>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-purple-600 to-purple-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            06
                        </span>
                        <h1 className='text-white text-lg font-semibold'>
                            Retail
                        </h1>
                    </div>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-purple-600 to-purple-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            07
                        </span>
                        <h1 className='text-white text-lg font-semibold'>
                            Fintech
                        </h1>
                    </div>
                    <div className='flex flex-col justify-start items-start bg-gradient-to-r from-gray-700 to-gray-600 p-3 rounded-md  '>
                        <span className='text-white text-2xl font-bold tracking-widest'>
                            08
                        </span>
                        <h1 className='text-white text-lg font-semibold'>
                            Travel
                        </h1>
                    </div>

                </div>
            </div>
             {/* on smaller devices ends */}

              {/* on larger devices starts */}
            <div className="hidden lg:grid grid-cols-3 space-x-20">
                <div className="col-span-1 px-4 space-y-8">
                    <h1 className="text-gray-200 text-5xl font-semibold tracking-widest">
                        Our industries expertise
                    </h1>
                    <ul className="px-5 space-y-8">                        
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">01</span>
                        <span onClick={() => setActiveExpertise('healthcare')} className={`${activeExpertise === 'healthcare' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Healthcare
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">02</span>
                        <span onClick={() => setActiveExpertise('education')} className={`${activeExpertise === 'education' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Education
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">03</span>
                        <span onClick={() => setActiveExpertise('logistics')} className={`${activeExpertise === 'logistics' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Logistics
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">04</span>
                        <span onClick={() => setActiveExpertise('marketplace')} className={`${activeExpertise === 'marketplace' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Marketplace
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">05</span>
                        <span onClick={() => setActiveExpertise('media')} className={`${activeExpertise === 'media' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Media
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">06</span>
                        <span onClick={() => setActiveExpertise('retail')} className={`${activeExpertise === 'retail' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Retail
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">07</span>
                        <span onClick={() => setActiveExpertise('fintech')} className={`${activeExpertise === 'fintech' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Fintech
                        </span>                        
                        </li>
                        <li className="flex justify-start items-center gap-5 text-3xl">
                        <span className="text-gray-500">08</span>
                        <span onClick={() => setActiveExpertise('travel')} className={`${activeExpertise === 'travel' ? "text-blue-600" : ""} text-white hover:text-blue-600 cursor-poine cursor-pointer`}>
                            Travel
                        </span>                        
                        </li>
                    </ul>
                </div>
                <div className={`${activeExpertise === 'healthcare' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/healthcare.webp"
                        width={2400} height= {1500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-blue-600 text-3xl ">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    <p className="text-gray-200 ">
                    We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.
                    </p>
                    <button className="text-blue-500 underline underline-offset-4 hover:no-underline hover:bg-opacity-10 hover:bg-blue-200 py-1 px-2 hover:rounded-full">
                        Discover industry details
                    </button>
                    </div>
                <div className={`${activeExpertise === 'education' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/education.webp"
                        width={2400} height= {1500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-blue-600 text-3xl ">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    <p className="text-gray-200 ">
                    We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.
                    </p>
                    <button className="text-blue-500 underline underline-offset-4 hover:no-underline hover:bg-opacity-10 hover:bg-blue-200 py-1 px-2 hover:rounded-full">
                        Discover industry details
                    </button>
                </div>
                <div className={`${activeExpertise === 'logistics' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/logistics.webp"
                        width={2400} height= {1500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-blue-600 text-3xl ">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    <p className="text-gray-200 ">
                    We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.
                    </p>
                    <button className="text-blue-500 underline underline-offset-4 hover:no-underline hover:bg-opacity-10 hover:bg-blue-200 py-1 px-2 hover:rounded-full">
                        Discover industry details
                    </button>
                </div>
                <div className={`${activeExpertise === 'marketplace' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/marketplace.webp"
                        width={2400} height= {1500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-blue-600 text-3xl ">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    <p className="text-gray-200 ">
                    We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.
                    </p>
                    <button className="text-blue-500 underline underline-offset-4 hover:no-underline hover:bg-opacity-10 hover:bg-blue-200 py-1 px-2 hover:rounded-full">
                        Discover industry details
                    </button>
                </div>
                <div className={`${activeExpertise === 'media' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/media.webp"
                        width={2400} height= {1500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-blue-600 text-3xl ">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    <p className="text-gray-200 ">
                    We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.
                    </p>
                    <button className="text-blue-500 underline underline-offset-4 hover:no-underline hover:bg-opacity-10 hover:bg-blue-200 py-1 px-2 hover:rounded-full">
                        Discover industry details
                    </button>
                </div>
                <div className={`${activeExpertise === 'retail' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/retail.webp"
                        width={2400} height= {1500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-blue-600 text-3xl ">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    <p className="text-gray-200 ">
                    We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.
                    </p>
                    <button className="text-blue-500 underline underline-offset-4 hover:no-underline hover:bg-opacity-10 hover:bg-blue-200 py-1 px-2 hover:rounded-full">
                        Discover industry details
                    </button>
                </div>
                <div className={`${activeExpertise === 'fintech' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/fintech.webp"
                        width={2400} height= {1500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-blue-600 text-3xl ">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    <p className="text-gray-200 ">
                    We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.
                    </p>
                    <button className="text-blue-500 underline underline-offset-4 hover:no-underline hover:bg-opacity-10 hover:bg-blue-200 py-1 px-2 hover:rounded-full">
                        Discover industry details
                    </button>
                </div>
                <div className={`${activeExpertise === 'travel' ? "" : "hidden"}  col-span-2 flex flex-col justify-start items-start   space-y-8`}>
                    <Image
                        alt="Image Alt"
                        src="/images/travel.webp"
                        width={2400} height= {1500}
                        layout="intrinsic"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <h1 className="text-blue-600 text-3xl ">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </h1>
                    <p className="text-gray-200 ">
                    We help established businesses such as hospitals, laboratories, and pharmacies, create turnkey products, and simplify digital transformation.
                    </p>
                    <button className="text-blue-500 underline underline-offset-4 hover:no-underline hover:bg-opacity-10 hover:bg-blue-200 py-1 px-2 hover:rounded-full">
                        Discover industry details
                    </button>
                </div>

            </div>
             {/* on larger devices ends */}
        </div>
    )
}
export default Expertise;