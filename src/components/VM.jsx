import { missionData, visionData } from "@/app/Database"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export const VM = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 my-20 pt-20 md:mt-0">
                <div className="flex md:flex-row flex-col gap-5">
                    <div className="md:w-[50%] relative">
                        <img
                            className="w-full h-[70lvh] object-cover rounded-3xl brightness-[.75]"
                            src="https://images.unsplash.com/photo-1630128042309-60a8bfb987c7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="visi"
                        />
                        <div className="gradient-blur h-[40%] duration-300 ease-in-out bg-gradient-to-t from-[#645C8F] to-transparent"></div>
                        <div className="absolute top-5 left-6">
                            <p className="px-4 py-2 bg-white bg-opacity-20 shadow-custom text-gray-100 backdrop-blur-sm rounded-xl uppercase tracking-wider font-bold">
                                Vision
                            </p>
                        </div>
                        <div className="absolute bottom-5 left-5 text-white md:text-xl">
                            <p>
                                <span>
                                    <FaQuoteRight />
                                </span>
                                {visionData}
                            </p>
                        </div>
                    </div>
                    <div className="md:w-[50%] relative">
                        <img
                            className="w-full h-screen md:h-[70lvh] object-cover rounded-3xl brightness-[.75]"
                            src="https://images.unsplash.com/photo-1641877492086-771bc14a8e5e?q=80&w=2859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="misi"
                        />
                        <div className="gradient-blur h-[50%] duration-300 ease-in-out bg-gradient-to-t from-[#565656] to-transparent"></div>
                        <div className="absolute top-5 left-6">
                            <p className="px-4 py-2 bg-white bg-opacity-20 shadow-custom text-gray-100 backdrop-blur-sm rounded-xl uppercase tracking-wider font-bold">
                                Mission
                            </p>
                        </div>
                        <div className="absolute bottom-2 left-2 right-2 text-white">
                            <ol className="space-y-2">
                                {missionData.map((el, idx) => (
                                    <li key={idx}
                                        className="bg-white bg-opacity-10 p-2 rounded-2xl backdrop-blur-2xl font-medium"
                                    >
                                        {el}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}