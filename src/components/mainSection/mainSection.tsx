import { FC } from "react";

interface IMainSection { }

const MainSection: FC<IMainSection> = ({ }) => {

    return (
        <>
            <div className={`
                relative z-10 mx-auto max-w-6xl
                flex flex-col items-center justify-center
                px-4 md:px-8 text-center
                pb-12 pt-24 md:pb-36 md:pt-36
                `}>
                <h1
                    className="font-bold text-transparent leading-none text-center mb-8"
                    style={{
                        WebkitBackgroundClip: "text", // Clips the background to the text for some browsers
                        backgroundImage: "linear-gradient(45deg, #4e97ff, #3f7ad7, #1e58b8)", // Gradient background (optional)
                    }}
                >
                    <span className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl">Web3 </span>
                    <span className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Marketing </span>
                    <span className="text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-2">Agency</span>
                </h1>
                <p className="mb-9 max-w-2xl text-base text-zinc-400 sm:text-lg md:text-xl">
                    Build beautiful landing pages for your startups, clients, and side projects, without having to think about design.
                </p>
                <div
                    className="flex flex-col items-center gap-4 sm:flex-row"
                    style={{ opacity: 1, transform: 'none' }}
                >
                    {/* Try it free button */}
                    <button className="rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 flex items-center gap-2">
                        Check it out
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
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </button>

                    {/* Learn more button */}
                    <button className="transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98] rounded-md px-4 py-2 text-lg text-zinc-100">
                        Learn more
                    </button>
                </div>
                {/* <div className="relative z-[100]">
                        <img src={ussr} alt="" className="w-[320px] shadow-glow rounded-lg" />
                        </div> */}
                <div className="absolute bottom-4">
                </div>
            </div>
        </>
    )
}

export default MainSection