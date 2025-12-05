import { Card } from '@/components/ui/card'
import { ArrowRight, Calendar, Calendars, Pencil, ShoppingBag, Wrench } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AiDrivenDesign = () => {
    const Cards = [
        {
            "id": 1,
            "title": "AI-Driven Design Solutions",
            "icon": <Calendar size={30} />,
            "description": "Creative designs powered by AI to elevate user experiences and brand identity."
        },
        {
            "id": 2,
            "title": "AI-Enable CRM",
            "icon": <Calendars size={30} />,
            "description": "Smart CRM solutions powered by AI to boost customer engagement and efficiency."
        },
        {
            "id": 3,
            "title": "AI-Enabled E-commerce",
            "icon": <ShoppingBag size={30} />,
            "description": "Online shopping with AI-powered tools for smarter selling and efficiency."
        },
        {
            "id": 4,
            "title": "AI-Chatbot Integration",
            "icon": <Wrench size={30} />,
            "description": "Enhance interactions with AI chatbots for instant, intelligent & quick responses."
        },
        {
            "id": 5,
            "title": "AI-Enable Tools",
            "icon": <Pencil size={30} />,
            "description": "AI-powered Smart CRM to enhance interactions and streamline workflows."
        }
    ]
    return (
        <div className='py-10'>
            <div className="grid  px-5 xl:grid-cols-5 gap-4">
                {Cards.map((card) => (
                    <div key={card.id} className="">
                            <div className="bg-[#3F5C7C] z-[-1] mb-[-20] rounded-2xl h-1 py-3">
                                
                            </div>
                        <Card  className='py-0 bg-[#FAFAFA] h-full '>
                            <div className="p-4 space-y-10 h-full">
                                <h2 className='text-[#FA5131] '>{card.icon}</h2>
                                <h2 className='text-[#431616] font-bold text-xl'>{card.title}</h2>
                                <p className='text-lg font-medium text-[#1c2f42]'>{card.description}</p>
                                <div className="flex justify-between items-center">
                                    <p className='underline font-medium text-[#426c97]'>Explore Now</p>
                                    <div className="border-2 border-black rounded-full p-1 cursor-pointer">
                                        <ArrowRight size={20} className='text-[#426c97] ' />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AiDrivenDesign