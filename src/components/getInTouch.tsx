import { FC, useState, useRef, useEffect } from 'react';


const GetInTouch: FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')

    useEffect(() => {

    }, [])

    const handleSubmit = () => {

        console.log(name, email, question)

    }

    return (

        <section id='get_in_touch' className="relative overflow-hidden text-white mb-24">
            <div className="relative z-10 overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 md:px-8">
                    <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight md:text-start mb-6">
                        Get In Touch
                    </h2>
                    <form action="" onSubmit={handleSubmit}>
                        <div className='grid grid-cols-12 gap-4'>
                            <div className='col-span-12 md:col-span-6 grid gap-4'>
                                <div
                                    className=" relative w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80"
                                >
                                    <label htmlFor="name" className="absolute px-6 pt-4 text-xs uppercase">name &amp; company</label>
                                    <input type='text' placeholder='Name | Project' className='h-full px-6 pt-12 pb-6 bg-transparent outline-none text-lg' />
                                </div>
                                <div
                                    className=" relative w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80"
                                >
                                    <label htmlFor="name" className="absolute px-6 pt-4 text-xs uppercase">Email or telegram</label>
                                    <input type='text' placeholder='@web3' className='h-full px-6 pt-12 pb-6 bg-transparent outline-none text-lg' />
                                </div>
                            </div>
                            <div
                                className="col-span-12 md:col-span-6 relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80"
                            >
                                <label className="absolute px-6 pt-4 text-xs uppercase">How can we help you?</label>
                                <textarea placeholder='Problem' className='px-6 pt-12 pb-6 bg-transparent outline-none text-lg h-full w-full' />
                            </div>
                            <button
                                type='submit'
                                className={`
                                    text-4xl uppercase h-24 col-span-12 relative w-full overflow-hidden
                                    rounded-2xl transition-colors 
                                    border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 
                                    flex items-center justify-center 
                                    hover:text-zinc-300 disabled:cursor-not-allowed`}
                                disabled
                                >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default GetInTouch;
