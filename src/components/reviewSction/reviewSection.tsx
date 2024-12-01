import { FC, useState, useRef } from "react";
import UserProfileCard from "./userProfileCard";

interface IReviewSection { }

const ReviewSection: FC<IReviewSection> = ({ }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [_, setCurrentHeight] = useState<number | undefined>(450)
    const reviewRef = useRef<HTMLDivElement>(null);

    const handleClick = () => {

        setIsOpen(!isOpen);
        if (isOpen) {
            setCurrentHeight(reviewRef?.current?.scrollHeight)
        } else {
            setCurrentHeight(450)
        }
    };

    return (
        <>
            <div className="max-w-7xl m-auto mb-24">
                <div
                    ref={reviewRef}
                    className="relative overflow-hidden grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-white transition-[max-height] duration-300 ease-out px-4 md:px-8"
                    style={{
                        maxHeight: isOpen ? `${reviewRef?.current?.scrollHeight}px` : '450px',
                    }}
                >
                    <UserProfileCard />
                    <UserProfileCard />
                    <UserProfileCard />
                    <UserProfileCard />
                    <UserProfileCard />
                    <UserProfileCard />
                    <UserProfileCard />
                    <UserProfileCard />
                    <UserProfileCard />
                    <UserProfileCard />
                    <div
                        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-b from-zinc-950/0 to-zinc-950 transition-[top] duration-300`}
                        style={{
                            top: isOpen ? `100%` : '0',
                        }}
                    >
                    </div>
                </div>
                <button
                    className="relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-950 px-3 py-1.5 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:translate-y-[200%] before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 before:content-[''] hover:scale-105 hover:text-zinc-900 hover:before:translate-y-[0%] active:scale-100 mx-auto mt-12"
                    onClick={handleClick}
                >
                    View more
                </button>
            </div>
        </>
    )
}

export default ReviewSection