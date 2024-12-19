import { FC } from "react";
import { useInView } from 'react-intersection-observer';

interface IServiceFour { }

const ServiceFour: FC<IServiceFour> = ({ }) => {

    const { ref, inView } = useInView({
        // triggerOnce: true, // Trigger the animation only once
        threshold: 0.2, // Trigger when 20% of the element is in view
    });

    return (
        <>
            <div ref={ref} className={`col-span-2 h-fit sm:h-[209px] transition-all duration-1000 ease-in-out ${inView ? 'blur-0' : 'blur-sm'}`}>
                <div
                    className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6"
                    style={{ filter: 'blur(0px)' }}
                >
                    <span className="mb-4 inline-block w-fit rounded-full border border-zinc-500 bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase">
                        Callout #4
                    </span>
                    <p className="mb-1.5 text-2xl">Community</p>
                    <p className="text-zinc-400">
                    Engaging activations, moderation, referral programs, and more to cultivate an authentic audience and guide users through the funnel.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ServiceFour