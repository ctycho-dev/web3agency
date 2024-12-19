import { FC, useState } from "react";
import { useInView } from 'react-intersection-observer';

import MobileNav from "./mobileNav";
import BurgerButton from "./burgerButton";
import { SiDiscord } from "react-icons/si";
import { BsTwitterX, BsMedium } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { ShiftingDropDown } from "./shiftingDropdown";

interface IHeader { }

const Header: FC<IHeader> = ({ }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0, // Trigger when 20% of the element is in view
    });

    return (
        <>
            {/* <header className="relative h-[100px] z-20"> */}
            <header ref={ref} className={`sticky top-0 bg-gradient-to-b from-zinc-950 to-zinc-950 z-20 text-transparent border-b border-zinc-800
                transition-all duration-[2s] ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[80px]'}`}>
                <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
                    <div className="flex items-center gap-x-6">
                        <div className="text-3xl" style={{
                            WebkitBackgroundClip: "text", // Clips the background to the text for some browsers
                            backgroundImage: "linear-gradient(45deg, #4e97ff, #3f7ad7, #1e58b8)", // Gradient background (optional)
                        }}>AthenaX</div>
                        {/* <div className="hidden md:block">
                            <ShiftingDropDown />
                        </div> */}
                        <ul className="hidden md:flex py-4 md:py-0">
                            <li className='flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors text-neutral-400 hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100'>Services</li>
                            <li className='flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors text-neutral-400 hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100'>Advantages</li>
                            <li className='flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors text-neutral-400 hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100'>FAQ</li>
                            <li className='flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors text-neutral-400 hover:cursor-pointer hover:bg-neutral-800 hover:text-neutral-100'>Get in Touch</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <div className="hidden md:flex gap-x-4">
                            {/* <BsMedium className=" text-blue-500 text-2xl" /> */}
                            <BiLogoTelegram className=" text-blue-500 text-2xl" />
                            {/* <SiDiscord className=" text-blue-500 text-2xl" /> */}
                            <BsTwitterX className="text-blue-500 text-2xl" />
                        </div>
                        <div className="md:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            <BurgerButton isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                        </div>
                    </div>
                </div>
            </header>
            <MobileNav isMobileMenuOpen={isMobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </>
    )
}

export default Header