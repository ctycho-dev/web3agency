import { FC } from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


interface IMainSectionBg { }

const MainSectionBg: FC<IMainSectionBg> = ({ }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.2, // Trigger when 20% of the element is in view
    });

    // Animation variants for smooth appearance and motion
    const animationVariants = {
        initial: { opacity: 0, y: -100 }, // Start above and invisible
        animate: { opacity: 1, y: 300 }, // Move down and fade in, then move further down
    };

    const transitionProps = {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop" as "loop", // Explicitly type as "loop"
    };

    return (
        <>
            <motion.div
                className="absolute z-10 h-[64px] w-[2px] rounded-lg bg-gradient-to-b from-blue-500/0 to-blue-500"
                initial="initial"
                animate="animate"
                variants={animationVariants}
                transition={{ ...transitionProps, delay: 0 }}
                style={{ top: "0px", left: "63px" }}
            />
            <motion.div
                className="absolute z-10 h-[64px] w-[2px] rounded-lg bg-gradient-to-b from-blue-500/0 to-blue-500"
                initial="initial"
                animate="animate"
                variants={animationVariants}
                transition={{ ...transitionProps, delay: 0.5 }}
                style={{ top: "384px", left: "191px" }}
            />
            <div className="hidden min-[319px]:block">
                <motion.div
                    className="absolute z-10 h-[64px] w-[2px] rounded-lg bg-gradient-to-b from-blue-500/0 to-blue-500"
                    initial="initial"
                    animate="animate"
                    variants={animationVariants}
                    transition={{ ...transitionProps, delay: 1 }}
                    style={{ top: "96px", left: "319px" }}
                />
            </div>
            <div className="hidden min-[959px]:block">
                <motion.div
                    className="absolute z-10 h-[64px] w-[2px] rounded-lg bg-gradient-to-b from-blue-500/0 to-blue-500"
                    initial="initial"
                    animate="animate"
                    variants={animationVariants}
                    transition={{ ...transitionProps, delay: 1.5 }}
                    style={{ top: "288px", left: "959px" }}
                />
            </div>
            <div className="hidden min-[895px]:block">
                <motion.div
                    className="absolute z-10 h-[64px] w-[2px] rounded-lg bg-gradient-to-b from-blue-500/0 to-blue-500"
                    initial="initial"
                    animate="animate"
                    variants={animationVariants}
                    transition={{ ...transitionProps, delay: 2 }}
                    style={{ top: "0px", left: "895px" }}
                />
            </div>
            <div className="hidden min-[1279px]:block">
                <motion.div
                    className="absolute z-10 h-[64px] w-[2px] rounded-lg bg-gradient-to-b from-blue-500/0 to-blue-500"
                    initial="initial"
                    animate="animate"
                    variants={animationVariants}
                    transition={{ ...transitionProps, delay: 2.5 }}
                    style={{ top: "64px", left: "1279px" }}
                />
            </div>

            <div ref={ref}
                className={`absolute inset-0 z-0 transition-opacity duration-[2.5s] ease-in-out
                ${inView ? 'opacity-100' : 'opacity-0'}`}
            >
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`,
                    }}
                ></div>
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-zinc-950"></div>
            </div>
        </>
    )
}

export default MainSectionBg