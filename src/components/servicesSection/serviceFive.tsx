import { FC } from "react";
import { useInView } from 'react-intersection-observer';

interface IServiceFive { }

const ServiceFive: FC<IServiceFive> = ({ }) => {

    const { ref, inView } = useInView({
        // triggerOnce: true, // Trigger the animation only once
        threshold: 0.2, // Trigger when 20% of the element is in view
    });

    return (
        <>
            <div ref={ref} className={`transition-all duration-1000 ease-in-out ${inView ? 'blur-0' : 'blur-sm'}`}>
                <div
                    className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6"
                    style={{ filter: 'blur(0px)' }}
                >
                    <span className="mb-4 inline-block w-fit rounded-full border border-zinc-500 bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase">
                        Callout #5
                    </span>
                    <p className="mb-1.5 text-2xl">Business Development</p>
                    <p className="text-zinc-400">
                    Harnessing the Athenax network to drive partnerships, support ecosystem growth, conduct market research, and implement KOL strategies.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ServiceFive