import { Button } from '@/components/ui/button';
import React from 'react'

const SuccessContent = () => {
    const serviceItems = [
        { id: 1, category: 'Online Advertising & PPC', iconName: 'volume-2', description: 'Targeted ads and pay-per-click campaign management.' },
        { id: 2, category: 'Digital Marketing Services', iconName: 'trending-up', description: 'Data-driven strategies for online growth and performance.' },
        { id: 3, category: 'Social Media Marketing', iconName: 'share-2', description: 'Content creation and engagement for all social platforms.' },
        { id: 4, category: 'Website Design & Development', iconName: 'code', description: 'Building modern, responsive, and performant websites.' },
        { id: 5, category: 'Design Branding Services', iconName: 'palette', description: 'Logo creation, brand guidelines, and visual identity.' },
        { id: 6, category: 'Custom Software & App Dev', iconName: 'smartphone', description: 'Developing bespoke mobile and web applications.' },
        { id: 7, category: 'AI & Automation Solutions', iconName: 'bot', description: 'Implementing artificial intelligence and workflow automation.' },
        { id: 8, category: 'Team & Talent Outsourcing', iconName: 'users', description: 'Providing skilled professionals for your project needs.' },
        { id: 9, category: 'Booking Calendar', iconName: 'users', description: 'Providing skilled professionals for your project needs.' },
    ];
    const managed_services_list = [
        "Google Ads",
        "Bing Ads",
        "Amazon Ads",
        "YouTube Ads",
        "Facebook Ads",
        "Instagram Ads",
        "LinkedIn Ads",
        "Tik Tok Ads",
        "Pinterest Ads",
        "Snapchat Ads",
        "Local Digital Ads",
        "WhatsApp Campaigns"
    ]

    return (
        <div>
            <div className="grid grid-cols-4 gap-4">
                <div className="">
                    {serviceItems.map((item) => (
                        <div key={item.id} className="px-6 border-b border-dotted py-4 ">
                            <h2 className='font-medium text-lg text-gray-700'>{item.category}</h2>
                        </div>
                    ))}
                </div>
                <div className="col-span-2 mt-7 space-y-4">
                    <p className='font-bold text-[#431616] text-lg'>Online Advertising</p>
                    <h2 className='font-bold text-2xl text-[#3F5C7C]'>Stop Wasting Ad Spend on Ineffective Campaigns.</h2>
                    <div className="space-y-3 pb-5">
                        <h2 className='text-[#FA5131] font-bold text-xl '>Are you satisfied with your ROI?</h2>
                        <h3 className='text-gray-800 text-lg'>In today's competitive digital landscape, simply running ads isn't enough. You need targeted strategies and data-driven insights to maximize your return on investment (ROI).
                        </h3>
                    </div>
                    <div className="space-y-3 pb-5">
                        <h2 className='text-[#FA5131] font-bold text-xl '>Are your ads reaching 50,000 people but not converting a single customer?</h2>
                        <h3 className='text-gray-800 text-lg'>We use precision audience segmentation and behavioral data to find your exact customers, the ones ready to buy right now, not just browse. Every dollar targets buyers, not browsers.
                        </h3>
                    </div>
                    <div className="space-y-3 pb-5">
                        <h2 className='text-[#FA5131] font-bold text-xl '>Are you tracking the right metrics?</h2>
                        <h3 className='text-gray-800 text-lg'>Our online advertising services create and manage highly effective campaigns across various platforms, including Google Ads, social media, and programmatic advertising.
                        </h3>
                    </div>
                    <div className="space-y-3 pb-5">
                        <h2 className='text-[#FA5131] font-bold text-xl '>Are you getting thousands of clicks but zero phone calls or sales?</h2>
                        <h3 className='text-gray-800 text-lg'>High traffic, zero conversions mean your landing pages are conversion killers—visitors click, see your page, and immediately leave for competitors. We create conversion-optimized landing pages with psychology-based design, compelling copy, and clear call-to-actions that turn clicks into customers, not just expensive website visits.
                        </h3>
                    </div>
                </div>
                <div className="">
                    <h1  className='text-[#FA5131] font-bold text-2xl '>We Manage</h1>
                    {managed_services_list.map((item) => (
                        <div key={item} className="px-6 border-b-2 border-dotted py-4">
                            <h2 className='font-medium text-lg text-gray-700'>{item}</h2>
                        </div>
                    ))}
                    <div className="flex justify-end mt-15">
                        <Button className='bg-[#FA5131] text-white text-[16px] px-6 py-5'>Let's discuss your goals!</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessContent