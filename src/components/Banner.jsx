import { FaArrowCircleRight } from "react-icons/fa";

export const Banner = () => {
    return (
        <>
            <div className="h-screen w-screen flex flex-col justify-end animate__animated animate__fadeInDown">
                <section className="mx-3 my-3 relative overflow-hidden rounded-3xl shadow-secondaryShadow">
                    <img
                        className="md:h-[90lvh] h-[88lvh] w-full object-cover rounded-3xl brightness-90 bg-[#ad724bcf]"
                        src="https://images.unsplash.com/photo-1700832082152-0416a3ee5e60?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Mines" />
                    <div className="gradient-blur h-[50%] duration-300 ease-in-out bg-gradient-to-t from-[#0167B0] to-transparent"></div>
                    <div className="absolute bottom-0">
                        <div className="m-5">
                            <div className="uppercase text-white opacity-85 relative mb-3">
                                PT Elka Mitra Sejahtera
                                <div className="w-[10%] h-[3px] bg-white font-[600] rounded-full"></div>
                            </div>
                            <h1 className="text-2xl md:text-3xl text-white font-bold tracking-wide">
                                Konsultasi Izin Kesehatan Aman & Terpecaya
                            </h1>
                            <p className="md:w-[50%] text-white opacity-80">
                                Dapatkan solusi lengkap dan profesional dalam pengurusan izin usaha kesehatan. Kami hadir untuk memberikan panduan terbaik agar proses izin Anda lebih mudah dan terpercaya.
                            </p>
                            <button
                                className="px-2 py-2 mt-5 flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-md text-white font-bold uppercase tracking-wider rounded-full group"
                            >
                                <span className="group-hover:translate-x-[300%] duration-300 group-hover:delay-75 group-hover:animate-pulse">
                                    <FaArrowCircleRight className="text-3xl" />
                                </span>
                                <span className="group-hover:-translate-x-[40%] duration-300 pr-1">
                                    Jelajahi
                                </span>
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}