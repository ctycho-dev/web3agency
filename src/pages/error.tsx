import { FC } from "react";
import { motion } from "framer-motion";


const animations = {
    initial: { y: 0, opacity: 1 },
    animate: { y: 300, opacity: 0 },
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
};



const Home: FC = () => {

    return (
        <>
            {/* Main Content Section */}
            <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-36">
                {/* Announcement Banner */}
                <div
                    className="relative"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <span className="relative z-10 mb-4 inline-block rounded-full border border-zinc-700 bg-zinc-900/20 px-3 py-1.5 text-xs text-zinc-50 md:mb-0">
                        Exciting announcement 🎉
                        <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0"></span>
                    </span>
                </div>
                {/* Heading */}
                <h1
                    className="mb-3 text-center text-3xl font-bold leading-tight text-zinc-50 sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
                    style={{ opacity: 1, transform: "none" }}
                >
                    A landing page template that works for you
                </h1>
                {/* Subheading */}
                <p
                    className="mb-9 max-w-2xl text-center text-base leading-relaxed text-zinc-400 sm:text-lg md:text-lg md:leading-relaxed"
                    style={{ opacity: 1, transform: "none" }}
                >
                    Build beautiful landing pages for your startups, clients, and side
                    projects, without having to think about design.
                </p>
                {/* Call-to-Action Buttons */}
                <div
                    className="flex flex-col items-center gap-6 sm:flex-row"
                    style={{ opacity: 1, transform: "none" }}
                >
                    <button className="rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 flex items-center gap-2">
                        Try it free
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                    <button className="transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98] rounded-md px-4 py-2 text-zinc-100">
                        Learn more
                    </button>
                </div>
            </div>
            {/* <div
                className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
                style={{
                    top: "0px",
                    left: "63px",
                    opacity: 0,
                    transform: "translateY(256px) translateZ(0px)",
                }}
            ></div>
            <div
                className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
                style={{
                    top: "384px",
                    left: "191px",
                    opacity: 0,
                    transform: "translateY(256px) translateZ(0px)",
                }}
            ></div>
            <div
                className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
                style={{
                    top: "96px",
                    left: "319px",
                    opacity: 0.00224128,
                    transform: "translateY(255.863px) translateZ(0px)",
                }}
            ></div>
            <div
                className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
                style={{
                    top: "288px",
                    left: "959px",
                    opacity: 0,
                    transform: "translateY(256px) translateZ(0px)",
                }}
            ></div>
            <div
                className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
                style={{
                    top: "0px",
                    left: "895px",
                    opacity: 0.0880857,
                    transform: "translateY(5.43564px) translateZ(0px)",
                }}
            ></div>
            <div
                className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
                style={{
                    top: "64px",
                    left: "1279px",
                    opacity: 0.352914,
                    transform: "translateY(233.674px) translateZ(0px)",
                }}
            ></div> */}
            <motion.div
                className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
                {...animations}
                style={{ top: "0px", left: "63px" }}
            />
            <motion.div
                className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: 300, opacity: 0 }}
                transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
                style={{ top: "384px", left: "191px" }}
            />
            {/* Background Section */}
            <div className="absolute inset-0 z-0" style={{ opacity: 1 }}>
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
                    }}
                ></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-zinc-950"></div>
            </div>
        </>
    );
};

export default Home;
