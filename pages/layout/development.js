
const DevelopmentApproach = () => {
    return(
        <div className="py-10 px-5 md:px-12">
            <div className="py-12  flex flex-col justify-center items-center text-center ">
                <h2 className="text-gray-300 font-thin tracking-widest text-md md:text-lg uppercase">
                    OUR
                </h2>
                <h1 className="text-white font-bold tracking-widest text-md md:text-3xl uppercase">
                    development approach
                </h1>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

                <div className="grid flex flex-col justify-start items-center space-y-3 border border-blue-800 p-4 ">
                    <h1 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                        deadline <br/> compliance
                    </h1>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Quickly react to new market changes and demands with relevant software thanks to our custom framework
                    </p>
                </div>

                <div className="grid flex flex-col justify-start items-center space-y-3 border border-blue-800 p-4 ">
                    <h1 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Delivery  <br/> optimization
                    </h1>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Ensure regular and smooth releases and feature updates with enhanced development velocity
                    </p>

                </div>

                <div className="grid flex flex-col justify-start items-center space-y-3 border border-blue-800 p-4 ">
                    <h1 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Staff <br/> retention
                    </h1>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Get motivated and long-term development teams with our efficient retention programs and techniques
                    </p>

                </div>

                <div className="grid flex flex-col justify-start items-center space-y-3 border border-blue-800 p-4 ">
                    <h1 className="text-white uppercase font-semibold text-sm tracking-widest leading-6">
                    Customer  <br/> success management
                    </h1>
                    <hr className='w-1/3 border border-blue-600' />
                    <p className="text-xs text-white tracking-widest leading-6">
                    Make sure that your feedback is properly translated to our development team with a customer success manager
                    </p>

                </div>
            </div>

        </div>
    )
}
export default DevelopmentApproach;