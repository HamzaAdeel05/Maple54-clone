"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Boxes, CircleDollarSign, SquareArrowOutUpRight } from 'lucide-react'
import React, { useState } from 'react'

const GoogleAds = () => {
    const [description, setDescription] = useState<boolean>(false);
    const [selected,setSelected] = useState();
    // const handleClick = (name:string) => {
    //     setDescription(true);
    //     setSelected(name)
    // }
    const Links = [
        { name: "Google Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGoogle_Color.bd6e2f0f.webp&w=32&q=75", question: "Are your ideal customers finding your competitors first on Google?", answer: "Dominate search results and capture valuable leads with laser-focused Google Ads campaigns.", target: { f: "Target with precision", s: "Maximize your budget", t: "Engage with diverse formats" } },
        { name: "Bing Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBing_Color.f24674a5.webp&w=32&q=75" },
        { name: "Amazon Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmazon_Color.b2ff95c8.webp&w=32&q=75" },
        { name: "YouTube Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYoutube_Color.d100bd8b.webp&w=32&q=75" },
        { name: "Facebook Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFacebook_Color.83468162.webp&w=32&q=75" },
        { name: "Instagram Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInstagram_Color.2eb040ff.webp&w=32&q=75" },
        { name: "LinkedIn Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkin_Color.05676491.webp&w=32&q=75" },
        { name: "Tik Tok Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTikTok_Color.206ecefe.webp&w=32&q=75" },
        { name: "Pinterest Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPinterest_Color.6be73fb8.webp&w=32&q=75" },
        { name: "Snapchat Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSnapChat_Color.3a8516d6.webp&w=32&q=75" },
        { name: "Local Digital Ads", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGoogle_Color.bd6e2f0f.webp&w=32&q=75" },
        { name: "WhatsApp Campaigns", image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWhatsapp_Color.b5ba1581.webp&w=32&q=75" }
    ]
    return (
        <div className='bg-[#C2D3E6] '>
            <div className="flex justify-end">
                <Button variant={'ghost'} className='bg-[#3F5C7C] hover:text-[#3F5C7C] text-white px-6 rounded-b-sm text-[16px]'>Google Ads starting from $750</Button>
            </div>
            <div className="py-20  flex gap-10 px-10 justify-center items-center">
                <div className="grid grid-cols-2 gap-4">
                    {Links.map((link) => (

                        <Card key={link.name}  className={cn(selected ? "bg-[#3F5C7C] text-white":"")}>
                            <div className="flex gap-4 items-center px-4">
                                <div className="w-5 h-5">
                                    <img src={link.image_link} />
                                </div>
                                <h2 className='font-semibold text-xl text-[#3F5C7C]'>{link.name}</h2>
                            </div>
                        </Card>

                    ))}
                </div>
                {description && (

                    <div className="space-y-7 ">
                        <div className="flex items-center gap-4">
                            <div className="w-6 h-6">
                                <img src='https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGoogle_Color.bd6e2f0f.webp&w=32&q=75' />
                            </div>
                            <h2 className='text-[#264464] text-4xl font-bold'>Google Ads:</h2>
                        </div>
                        <h2 className='text-[#264464] text-2xl font-bold'>Are your ideal customers finding your competitors first on Google?</h2>
                        <h3 className='font-semibold text-2xl'>Dominate search results and capture valuable leads with laser-focused Google Ads campaigns.</h3>
                        <div className="flex justify-between items-center">
                            <div className="space-y-6 py-8 ">
                                <div className="flex gap-3 items-center">
                                    <div className="bg-[#DEE7F1] rounded-full p-4 ">
                                        <SquareArrowOutUpRight className='text-[#264464]' />
                                    </div>
                                    <h2 className='text-xl text-[#264464] font-semibold'>Target with precision</h2>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="bg-[#DEE7F1] rounded-full p-4 ">
                                        <CircleDollarSign className='text-[#264464]' />
                                    </div>
                                    <h2 className='text-xl text-[#264464] font-semibold'>Maximize your budget</h2>
                                </div>
                                <div className="flex gap-3 items-center">
                                    <div className="bg-[#DEE7F1] rounded-full p-4">
                                        <Boxes className='text-[#264464]' />
                                    </div>
                                    <h2 className='text-xl text-[#264464] font-semibold'>Engage with diverse formats</h2>
                                </div>
                            </div>
                            <div className="">
                                <Button className='bg-[#FA5131]'>Get started</Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="grid grid-cols-2 px-10 gap-10">
                <div className="bg-[#3F5C7C] text-white px-4 py-6 rounded-2xl">
                    <h2 className='text-xl font-bold'>The Truth:</h2>
                    <p className='text-lg font-medium'><span className='text-[#FA5131] font-bold'>87%</span> of businesses fail at Google Ads because they're fighting the
                        wrong battles with the wrong strategy.</p>
                </div>
                <div className="bg-[#3F5C7C] text-white px-4 py-6 rounded-2xl">
                    <h2 className='text-xl font-bold'>At Maple54:</h2>
                    <p className='text-lg font-medium'>We identify the hidden, high-converting searches that your competitors miss completely. Our proprietary keyword research
                        uncovers search terms with <span className='text-[#FA5131] font-bold'>90%</span> less competition and <span className='text-[#FA5131] font-bold'>300% </span>higher conversion rates.</p>
                </div>
            </div>
        </div>
    )
}

export default GoogleAds