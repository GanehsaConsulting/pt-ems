"use client"
import { NavbarLinks } from "@/app/Database";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [togglePos, setTogglePos] = useState(0); // Posisi toggle
    const linkRefs = useRef([]); // Refs untuk setiap link
    const extraWidth = 20; // Extra width (10px kiri dan kanan)

    function updateToggle(id) {
        if (linkRefs.current[id]) {
            const linkWidth = linkRefs.current[id].offsetWidth;
            const linkLeft = linkRefs.current[id].offsetLeft;

            // Tambahkan extra width
            setTogglePos({
                width: linkWidth + extraWidth, // Tambahkan lebar ekstra
                left: linkLeft - extraWidth / 2 // Posisikan ekstra di kiri dan kanan
            });
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 100);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);

    // Fungsi scroll untuk masing-masing id
    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - (window.innerHeight / 2 - element.offsetHeight / 2);

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <>
            <div className={`z-[100] w-full px-3 fixed animate__animated animate__fadeInDown`}>
                <nav className={`${visible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "bg-white bg-opacity-50 backdrop-blur-md" : "bg-secondaryColor"} duration-200 ease-in-out transition-all flex justify-between items-center w-full shadow-secondaryShadow rounded-b-3xl py-1 px-1`}>
                    <div className="navbar-start w-fit">
                        <Image src={'/logo.png'} width={40} height={40} className="ml-2" alt="PT Elka Mitra Sejahtera Logo" />
                    </div>
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl">PT Elka Mitra Sejahtera</a>
                    </div>
                    <div className="navbar-end w-fit">
                        <button className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </nav>
                <nav className={`${visible ? "translate-y-0" : "-translate-y-full"} ${isScrolled ? "scale-100" : "scale-0"} origin-top duration-300 ease-in-out transition-all w-full flex items-center justify-center mt-2`}>
                    <ul className={`carousel2 md:w-fit w-full px-[17px] py-3 bg-white bg-opacity-50 rounded-full backdrop-blur-md md:flex gap-5 justify-between relative shadow-[0px_0px_11px_0px_#bce3ff]`}>
                        {NavbarLinks.map((el, idx) => (
                            <li key={idx} ref={el => linkRefs.current[idx] = el} className="carousel-item relative">
                                <button onClick={() => updateToggle(idx)}>
                                    <a onClick={() => scrollToElement(el.href)} className="font-medium md:text-base text-sm">
                                        {el.label}
                                    </a>
                                </button>
                            </li>
                        ))}
                        <div
                            className="absolute bg-white h-[35px] rounded-full transition-all duration-300 ease-in-out -z-[100] shadow-custom"
                            style={{ width: togglePos.width, left: togglePos.left, top: 6.5 }}
                        />
                    </ul>
                </nav>
            </div>
        </>
    )
}