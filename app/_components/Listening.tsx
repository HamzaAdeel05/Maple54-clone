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
        <div className='xl:py-10 '>
            <div className="items-center md:grid md:grid-cols-2 gap-4 px-5 bg-[#F3F3F3] xl:px-30 md:py-20 py-10 xl:py-40 justify-between">
                <div className="space-y-4 xl:space-y-8 xl:max-w-200">
                    <h2 className='font-bold text-xl md:text-2xl xl:text-4xl'><span className='text-[#FA5131]'>Listening, Understanding,</span> and Crafting Customized Solutions</h2>
                    <p className=' xl:text-2xl'>Partner with us for tailored solutions crafted to meet your unique needs.
                        We listen, understand, and design strategies for your success.</p>
                    <div className="space-y-8 px-10">
                        {Buttons.map((button) => (
                            <div key={button.heading} onClick={() => setSelected(button)} className="">

                                <div className="mt-5">
                                    <div className="flex gap-4 items-center hover:bg-gray-300 p-4 ">
                                        {selected.heading === button.heading ? (
                                            <Minus className='text-[#3482A3]' size={15} />
                                        ) : (

                                            <Plus size={15} className='text-gray-500' />
                                        )}
                                        <p className={cn(`text-gray-500 font-medium xl:text-2xl`,selected.heading === button.heading ? "text-[#3482A3]" : "")}>{button.heading}</p>
                                    </div>
                                    {selected.heading === button.heading && (
                                        <p className='font-medium xl:text-2xl mt-5 mx-6 text-gray-500'>{button.description}</p>
                                    )}
                                    <Separator className='my-5  ' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:grid hidden">
                    <Image src={VideoPic} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Listening