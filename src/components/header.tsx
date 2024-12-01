import { FC } from "react";
import { useInView } from 'react-intersection-observer';

import { AnimatedHamburgerButton } from "../components/burger";
import { SiDiscord } from "react-icons/si";
import { BsTwitterX, BsMedium } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { ShiftingDropDown } from "./shiftingDropdown";

interface IHeader { }

const Header: FC<IHeader> = ({ }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0, // Trigger when 20% of the element is in view
    });

    return (
        <>
            {/* <header className="relative h-[100px] z-20"> */}
            <header ref={ref} className={`sticky top-0 bg-gradient-to-b from-zinc-950 to-zinc-950 z-20 text-transparent border-b border-zinc-800
                transition-all duration-[2s] ease-in-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[80px]'}`}>
                <div className="flex items-center justify-between px-4 md:px-8 h-[80px]">
                    <div className="flex items-center gap-x-6">
                        <div className="text-3xl" style={{
                            WebkitBackgroundClip: "text", // Clips the background to the text for some browsers
                            backgroundImage: "linear-gradient(45deg, #4e97ff, #3f7ad7, #1e58b8)", // Gradient background (optional)
                        }}>WEB#</div>
                        <div className="hidden md:block">
                            <ShiftingDropDown />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-8">
                        <div className="hidden md:flex gap-x-4">
                            <BsMedium className=" text-blue-500 text-2xl" />
                            <BiLogoTelegram className=" text-blue-500 text-2xl" />
                            <SiDiscord className=" text-blue-500 text-2xl" />
                            <BsTwitterX className="text-blue-500 text-2xl" />
                        </div>
                        <div className="md:hidden">
                            <AnimatedHamburgerButton />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header