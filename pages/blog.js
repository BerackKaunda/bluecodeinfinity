import Link from 'next/link'
import Image from 'next/image'
import Banner1 from './layout/banner1'

const News = () => {
    return (
        <div className="pb-28 ">
            <div className= "bg-opacity-10 bg-gradient-to-b  from-indigo-500 to-purple-800 h-auto w-full p-10 flex flex-col space-y-8 justify-center  items-center">
                <h1 className="heroTxt tracking-widest text-5xl text-white font-semibold ">
                Our Blog
                </h1>
                <hr className='bg-white border w-32 mx-4 md:mx-24' />

            </div>
            <div className="grid grid-cols-3 gap-10 p-28">
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/education.webp"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div>
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/education.webp"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div>
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/education.webp"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div>
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/education.webp"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div> 
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/education.webp"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div> 
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/education.webp"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div> 
                <div className="rounded-md ">
                    <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300"
                        alt="Image Alt"
                        src="/images/education.webp"
                        width={2400} height= {1500}
                        layout="responsive"
                        objectFit="cover" // Scale your image down to fit into the container
                    />
                    <div className="p-4 ">
                    <Link href='/'>
                    <a className="text-gray-200 text-lg hover:underline">
                    Custom EHR, EMR, ERX, and other software solutions for Healthcare and Medicine
                    </a>
                    </Link>
                    </div>                
                </div>               
            </div>
            {/* banner starts */}
            <Banner1 />
            {/* banner ends*/}
        </div>
    )
}

export default News;