"use client"
import { Separator } from '@/components/ui/separator'
import { Check } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const GrowBuisness = () => {
    const Array = [
        {
            "category": "Real Estate",
            "description": "Optimize agent-customer interactions and drive deal success with an integrated customer communication platform.",
            "points": [
                "Turn every property inquiry into a lead—even after hours—with AI agents.",
                "Automate follow-ups and scheduling to nurture leads and book more showings.",
                "Drive meaningful client interactions with intelligent call routing and AI-powered insights."
            ]
        },
        {
            "category": "Healthcare",
            "description": "Improve patient engagement and streamline clinical workflows with an AI-powered communication and service hub.",
            "points": [
                "Automate appointment scheduling, rescheduling, and prescription refill requests 24/7.",
                "Ensure compliance and privacy by routing sensitive inquiries to the appropriate human agent or department.",
                "Provide instant answers to common FAQs about services, hours, and billing using conversational AI."
            ]
        },
        {
            "category": "Financial Services",
            "description": "Increase customer trust and automate complex service requests while maintaining strict regulatory compliance.",
            "points": [
                "Securely verify customer identity and handle sensitive account inquiries using AI agents.",
                "Automate common banking tasks, such as balance checks, transaction history, and card freezing.",
                "Use real-time sentiment analysis to prioritize high-value customers or escalating fraud-related calls to a human."
            ]
        },
        {
            "category": "Retail & E-commerce",
            "description": "Enhance the shopper journey, reduce cart abandonment, and scale support during peak seasons with conversational commerce.",
            "points": [
                "Provide hyper-personalized product recommendations and style advice through chat and messaging channels.",
                "Instantly resolve post-purchase inquiries like order status, returns, and exchanges without human agent intervention.",
                "Use AI to identify sales opportunities during a conversation and seamlessly hand off to a human sales associate for conversion."
            ]
        }
    ]
    const [selected, setSelected] = useState<any>(Array[0])

    return (
        <div className='px-10 py-15 bg-gray-100'>
            <div className="space-y-6 mt-10">
                <h1 className='text-4xl font-bold'>Grow Your Business with <span className='text-[#FA5131]'> AI-Powered Voice Calling </span></h1>
                <h2 className='text-2xl '>Maple Voice answers calls, takes orders, books appointments,
                    upsells,
                    and handles high-ticket
                    deals—so you
                    never have to miss a call or
                    it yourself. Streamline your business with AI.</h2>
            </div>
            <div className="max-w-6xl mx-auto py-10">
                <div className="flex justify-between">
                    {Array.map((item) => (
                        <div onClick={() => setSelected(item)} key={item.description} className="cursor-pointer">
                            <h2 className='text-gray-500 text-2xl'>{item.category}</h2>
                        </div>
                    ))}
                </div>
                <Separator className='my-5' />
                {selected && (
                    <div className="grid grid-cols-3 ">

                        <div className="space-y-4 col-span-2 gap-4 max-w-lg">
                            <h2 className='font-medium text-[18px] text-[#3F5C7C]'>{selected.description}</h2>
                            <div className="space-y-4">
                                {selected?.points?.map((p: string) => (
                                    <div className="flex gap-3 items-center ">
                                        <div className="rounded-full  bg-[#3F5C7C] p-1">
                                            <Check size={10} className='text-gray-100 ' />
                                        </div>
                                        <div className="">
                                            <p className='text-[#1e2d3d] text-sm font-medium'>{p}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <img src="https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHello.3b8c4228.jpg&w=640&q=75" className='rounded-2xl mt-10 shadow' />
                        </div>
                        <div className="">
                            <img src="https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphonedemo.d63fa280.png&w=640&q=75" alt="" className='w-full' />
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default GrowBuisness