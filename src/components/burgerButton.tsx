import { FC, useState } from "react";
import { MotionConfig, motion } from "framer-motion";

interface IBurgerButton {
    isMobileMenuOpen: boolean
    setMobileMenuOpen: any
}

const BurgerButton: FC<IBurgerButton> = ({ isMobileMenuOpen, setMobileMenuOpen }) => {

    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                animate={isMobileMenuOpen ? "open" : "closed"}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="relative h-14 w-14 rounded-full bg-white/0 transition-colors hover:bg-white/10"
            >
                <motion.span
                    variants={VARIANTS.top}
                    className="absolute h-[2px] w-8 bg-white"
                    style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                />
                <motion.span
                    variants={VARIANTS.middle}
                    className="absolute h-[2px] w-8 bg-white"
                    style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                />
                <motion.span
                    variants={VARIANTS.bottom}
                    className="absolute h-[2px] w-5 bg-white"
                    style={{
                        x: "-50%",
                        y: "50%",
                        bottom: "35%",
                        left: "calc(50% + 6px)",
                    }}
                />
            </motion.button>
        </MotionConfig>
    );
};

const VARIANTS = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 6px)",
        },
    },
};

export default BurgerButton