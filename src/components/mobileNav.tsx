import { FC, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
    FiHome,
    FiFile,
    FiFolder,
    FiHelpCircle
} from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
import plus from '../assets/plus.svg'


interface IMobileNav {
    isMobileMenuOpen: boolean
    setMobileMenuOpen: any
}

const MobileNav: FC<IMobileNav> = ({ isMobileMenuOpen, setMobileMenuOpen }) => {

    const scrollToSection = (section: string) => {
        setMobileMenuOpen(false)
        const faqSection = document.getElementById(section);
        if (faqSection) {
            const offset = 100; // Offset in pixels
            const elementPosition = faqSection.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };


    return (
        <>
            <div id="overlay" className={`
                        bg-[#0006] fixed left-0 right-0 top-0 bottom-0
                        transition-opacity duration-800
                        ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 invisible'}
                        `}>
            </div>
            <div id="mobile-nav" className={`z-50
                        border border-zinc-700 bg-gradient-to-br from-zinc-950 to-zinc-900 fixed left-4 right-4 top-4 bottom-4 
                        rounded-lg p-6 min-w-80 min-h-80
                        transition-transform duration-500
                        ${isMobileMenuOpen ? '' : 'translate-y-0 translate-x-[-110%]'}`}>
                <div className="relative flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-between items-center mb-8">
                            <div className="font-bold text-xl">Меню</div>
                            <div className="bg-white flex md:hidden shadow-custom rounded-full justify-center items-center w-10 h-10 hover:cursor-pointer"
                                onClick={() => { setMobileMenuOpen(false) }}><img src={plus} alt="" className="w-4 rotate-45" />
                            </div>
                        </div>
                        <div className="mb-20">
                            <ul className="grid gap-y-5 font-semibold text-xl mb-10">
                                <li >
                                    <div onClick={() => { scrollToSection('services') }} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <span className="text-sm">Services</span>
                                    </div>
                                </li>
                                <li >
                                    <div onClick={() => { scrollToSection('features') }} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <span className="text-sm">Advantages</span>
                                    </div>
                                </li>
                                <li >
                                    <div onClick={() => { scrollToSection('faq') }} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <span className="text-sm">FAQ</span>
                                    </div>
                                </li>
                                <li >
                                    <div onClick={() => { scrollToSection('get_in_touch') }} className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                        <span className="text-sm">Get in Touch</span>
                                    </div>
                                </li>
                                {/* <li className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                    <a href="tel:+79956295889" className="text-sm">+7(995) 629-58-89</a>
                                </li>
                                <li className="hover:text-green-primary hover:cursor-pointer flex gap-x-2 items-center">
                                    <a href="mailto:info@leeblock.ru" className="text-sm">info@leeblock.ru</a>
                                </li> */}
                            </ul>
                            <div className="flex gap-x-4">
                                <BiLogoTelegram className=" text-blue-500 text-2xl" />
                                <BsTwitterX className="text-blue-500 text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MobileNav