import { FC, useState, useEffect } from 'react';
import { Toaster, toast } from 'sonner'
import ReactLoading from 'react-loading';

import { sendEmail } from '../utils/email'


const GetInTouch: FC = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [question, setQuestion] = useState('')
    const [isDisabled, setButtonDisabled] = useState(false)

    useEffect(() => {

    }, [])

    const handleChangeName = (event: any) => {
        setName(event.target.value);
    };

    const handleChangeEmail = (event: any) => {
        setEmail(event.target.value);
    };

    const handleChangeQuestion = (event: any) => {
        setQuestion(event.target.value);
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        console.log(name, email, question)
        if (!name) {
            toast.error('Name is required')
        }
        else if (!email) {
            toast.error('Email is required')
        }
        else if (!question) {
            toast.error('question is required')
        }
        else {
            setButtonDisabled(true)
            const res = await sendEmail('Get In Touch', name, email, question)

            if (!res || res?.status !== 200) {
                toast.error('Something went wrong. Try again in a few minutes')
            } else {
                toast.success('Our team will reach out to you soon')
                setName('')
                setEmail('')
                setQuestion('')
            }
            setButtonDisabled(false)
        }

    }

    return (

        <section id='get_in_touch' className="relative overflow-hidden text-white pt-24 mb-24">
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
                                    <input type='text' placeholder='Name | Project' value={name} onChange={handleChangeName} className='h-full w-full px-6 pt-12 pb-6 bg-transparent outline-none text-lg' />
                                </div>
                                <div
                                    className=" relative w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80"
                                >
                                    <label htmlFor="name" className="absolute px-6 pt-4 text-xs uppercase">Email or telegram</label>
                                    <input type='text' placeholder='@web3' value={email} onChange={handleChangeEmail} className='h-full w-full px-6 pt-12 pb-6 bg-transparent outline-none text-lg' />
                                </div>
                            </div>
                            <div
                                className="col-span-12 md:col-span-6 relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80"
                            >
                                <label className="absolute px-6 pt-4 text-xs uppercase">How can we help you?</label>
                                <textarea onChange={handleChangeQuestion} value={question} placeholder='Problem' className='px-6 pt-12 pb-6 bg-transparent outline-none text-lg h-full w-full' />
                            </div>
                            <button
                                type='submit'
                                className={`
                                    text-4xl uppercase h-24 col-span-12 relative w-full overflow-hidden
                                    rounded-2xl transition-colors 
                                    border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 
                                    flex items-center justify-center 
                                    hover:text-zinc-300 disabled:pointer-events-none disabled:opacity-50`}
                            >
                                <span className='mr-4'>Submit</span>
                                {
                                    isDisabled ?
                                        <ReactLoading type='spinningBubbles' color='#fff' height={'30px'} width={'30px'} />
                                        : ''
                                }
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster richColors />
        </section>
    );
};

export default GetInTouch;
