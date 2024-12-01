import { FC, useState, useEffect } from "react"
import '../assets/styles/carousel.css'
import deleteR from '../assets/delete.svg'

const TrustedBy: React.FC = () => {

    useEffect(() => {
        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            // Select all elements with the "scroller" class
            const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

            scrollers.forEach((scroller) => {
                // Add data-animated="true" attribute
                scroller.setAttribute("data-animated", "true");

                // Get the inner container
                const scrollerInner = scroller.querySelector<HTMLElement>(".scroller__inner");
                if (!scrollerInner) return;

                // Create an array of children within the `.scroller__inner`
                const scrollerContent = Array.from(scrollerInner.children);

                // Clone each child and append it to `.scroller__inner`
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <>
            <section className="relative z-10 mx-auto max-w-7xl overflow-hidden border-b border-zinc-700 py-6">
                <span className="mx-auto mb-9 block w-fit bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-md md:text-lg text-transparent">Trusted by companies of all sizes</span>
                <div className="relative overflow-hidden w-screen">
                    <div className="scroller" data-direction="left" data-speed="slow">
                        <div className="scroller__inner">
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                            <img src={deleteR} alt="Logo 1" className="h-8 w-auto" />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 top-0 w-1/3 max-w-64 bg-gradient-to-r from-zinc-950 to-zinc-950/0"></div>
                <div className="absolute bottom-0 right-0 top-0 w-1/3 max-w-64 bg-gradient-to-l from-zinc-950 to-zinc-950/0"></div>
            </section >
        </>
    )
}

export default TrustedBy