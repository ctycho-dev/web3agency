import { FC, useState, useEffect } from "react";
import FaqBlock from "./faqBlock";

import { faqData, faqSectionOptions } from "../../store/faqData";
import { faqSection } from "../../types";

type FaqSectionKey = keyof typeof faqData;

interface IFAQsSection { }

const FAQsSection: FC<IFAQsSection> = ({ }) => {

    const [section, setSection] = useState<FaqSectionKey>(faqSectionOptions[0] as FaqSectionKey);


    return (
        <>
            <div id="faq" className="relative mb-24">
                {/* <section className="overflow-hidden bg-slate-900 px-4 py-12 text-slate-50"> */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                    <span className="mb-8 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text font-medium text-transparent">
                        Let's answer some questions
                    </span>
                    <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-8 text-5xl font-bold">FAQs</span>
                </div>
                <span className="absolute -top-[50px] sm:-top-[350px] left-[50%] z-0 h-[250px] sm:h-[500px] w-[350px] sm:w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-blue-400/20 via-blue-600/20 to-blue-800/20 blur-3xl"></span>
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
                    {faqSectionOptions.map((item, i) => {
                        return (
                            <button key={i}
                                className="relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 border-blue-500 text-slate-50"
                                onClick={() => setSection(item as FaqSectionKey)}>
                                <span className="relative z-10">{item}</span>
                                {
                                    section == item ?
                                        <span
                                            className="absolute inset-0 z-0 bg-gradient-to-r from-blue-400 to-blue-800"
                                            style={{ transform: "translateY(0%) translateZ(0px)" }}
                                        ></span>
                                        : ''
                                }
                            </button>
                        )
                    })}
                </div>
                <div className="mx-auto mt-12 max-w-7xl px-6 md:px-10">
                    <div className="space-y-4" style={{ opacity: 1, transform: "none" }}>
                        {faqData[section].map((item: faqSection, i) => (
                            <FaqBlock key={item.question} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FAQsSection;



// import { FC, useState, useEffect } from "react";
// import FaqBlock from "./faqBlock";

// import { faqData, faqSectionOptions } from "../../store/faqData";
// import { faqSection } from "../../types";

// type FaqSectionKey = keyof typeof faqData;

// interface IFAQsSection { }

// const FAQsSection: FC<IFAQsSection> = ({ }) => {

//     const [section, setSection] = useState<FaqSectionKey>(faqSectionOptions[0] as FaqSectionKey);


//     return (
//         <>
//             {/* <section className="overflow-hidden bg-slate-900 px-4 py-12 text-slate-50"> */}
//             <div className="relative z-10 flex flex-col items-center justify-center">
//                 <span className="mb-8 bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text font-medium text-transparent">
//                     Let's answer some questions
//                 </span>
//                 <span className="bg-gradient-to-r from-violet-500 to-indigo-500 bg-clip-text text-transparent mb-8 text-5xl font-bold">FAQs</span>
//             </div>
//             <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-violet-600/20 to-indigo-600/20 blur-3xl"></span>
//             <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
//                 {faqSectionOptions.map((item, i) => {
//                     return (
//                         <button key={i} 
//                         className="relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 border-violet-500 text-slate-50"
//                         onClick={() => setSection(item as FaqSectionKey)}>
//                             <span className="relative z-10">{item}</span>
//                             {
//                                 section == item ?
//                                     <span
//                                         className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600"
//                                         style={{ transform: "translateY(0%) translateZ(0px)" }}
//                                     ></span>
//                                     : ''
//                             }
//                         </button>
//                     )
//                 })}
//             </div>
//             <div className="mx-auto mt-12 max-w-7xl px-6 md:px-10">
//                 <div className="space-y-4" style={{ opacity: 1, transform: "none" }}>
//                     {faqData[section].map((item: faqSection, i) => (
//                         <FaqBlock key={item.question} question={item.question} answer={item.answer} />
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default FAQsSection;
