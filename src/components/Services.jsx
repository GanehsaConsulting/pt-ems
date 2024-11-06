import { companyProfile } from "@/app/Database"

export const Services = () => {
    return (
        <>
            <section className="bg-[#ffffff] min-h-screen">
                <div className="md:mx-24 mx-5 py-20">
                    <div className="text-3xl font-bold -mb-24 md:-mb-8 tracking-wide">
                        <p className="bg-gradient-to-br from-mainColor via-sky-500 to-secondaryColor bg-clip-text text-transparent">
                            Layanan Kami
                        </p>
                        <div className="w-32 h-1 bg-gradient-to-br from-mainColor via-sky-500 to-secondaryColor rounded-full"></div>
                    </div>
                    <div className="w-full md:flex flex-wrap justify-center md:gap-5">
                        {companyProfile.services.map((el, idx) => (
                            <div className={`group w-full md:w-[30%] md:my-14 my-32 relative`} key={idx}>
                                <img
                                    className="h-[50lvh] w-full object-cover rounded-3xl"
                                    src={el.img}
                                    alt={el.name}
                                />
                                <div className="group-hover:scale-95 duration-300 ease-in-out absolute bottom-[-100px] left-0 bg-white bg-opacity-80 min-h-[50%] backdrop-blur-md rounded-3xl p-5 space-y-5 m-0 shadow-mainShadow">
                                    <h1 className="text-xl font-bold">
                                        {el.name}
                                    </h1>
                                    <h2>
                                        {el.description}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}