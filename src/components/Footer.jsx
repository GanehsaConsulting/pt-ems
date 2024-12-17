import { companyProfile, NavbarLinks } from "@/app/Database"
import Image from "next/image"

export const Footer = () => {
    return (
        <>
            <footer className="footer bg-gradient-to-b shadow-custom from-white via-sky-50 rounded-t-3xl to-secondaryColor text-base-content p-10">
                <aside>
                    <Image src={'/logo.png'} width={80} height={80} alt="PT Elka Mitra Sejahtera Logo" />
                    <div>
                        <span className="uppercase font-bold bg-gradient-to-br from-mainColor via-sky-500 to-sky-300 bg-clip-text text-transparent">
                            PT Elka Mitra Sejahtera
                        </span>
                        <br />
                        Konsultasi Izin Kesehatan Aman & Terpecaya
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Address</h6>
                    <a
                        href={companyProfile.contact.mapLink}
                        className="w-[30lvw]"
                    >
                     {companyProfile.contact.address}
                    </a>
                </nav>
                <nav>
                    <h6 className="footer-title">Navigasi</h6>
                    {NavbarLinks.map((el, idx) => (
                        <a
                            className="link link-hover"
                            href={"#" + el.href}
                        >
                            {el.label}
                        </a>
                    ))}
                </nav>
            </footer>
        </>
    )
}