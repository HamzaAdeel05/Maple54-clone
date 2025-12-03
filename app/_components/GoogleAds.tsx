"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Boxes, CircleDollarSign, SquareArrowOutUpRight } from 'lucide-react'
import React, { useState } from 'react'

const GoogleAds = () => {


    const Links = [
        {
            name: "Google Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGoogle_Color.bd6e2f0f.webp&w=32&q=75",
            question: "Are your ideal customers finding your competitors first on Google?",
            answer: "Dominate search results and capture valuable leads with laser-focused Google Ads campaigns.",
            f: "Target with precision",
            s: "Maximize your budget",
            t: "Engage with diverse formats",
            truth: "87% of businesses fail at Google Ads because they're fighting the wrong battles with the wrong strategy.",
            maple: "We identify hidden, high-converting searches your competitors miss. Our keyword research uncovers searches with 90% less competition and 300% higher conversions."
        },

        {
            name: "Bing Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBing_Color.f24674a5.webp&w=32&q=75",
            question: "Are you missing out on high-value customers who don't even use Google?",
            answer: "Bing Ads gives you a premium audience with lower competition and cheaper CPCs.",
            f: "Reach audiences Google misses",
            s: "Lower CPC with higher intent",
            t: "Tap into Microsoft’s entire ecosystem",
            truth: "Most brands underestimate Bing, yet its users convert up to 30% higher than Google users.",
            maple: "We help you dominate underserved search markets with extremely low competition and high-quality traffic."
        },

        {
            name: "Amazon Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAmazon_Color.b2ff95c8.webp&w=32&q=75",
            question: "Are your products showing up first when customers search on Amazon?",
            answer: "Win the buy-box and outrank competitors with optimized Amazon PPC campaigns.",
            f: "Increase product visibility",
            s: "Boost conversions with smart targeting",
            t: "Dominate competitive categories",
            truth: "70% of Amazon shoppers never scroll past the first page.",
            maple: "We engineer campaigns that push your listings to the top using keyword clustering and bid automation."
        },

        {
            name: "YouTube Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYoutube_Color.d100bd8b.webp&w=32&q=75",
            question: "Are you using video to influence buyers before they even search?",
            answer: "YouTube Ads capture attention and drive action with powerful video storytelling.",
            f: "Engage viewers instantly",
            s: "Target behavior and interests",
            t: "Drive direct conversions",
            truth: "95% of YouTube ads are forgotten if the hook isn’t optimized.",
            maple: "We create scroll-stopping video ad strategies backed by retention and watch-time analysis."
        },

        {
            name: "Facebook Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFacebook_Color.83468162.webp&w=32&q=75",
            question: "Are your Facebook ads failing to convert despite high traffic?",
            answer: "We deliver high-converting Facebook ad frameworks built for targeting and scaling.",
            f: "Tap into unmatched audience data",
            s: "Scale ads predictably",
            t: "Optimize with data-driven creatives",
            truth: "Over 83% of failed campaigns come from creative fatigue, not targeting issues.",
            maple: "We constantly refresh creatives and use audience layering to ensure consistent ROAS."
        },

        {
            name: "Instagram Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInstagram_Color.2eb040ff.webp&w=32&q=75",
            question: "Is your brand invisible to customers who live on Instagram?",
            answer: "Instagram Ads build strong brand visibility and drive instant engagement.",
            f: "Leverage visual storytelling",
            s: "Reach younger audiences",
            t: "Drive engagement with reels & stories",
            truth: "Brands lose 60% engagement when they don’t use short-form video ads.",
            maple: "We create thumb-stopping ads optimized for reels, stories, and viral momentum."
        },

        {
            name: "LinkedIn Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLinkin_Color.05676491.webp&w=32&q=75",
            question: "Are you reaching decision-makers with real purchasing power?",
            answer: "LinkedIn Ads help you connect with CEOs, managers, and B2B buyers.",
            f: "Target job titles & industries",
            s: "Generate qualified leads",
            t: "Influence high-value buyers",
            truth: "LinkedIn audiences convert 3x higher but most brands target too broadly.",
            maple: "We build hyper-targeted B2B funnels that reach exact decision-makers—not random users."
        },

        {
            name: "Tik Tok Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTikTok_Color.206ecefe.webp&w=32&q=75",
            question: "Is your brand leveraging the fastest-growing ad platform in the world?",
            answer: "TikTok Ads explode brand visibility with viral-like creative formats.",
            f: "Boost engagement rapidly",
            s: "Leverage authentic short videos",
            t: "Scale quickly with low CPMs",
            truth: "Most TikTok ads fail because they look like ads instead of native content.",
            maple: "We design native-style creatives that blend seamlessly into the feed and drive conversions."
        },

        {
            name: "Pinterest Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPinterest_Color.6be73fb8.webp&w=32&q=75",
            question: "Do customers find your brand when searching for inspiration?",
            answer: "Pinterest Ads drive discovery and long-term sales for visual brands.",
            f: "Reach active shoppers",
            s: "Promote visual products",
            t: "Drive traffic with evergreen pins",
            truth: "Pinterest users have 2x higher buying intent than Facebook users.",
            maple: "We build evergreen content funnels that bring consistent traffic and sales for months."
        },

        {
            name: "Snapchat Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSnapChat_Color.3a8516d6.webp&w=32&q=75",
            question: "Are you targeting younger audiences who prefer quick visual content?",
            answer: "Snapchat Ads help brands reach Gen Z with instant engagement formats.",
            f: "Reach a younger demographic",
            s: "Use interactive AR lenses",
            t: "Drive quick conversions",
            truth: "Brands ignoring Snapchat miss one of the most loyal daily-active audiences.",
            maple: "We create high-impact AR and swipe-up ad campaigns optimized for Gen Z behavior."
        },

        {
            name: "Local Dig Ads",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGoogle_Color.bd6e2f0f.webp&w=32&q=75",
            question: "Are local customers finding your business when they need you?",
            answer: "Local ads help you capture nearby customers with high intent.",
            f: "Reach customers near you",
            s: "Boost foot traffic",
            t: "Dominate local search & maps",
            truth: "46% of all Google searches are local—but most businesses aren’t optimized for it.",
            maple: "We optimize your local presence and run targeted ads that drive real walk-ins and calls."
        },

        {
            name: "WhatsApp ",
            image_link: "https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWhatsapp_Color.b5ba1581.webp&w=32&q=75",
            question: "Are you directly messaging customers where they respond fastest?",
            answer: "WhatsApp campaigns deliver unmatched open rates and instant engagement.",
            f: "98% open rates",
            s: "Instant customer interaction",
            t: "Automate follow-ups easily",
            truth: "Email open rates are dropping—WhatsApp messages outperform by 10x.",
            maple: "We create personalized WhatsApp flows that convert cold leads into customers instantly."
        }
    ];
    const [selected, setSelected] = useState<any>(Links[0]);

    return (
        <div className='bg-[#C2D3E6] '>
            <div className="lg:flex hidden justify-end">
                <Button variant={'ghost'} className='bg-[#3F5C7C] hover:text-[#3F5C7C] text-white px-6 rounded-b-sm text-[16px]'>Google Ads starting from $750</Button>
            </div>
            <div className="lg:py-20 py-10  lg:flex gap-10 px-3 lg:px-10 justify-center items-center">
                <div className="grid grid-cols-2 gap-4">
                    {Links.map((link: any) => (

                        <Card key={link.name} onClick={() => setSelected(link)} className={cn("py-2 ", selected.name === link.name ? "bg-[#3F5C7C] text-white" : "")}>
                            <div className="flex gap-4 items-center px-4">
                                <div className="w-5 h-5">
                                    <img src={link.image_link} />
                                </div>
                                <h2 className={cn('font-semibold  lg:text-xl text-[#3F5C7C]', selected.name === link.name ? "text-white" : "")}>{link.name}</h2>
                            </div>
                        </Card>

                    ))}
                </div>
                {selected && (
                    <div className="lg:min-w-4xl lg:mt-0 mt-8">
                        <div className="space-y-7 ">
                            <div className="flex items-center gap-4">
                                <div className="w-6 h-6">
                                    <img src={selected.image_link} />
                                </div>
                                <h2 className='text-[#264464] text-xl lg:text-4xl font-extrabold'>{selected.name}</h2>
                            </div>
                            <h2 className='text-[#264464] lg:text-2xl font-bold'>{selected.question}</h2>
                            <h3 className='font-semibold lg:text-2xl'>{selected.answer}</h3>
                            <div className="lg:flex hidden justify-between items-center">
                                <div className=" space-y-6 py-8 ">
                                    <div className="flex gap-3 items-center">
                                        <div className="bg-[#DEE7F1] rounded-full p-4 ">
                                            <SquareArrowOutUpRight className='text-[#264464]' />
                                        </div>
                                        <h2 className='text-xl text-[#264464] font-semibold'>{selected.f}</h2>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <div className="bg-[#DEE7F1] rounded-full p-4 ">
                                            <CircleDollarSign className='text-[#264464]' />
                                        </div>
                                        <h2 className='text-xl text-[#264464] font-semibold'>{selected.s}</h2>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <div className="bg-[#DEE7F1] rounded-full p-4">
                                            <Boxes className='text-[#264464]' />
                                        </div>
                                        <h2 className='text-xl text-[#264464] font-semibold'>{selected.t}</h2>
                                    </div>
                                </div>
                                <div className="">
                                    <Button className='bg-[#FA5131] lg:flex hidden'>Get started</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {selected && (

                <div className="hidden lg:grid grid-cols-2 px-10 gap-10 pb-10 ">
                    <div className="bg-[#3F5C7C] text-white px-4 py-6 rounded-2xl ">
                        <h2 className='text-xl font-bold mb-3'>The Truth:</h2>
                        <p className='text-lg font-medium'>{selected.truth}</p>
                    </div>
                    <div className="bg-[#3F5C7C] text-white px-4 py-6 rounded-2xl">
                        <h2 className='text-xl font-bold mb-3'>At Maple54:</h2>
                        <p className='text-lg font-medium'>{selected.maple}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default GoogleAds