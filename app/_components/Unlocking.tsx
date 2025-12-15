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
        <div className='lg:grid grid-cols-4 py-15  gap-3 '>
            <div
                className="col-span-3 p-4 h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${BannerImage.src})`
                }}
            >
                <div className="xl:w-170 h-full  px-5 xl:px-10 py-5 xl:py-12 space-y-8 flex flex-col justify-start">

                    <h2 className=" font-bold lg:w-150 md:w-100 w-50 text-[22px] md:text-[20px] xl:text-[40px]">
                        Are you struggling to increase your online visibility?
                    </h2>

                    <div className="space-y-3">
                        {text.map((t) => (
                            <p key={t} className="md:flex hidden underline decoration-dotted font-medium xl:text-xl text-gray-700">
                                {t}
                            </p>
                        ))}
                    </div>

                    <Button className="xl:text-[16px] hover:bg-[#FA513E] hover:text-white xl:px-5 w-fit font-semibold bg-white text-[#FA513E] border border-[#FA513E] xl:py-5 px-2 py-1 text-sm">
                        Free Marketing Plan
                    </Button>

                </div>
            </div>

            <div className="bg-[#431616] py-2 xl:mt-0 mt-5">
                <div className=" xl:text-center px-4 xl:px-10 py-5 space-y-4 xl:space-y-6">
                    <h2 className='text-white font-bold  lg:text-lg text-2xl xl:text-3xl'>Everything Your Business Needs to Dominate Online</h2>
                    <p className='text-white font-semibold xl:text-lg'>Transform your business with our comprehensive digital solutions</p>
                </div>
                <div className="text-white font-medium text-sm  mx-6 mt-5 xl:mt-10 xl:text-xl space-y-5">
                    <p>I need a graphic designer.</p>
                    <p>   I need a brand designer.</p>
                    <p>   I need a UX|UI designer.</p>
                </div>
                <div className="flex xl:justify-center items-center py-10">
                    <Button variant={'outline'} className='bg-transparent text-white px-10 text-[16px]'>Start Your Ad Campaing</Button>
                </div>
            </div>
        </div>
    )
}

export default Unlocking