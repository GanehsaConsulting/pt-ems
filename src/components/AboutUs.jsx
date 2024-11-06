import { companyProfile } from "@/app/Database"

export const AboutUs = () => {
    return (
        <>
            <section id="tentang-kami" className="md:mx-24 mx-5 my-20 relative hidden md:block">
                <img
                    className="w-full h-[60lvh] object-cover rounded-3xl brightness-75"
                    src="https://images.unsplash.com/photo-1655313719493-16ebe4906441?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="about us"
                />
                <div className="md:block hidden"></div>
                <div className="absolute bottom-0 left-0 w-[50%]">
                    <div className="bg-white bg-opacity-0 pt-7 pb-3 pr-7 pl-3 rounded-tr-3xl">
                        <div className="bg-[#afebff48] backdrop-blur-lg shadow-xl text-white p-5 rounded-2xl space-y-2">
                            <p className="text-2xl font-semibold uppercase tracking-wider">
                                Tentang Kami
                            </p>
                            <h1>
                                {companyProfile.companyInfo.description}
                            </h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mobile */}
            <section className="md:mx-24 mx-5 my-20 relative block md:hidden">
                <div className="flex flex-col items-center gap-5 relative">
                    <img
                        className="w-[85%] h-[50lvh] object-cover rounded-3xl"
                        src="https://images.unsplash.com/photo-1655313719493-16ebe4906441?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="about us"
                    />
                    <div className="absolute -bottom-[30%] space-y-2">
                        <p className="text-2xl font-semibold w-fit uppercase tracking-wide bg-[#afebff48] backdrop-blur-xl px-3 py-2 rounded-3xl shadow-custom">
                            Tentang Kami
                        </p>
                        <h1 className="text-justify bg-[#afebff48] backdrop-blur-xl p-5 rounded-3xl shadow-custom">
                            {companyProfile.companyInfo.description}
                        </h1>
                    </div>
                </div>
            </section>
        </>
    )
}