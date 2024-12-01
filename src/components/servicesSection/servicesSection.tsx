import { FC } from "react";

interface IServicesSection { }

const ServicesSection: FC<IServicesSection> = ({ }) => {

    return (
        <>
            <div className="mx-auto max-w-7xl px-4 md:px-8 pb-20 pt-20 md:pb-24 md:pt-24">
                <section className="relative overflow-hidden">
                    <div className="relative">
                        <div className="mb-12 space-y-3">
                            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight md:text-start">
                                Show the people<br />
                                <span className="bg-gradient-to-br from-blue-400 to-blue-700 bg-clip-text text-transparent">what makes you great</span>
                            </h2>
                            <p className="text-center text-base text-zinc-400 md:text-lg mx-auto max-w-md md:mx-0 md:text-start">Here's a good way to show some high levels pros as to what your product does and for who.</p>
                        </div>
                    </div>
                    {/* <div className="absolute right-0 top-0 z-0 size-[50vw] bg-grid-blue-900/50">
                        <div
                            style={{
                                backgroundImage: 'radial-gradient(100% 100% at 100% 0%, rgba(9, 9, 11, 0), rgba(9, 9, 11, 1))',
                            }}
                            className="absolute inset-0"
                        ></div>
                    </div> */}

                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                        <div className="col-span-1 h-[600px] lg:col-span-4 lg:h-[600px]">
                            <div
                                className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6"
                                style={{ filter: 'blur(0px)' }}
                            >
                                <span className="mb-4 inline-block w-fit rounded-full border border-zinc-500 bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase">
                                    Callout #3
                                </span>
                                <p className="mb-1.5 text-2xl">Let customers talk for you</p>
                                <p className="text-zinc-400">
                                    Someone else saying that they love you is a lot more powerful than saying you love yourself.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2">
                            <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
                                <div
                                    className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6"
                                    style={{ filter: 'blur(0px)' }}
                                >
                                    <span className="mb-4 inline-block w-fit rounded-full border border-zinc-500 bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase">
                                        Callout #3
                                    </span>
                                    <p className="mb-1.5 text-2xl">Let customers talk for you</p>
                                    <p className="text-zinc-400">
                                        Someone else saying that they love you is a lot more powerful than saying you love yourself.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 h-[415px] sm:h-[375px] md:col-span-1">
                                <div
                                    className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6"
                                    style={{ filter: 'blur(0px)' }}
                                >
                                    <span className="mb-4 inline-block w-fit rounded-full border border-zinc-500 bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase">
                                        Callout #3
                                    </span>
                                    <p className="mb-1.5 text-2xl">Let customers talk for you</p>
                                    <p className="text-zinc-400">
                                        Someone else saying that they love you is a lot more powerful than saying you love yourself.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-2 h-fit sm:h-[209px]">
                                <div
                                    className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6"
                                    style={{ filter: 'blur(0px)' }}
                                >
                                    <span className="mb-4 inline-block w-fit rounded-full border border-zinc-500 bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase">
                                        Callout #3
                                    </span>
                                    <p className="mb-1.5 text-2xl">Let customers talk for you</p>
                                    <p className="text-zinc-400">
                                        Someone else saying that they love you is a lot more powerful than saying you love yourself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default ServicesSection