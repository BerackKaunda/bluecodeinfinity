
import Link from 'next/link'
import Image from 'next/image'

const ImageGallery = () => {
    return (
        <div>
            <div className="py-12  flex flex-col justify-center items-center ">
                <h2 className="text-gray-300 font-thin tracking-widest text-center text-md md:text-lg">
                    COMPANY
                </h2>
                <h1 className="text-white text-center font-bold tracking-widest text-lg md:text-3xl uppercase">
                    recent works
                </h1>
            </div>
        
        <div className="grid grid-cols-3 gap-4 overflow-auto will-change">
            <div className="grid">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery1.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="grid grid-rows-3 grid-flow-row gap-4">
            <div className="row-span-3 col-span-2">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery3.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery5.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            <div className="col-span-1">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery4.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            </div>
            <div className="grid">
            <Image className="rounded-md transition duration:300 hover:scale-110 hover:transition hover:duration-300" 
                src="/images/gallery2.avif" 
                alt=""
                width={2400} height= {2400}
                layout='intrinsic'
                objectFit="cover"
                />
            </div>
            </div>
        </div>    
        
    );
}
export default ImageGallery;