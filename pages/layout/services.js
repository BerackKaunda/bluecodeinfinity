
import Image from "next/image";

const Services = () => {
    return(
        <div className="px-5 md:px-20 py-12">
            <div className="py-12  flex flex-col justify-center items-center ">
                <h2 className="text-gray-300 font-thin tracking-widest text-center text-md md:text-lg">
                    COMPANY
                </h2>
                <h1 className="text-white text-center font-bold tracking-widest text-lg md:text-3xl">
                    SERVICES PROVIDED
                </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:py-10">

                <div className="col gridService flex flex-col justify-center items-center space-y-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                        <img className="" src="/images/application.webp" alt="" />
                        <h1 className="text-center text-gray-300 md:text-lg font-bold uppercase">
                        Application development 
                        </h1>
                        <p className="text-white text-xs text-center tracking-wider leading-6 ">
                        Discover. Develop. Improve! Let us take your product from point A to point B in a well planned and strictly controlled environment.
                        </p>
                </div>

                <div className="col gridService flex flex-col justify-center items-center space-y-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                        <img className="" src="/images/product-design.webp" alt="" />
                        <h1 className="text-center text-gray-300 md:text-lg font-bold uppercase">
                        product design 
                        </h1>
                        <p className="text-white text-xs text-center tracking-wider leading-6 ">
                        Get a successful product that is not only visually attractive but is customized to users’ needs as well with the help of a human-centered approach and design thinking.
                        </p>
                </div>

                <div className="col gridService flex flex-col justify-center items-center space-y-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                        <img className="" src="/images/dedicated.webp" alt="" />
                        <h1 className="text-center text-gray-300 md:text-lg font-bold uppercase">
                        Dedicated “smart” team  
                        </h1>
                        <p className="text-white text-xs text-center tracking-wider leading-6 ">
                        Have your team scaled in a fast and safe manner with top engineering experts that fit your company culture and specific needs.
                        </p>
                </div>

                <div className="col gridService flex flex-col justify-center items-center space-y-3 border border-gray-800 hover:border-white p-4 rounded-lg cursor-pointer">
                        <img className="" src="/images/system.webp" alt="" />
                        <h1 className="text-center text-gray-300 md:text-lg font-bold uppercase">
                        System assessment  
                        </h1>
                        <p className="text-white text-xs text-center tracking-wider leading-6 ">
                        Nothing is perfect. We know it, and we can fix it. inVerita team will ensure your software has excellent functionality and help you present a robust product to the market.
                        </p>
                </div>

            </div>
        </div>
    )
}

export default Services;