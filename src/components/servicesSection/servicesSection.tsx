import { FC } from "react";
import { useInView } from 'react-intersection-observer';
import ServiceOne from "./serviceOne";
import ServiceTwo from "./serviceTwo";
import ServiceThree from "./serviceThree";
import ServiceFour from "./serviceFour";
import ServiceFive from "./serviceFive";
import ServiceSix from "./serviceSix";

interface IServicesSection { }

const ServicesSection: FC<IServicesSection> = ({ }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.2, // Trigger when 20% of the element is in view
    });

    return (
        <>
            <div id="services" className="mx-auto max-w-7xl px-4 md:px-8 pb-20 pt-20 md:pb-24 md:pt-24">
                <section className="relative overflow-hidden">
                    <div className={`relative transition-all duration-1000 ease-in-out`}>
                        <div ref={ref} className={`mb-12 space-y-3 transition-all duration-[2s] delay-300 ease-in-out ${inView ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
                            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight md:text-start">
                                Show the people<br />
                                <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">what makes you great</span>
                            </h2>
                            <p className="text-center text-base text-zinc-400 md:text-lg mx-auto max-w-md md:mx-0 md:text-start">Here's a good way to show some high levels pros as to what your product does and for who.</p>
                        </div>
                    </div>
                    <div className={`grid grid-cols-1 gap-4 lg:grid-cols-12 mb-4`}>
                        <ServiceOne />
                        <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
                            <ServiceTwo />
                            <ServiceThree />
                            <ServiceFour />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ServiceFive />
                        <ServiceSix />
                    </div>

                </section>
            </div>
        </>
    )
}

export default ServicesSection