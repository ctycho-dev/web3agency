import { FC } from "react";

import { SiDiscord } from "react-icons/si";
import { BsTwitterX, BsMedium } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";

interface IFooter { }

const Footer: FC<IFooter> = ({ }) => {

    return (
        <>
            <footer className="bg-gradient-to-b from-zinc-950 to-zinc-950 z-20 text-transparent border-t border-zinc-800 py-14 sm:py-20">
                <div className="max-w-7xl m-auto sm:flex items-center justify-between px-6 md:px-10 h-[80px]">
                    <div className="mb-12 sm:mb-0">
                        <div className="text-white text-sm">Managed by</div>
                        <div className="text-3xl font-bold mb-4" style={{
                            WebkitBackgroundClip: "text", // Clips the background to the text for some browsers
                            backgroundImage: "linear-gradient(45deg, #4e97ff, #3f7ad7, #1e58b8)", // Gradient background (optional)
                        }}>WEB# Foundation</div>
                        <div className="flex gap-x-4 mb-4">
                            <BsMedium className=" text-blue-500 text-2xl" />
                            <BiLogoTelegram className=" text-blue-500 text-2xl" />
                            <SiDiscord className=" text-blue-500 text-2xl" />
                            <BsTwitterX className="text-blue-500 text-2xl" />
                        </div>
                        <div className="text-xs text-[#848895]">© 2024 WEB# Foundation. All rights reserved.</div>
                    </div>
                    <div className="flex gap-x-8 text-slate-400 pb-12 sm:pb-0">
                        <ul >
                            <li className="mb-2 transition-colors hover:text-white duration-100 hover:cursor-pointer">About</li>
                            <li className="mb-2 transition-colors hover:text-white duration-100 hover:cursor-pointer">Services</li>
                            <li className="mb-2 transition-colors hover:text-white duration-100 hover:cursor-pointer">Team</li>
                            <li className="mb-2 transition-colors hover:text-white duration-100 hover:cursor-pointer">Cases</li>
                        </ul>
                        <ul>
                            <li className="mb-2 transition-colors hover:text-white duration-100 hover:cursor-pointer">Support</li>
                            <li className="mb-2 transition-colors hover:text-white duration-100 hover:cursor-pointer">Contact us</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer