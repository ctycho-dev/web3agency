import { FC, useState, useRef } from "react";

interface IFaqBlock {
    question: string
    answer: string
}

const FaqBlock: FC<IFaqBlock> = ({ question, answer }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [currentHeight, setCurrentHeight] = useState<number | undefined>(0)

    const answerRef = useRef<HTMLDivElement>(null);

    const toggleFAQ = () => {

        setIsOpen(!isOpen);
        if (isOpen) {
            setCurrentHeight(answerRef?.current?.scrollHeight)
        } else {
            setCurrentHeight(0)
        }
    };

    return (
        <>

            <div
                className={`rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${isOpen ? 'bg-slate-800' : 'bg-slate-900'}`}
                onClick={toggleFAQ}
            >
                <button className="flex w-full items-center justify-between gap-4 py-4">
                    <span className={`text-left text-lg font-medium transition-colors text-slate-400`}>
                        {question}
                    </span>
                    <span
                        className={`${isOpen ? 'rotate-45' : ''} transition-all duration-300`}
                    >
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`text-2xl transition-colors ${isOpen ? 'text-white' : 'text-slate-400'}`}
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    </span>
                </button>
                <div
                    ref={answerRef}
                    className="text-slate-400 overflow-hidden transition-[max-height] duration-300 ease-out text-sm md:text-base"
                    style={{ 
                        maxHeight: isOpen ? `${answerRef?.current?.scrollHeight}px` : '0',
                        marginBottom: isOpen ? '1rem' : '0',
                    }}
                >
                    <p>{answer}</p>
                </div>
            </div>
        </>
    );
};

export default FaqBlock;
