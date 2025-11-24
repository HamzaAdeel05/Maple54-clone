import React from 'react'
import BannerImage from "../../public/Images/Home/BannerImage.svg"
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Unlocking = () => {
    const text = [
        "I need an experienced PPC company to generate leads.",
        "I need a skilled SEO team to boost my website's ranking.",
        "I require expert social marketing services.",
        "I'm looking for website development services.",
        "I need a comprehensive digital marketing strategy.",
        "I need a full-service solution for online success."
    ]
    return (
        <div className='grid grid-cols-4 py-15 gap-3'>
            <div className="col-span-3 relative">
                <Image
                    className='w-7xl'
                    src={BannerImage}
                    alt='hello'
                />
                <div className="absolute top-10 left-10 space-y-12">
                    <div className="grid grid-cols-2 ">
                        <div className="space-y-3 pt-5">
                            <h2 className='font-bold text-[43px]'>Are you struggling to increase your online visibility?</h2>
                            {text.map((t) => (
                                <p className='underline decoration-dotted font-medium text-xl text-gray-700 '>{t}</p>
                            ))}
                        </div>
                    </div>
                    <Button className='text-[16px] hover:bg-[#FA513E] hover:text-white px-8 font-semibold bg-white text-[#FA513E] border border-[#FA513E] py-5'>Free Marketing Plan</Button>
                </div>
            </div>
            <div className="bg-[#431616] p-4">
                <div className=" text-center px-10 py-5 space-y-6">
                    <h2 className='text-white font-bold text-4xl'>Everything Your Business Needs to Dominate Online</h2>
                    <p className='text-white font-semibold text-lg'>Transform your business with our comprehensive digital solutions</p>
                </div>
                <div className="text-white  mx-6 mt-10 text-xl space-y-5">
                    <p>I need a graphic designer.</p>
                     <p>   I need a brand designer.</p>
                     <p>   I need a UX|UI designer.</p>
                </div>
                <div className="flex justify-center items-center py-10">
                <Button variant={'outline'} className='bg-transparent text-white px-10 text-[16px]'>Start Your Ad Campaing</Button>
                </div>
            </div>
        </div>
    )
}

export default Unlocking