"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import VideoPic from './../../public/Images/Divs/VideoPic.svg'
import { Minus, Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const Listening = () => {
    const Buttons = [
        {
            "heading": "Connect with Us and Let's Chat",
            "description": "Let's start the conversation! Share your goals and challenges, and we'll explore how our expertise can help you succeed."
        },
        {
            "heading": "Craft a Customized Plan Just for You",
            "description": "We believe in personalized solutions. We'll create a unique roadmap tailored to your specific needs and objectives."
        },
        {
            "heading": "Together We Bring Your Vision to Life",
            "description": "We work closely with you as partners, transforming your ideas into real-world results that exceed your expectations."
        },
        {
            "heading": "Ongoing Support and Partnership",
            "description": "Our commitment extends beyond project completion. We provide ongoing support and guidance to ensure your continued success and growth."
        }
    ]
    const [selected, setSelected] = useState<any>(Buttons[0])

    return (
        <div className='py-10 '>
            <div className="flex  bg-[#F3F3F3] px-30 py-40 justify-between">
                <div className="space-y-8 max-w-200">
                    <h2 className='font-bold text-4xl'><span className='text-[#FA5131]'>Listening, Understanding,</span> and Crafting Customized Solutions</h2>
                    <p className=' text-2xl'>Partner with us for tailored solutions crafted to meet your unique needs.
                        We listen, understand, and design strategies for your success.</p>
                    <div className="space-y-8 px-10">
                        {Buttons.map((button) => (
                            <div onClick={() => setSelected(button)} className="">

                                <div className=" ">
                                    <div className="flex gap-4 items-center hover:bg-gray-300 p-4 ">
                                        {selected === button ? (
                                            <Minus className='text-[#3482A3]' size={15} />
                                        ) : (

                                            <Plus size={15} className='text-gray-500' />
                                        )}
                                        <p className={cn(`text-gray-500 font-medium text-2xl`, selected === button ? "text-[#3482A3]" : "")}>{button.heading}</p>
                                    </div>
                                    {selected === button && (
                                        <p className='font-medium text-2xl mt-5 mx-6 text-gray-500'>{button.description}</p>
                                    )}
                                    <Separator className='my-5  ' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">
                    <Image src={VideoPic} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Listening