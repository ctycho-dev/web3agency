import { FC } from "react";

import { SiDiscord } from "react-icons/si";
import { BsTwitterX, BsMedium } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

interface IFooter { }

const Footer: FC<IFooter> = ({ }) => {

    const scrollToSection = (section: string) => {
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
            <footer className="bg-gradient-to-b from-zinc-950 to-zinc-950 z-20 text-transparent border-t border-zinc-800 py-14 sm:py-20">
                <div className="max-w-7xl m-auto sm:flex items-center justify-between px-6 md:px-10 h-[80px]">
                    <div className="mb-12 sm:mb-0">
                        <div className="text-white text-sm">Managed by</div>
                        <div className="text-3xl font-bold mb-4" style={{
                            WebkitBackgroundClip: "text", // Clips the background to the text for some browsers
                            backgroundImage: "linear-gradient(45deg, #4e97ff, #3f7ad7, #1e58b8)", // Gradient background (optional)
                        }}>AthenaX Foundation</div>
                        <div className="flex gap-x-4 mb-4">
                            {/* <BsMedium className=" text-blue-500 text-2xl" /> */}
                            <BiLogoTelegram className=" text-blue-500 text-2xl" />
                            {/* <SiDiscord className=" text-blue-500 text-2xl" /> */}
                            <BsTwitterX className="text-blue-500 text-2xl" />
                        </div>
                        <div className="text-xs text-[#848895]">© 2024 WEB# Foundation. All rights reserved.</div>
                    </div>
                    <div className="flex gap-x-8 text-slate-400 pb-12 sm:pb-0">
                    <ul className="grid gap-y-5 font-semibold text-xl">
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
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer