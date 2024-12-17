import { companyProfile, contactData } from "@/app/Database"

export const Contact = () => {
    return (
        <>
            <section className="md:mx-24 mx-5 py-24">
                <div className="text-3xl font-bold mb-5 tracking-wide">
                    <p className="bg-gradient-to-br from-mainColor via-sky-500 to-secondaryColor bg-clip-text text-transparent">
                        Kontak Kami
                    </p>
                    <div className="w-32 h-1 bg-gradient-to-br from-mainColor via-sky-500 to-secondaryColor rounded-full"></div>
                </div>
                <div className="flex flex-col gap-5 mb-7">
                    {contactData.map((el, idx) => (
                        <a
                            key={idx}
                            href={el.link}
                            className=""
                        >
                            <div className="p-3 bg-white rounded-2xl shadow-mainShadow">
                                <div className="flex gap-5 items-center">
                                    <div className="text-3xl text-mainColor">
                                        {el.icon}
                                    </div>
                                    <div>
                                        <h1 className="uppercase text-xs font-bold text-mainColor">
                                            {el.name}
                                        </h1>
                                        <h2 className="font-medium">
                                            {el.un}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="shadow-mainShadow mapouter rounded-3xl overflow-hidden grow h-[50lvh] md:h-[50lvh] w-full">
                    <div className="overflow-hidden rounded-box h-full">
                        <iframe
                            className="w-full h-full"
                            src={companyProfile.contact.mapEmbedUrl}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}