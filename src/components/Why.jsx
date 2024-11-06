import { whyUsData } from "@/app/Database"

export const WhyUs = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 py-20">
                <div className="text-3xl font-bold mb-5 tracking-wide">
                    <p className="bg-gradient-to-br from-mainColor via-sky-500 to-secondaryColor bg-clip-text text-transparent">
                        Keunggulan Kami
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-br from-mainColor via-sky-500 to-secondaryColor rounded-full"></div>
                </div>
                <div className="flex md:flex-row flex-col gap-5">
                    {whyUsData.map((el, idx) => (
                        <div key={idx} className="group hover:-translate-y-3 duration-300 bg-gradient-to-b from-mainColor via-[#d5f6ff] to-white rounded-3xl md:w-[25%] h-[45lvh] md:h-[35lvh] relative">
                            <div className="bg-white rounded-full p-2 m-2 w-fit text-mainColor text-3xl">
                                {el.icon}
                            </div>

                            <div className="group-hover:-translate-y-5 duration-300 delay-100 absolute bottom-0 bg-white shadow-mainShadow rounded-3xl p-5 w-full h-[50%] md:h-[55%] space-y-2">
                                <h1 className="text-xl font-semibold text-mainColor">
                                    {el.title}
                                </h1>
                                <h2>
                                    {el.description}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}