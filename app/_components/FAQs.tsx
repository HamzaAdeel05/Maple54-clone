"use client"
import React, { useState } from 'react'
import Vector from './../../public/Images/Divs/Vector.svg'
import Image from 'next/image'
import { ArrowDown, ArrowUp } from 'lucide-react'

const FAQs = () => {
    const [selected, setSelected] = useState<any>()
  const Questions = [
    {
        id: 1,
        "question": "How long does a typical project take to complete?",
        "answer": "Project duration is highly dependent on complexity and scope. A standard marketing strategy engagement usually takes 6-8 weeks, while a full-stack e-commerce build can range from 3 to 6 months. We provide a detailed timeline after the initial discovery phase."
    },
    {
        id: 2,
        "question": "What industries does Maple54 specialize in?",
        "answer": "Maple54 primarily focuses on high-growth sectors, including FinTech, Health & Wellness (with a focus on B2C), and innovative B2B SaaS platforms. Our team has deep expertise in translating complex services into accessible digital experiences for these markets."
    },
    {
        id: 3,
        "question": "How does Maple54's pricing structure work?",
        "answer": "We offer three main pricing models: Fixed-Price for projects with clearly defined deliverables; Time & Materials for more agile or exploratory engagements; and a Monthly Retainer for ongoing support, content, and campaign management. All models are transparent and agreed upon upfront."
    },
    {
        id: 4,
        "question": "What makes Maple54 different from other digital agencies?",
        "answer": "We are distinguished by our proprietary \"Impact Audit\" methodology, which links every digital deliverable directly to a measurable business outcome. Furthermore, our focus on integrating sustainable and scalable AI solutions gives our clients a long-term competitive edge."
    },
    {
        id: 5,
        "question": "Can I see examples of your previous work?",
        "answer": "Yes, absolutely! Our comprehensive portfolio is available on our website under the \"Case Studies\" section. It includes measurable results and client testimonials across all our core service offerings."
    },
    {
        id: 6,
        "question": "What happens after the project is officially completed?",
        "answer": "Post-launch, we transition you to our support phase. This includes a 30-day bug-fix warranty, comprehensive documentation, and an optional ongoing maintenance retainer to ensure continued performance, security updates, and feature enhancements."
    },
    {
        id: 7,
        "question": "Who will be my main point of contact during the project?",
        "answer": "You will be assigned a dedicated Project Manager (PM) who serves as your single point of contact. Your PM handles all communication, coordinates the design, development, and strategy teams, and ensures the project stays on schedule and budget."
    },
    {
        id: 8,
        "question": "Do you offer SEO or content marketing services?",
        "answer": "Yes, we offer integrated Search Engine Optimization (SEO) strategies, including technical SEO audits, keyword research, and high-value content creation. These services are often included as part of a larger digital strategy engagement or as an ongoing retainer."
    }
]
    return (
        <div className='my-10'>
            <div className="lg:bg-[url('/Images/Divs/BackgroundImage.svg')] bg-cover  bg-center bg-no-repeat ">
                <div className="grid lg:grid-cols-11">
                    <div className="col-span-5"></div>
                    <div className="col-span-6 lg:px-10 py-5">
                        <div className="bg-white p-4 shadow rounded-2xl">
                            <div className="flex justify-center gap-4 bg-white p-4 shadow rounded-2xl">
                                <h1 className='lg:text-4xl text-2xl font-bold text-[#3F5C7C] '>Frequently Asked Questions</h1>
                                <Image src={Vector} alt='' />
                            </div>
                            <div className="space-y-8 mt-5 overflow-auto h-160">
                                {Questions.map((question) => (
                                    <div key={question.id} className="">
                                        <div className="px-4 py-8 shadow rounded-2xl ">
                                            <div onClick={() => setSelected(question)} className="flex  justify-between cursor-pointer items-center w-full">
                                                <h2 className='lg:text-2xl font-medium'>{question.question}</h2>
                                                <div className="border-2 border-black rounded-full p-1">
                                                    {selected?.id === question.id ? (
                                                        <ArrowUp size={15} className='text-gray-500' />

                                                    ) : (
                                                        <ArrowDown size={15} className='text-gray-500' />

                                                    )}
                                                </div>
                                            </div>
                                            {selected?.id === question.id && (

                                                <div className="mt-5">
                                                    <h2 className='lg:text-2xl text-gray-500'>{question.answer}</h2>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FAQs