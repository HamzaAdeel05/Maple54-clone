import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    const Headings = [
        "Contact Sales", "Become a partner", "Pricing", "Book a Demo"
    ]
    const Products = [
        "Maple Connect CRM", "Maple Calender", "Maple Profile Builder"
    ]
    const CategoriesArray = [
        { id: "who_we_are", name: "WHO WE ARE" },
        { id: "online_ad", name: "ONLINE ADVERTISEMENT" },
        { id: "digital_mktg", name: "DIGITAL MARKETING" },
        { id: "design_svc", name: "DESIGN SERVICES" },
        { id: "web_dev", name: "WEB DEVELOPMENT" },
        { id: "software_dev", name: "SOFTWARE DEVELOPMENT" },
        { id: "ai_svc", name: "AI SERVICES" },
        { id: "resource_outsrc", name: "RESOURCE OUTSOURCING" }
    ];
    const LinksArray = [
        { id: "about", name: "About Maple 54" },
        { id: "commitment", name: "Maple 54 Commitment" },
        { id: "philosophy", name: "Maple 54 philosophy" },
        { id: "goals", name: "Maple 54 Goals" },
        { id: "process", name: "Maple 54 Process" },
        { id: "core_values", name: "Our Core Values" },
        { id: "our_clients", name: "Who are our Clients?" },
        { id: "testimonials", name: "Testimonials" },
        { id: "our_people", name: "Our People" },
        { id: "careers", name: "Careers" },
        { id: "guides", name: "Editorial Guides" },
        { id: "locations", name: "Locations" }
    ];
    const socialIcons = [
        { name: "GitHub", url: "data:image/png;base64,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" },
        { name: "Dribbble", url: "https://static.vecteezy.com/system/resources/previews/018/930/588/non_2x/dribble-logo-dribbble-icon-transparent-free-png.png" },
        { name: "LinkedIn", url: "https://images.seeklogo.com/logo-png/39/2/linkedin-logo-png_seeklogo-393965.png" },
        { name: "Facebook", url: "https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" },
        { name: "Twitter", url: "https://static.vecteezy.com/system/resources/previews/018/930/695/non_2x/twitter-logo-twitter-icon-transparent-free-free-png.png" },
        { name: "Instagram", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" },
        { name: "Pinterest", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm14DZ5byv_7bCm5agXpbtUByBUEf7SU8vhw&s" },
    ];

  const PoliciesArray = [
    {add:<Separator orientation='vertical' />, id: "Data security", name: "Data security" },
    {add:<Separator orientation='vertical' />, id: "Privacy Policy", name: "Privacy Policy" },
    {add:<Separator orientation='vertical' />, id: "Refund Policy", name: "Refund Policy" },
    {add:<Separator orientation='vertical' />, id: "Terms Of Services", name: "Terms Of Services" },
    { id: "Services", name: "Services" }
];
    return (
        <div>
            <div className=" bg-[#431616] text-white">
                <div className="grid grid-cols-2 px-5  lg:flex py-20 justify-evenly">
                    <div className="lg:max-w-75 space-y-10">
                        <div className="space-y-4">
                            <img src="https://www.maple54.com/_next/static/media/MapleSmallLogo.45f8fb3a.svg" alt="" />
                            <p className='font-medium lg:text-xl'>Know about Digital Marketing Trends
                                Sign up for our newsletter:</p>
                            <Input className='placeholder:text-white placeholder:font-medium placeholder:text-lg px-6 py-5' placeholder='Email Address' />
                        </div>
                        <div className="mt-5 space-y-4">
                            <h2 className='font-bold text-lg'>24/7 Support:</h2>
                            <div className="flex gap-3  items-center">
                                <Phone />
                                <p className='font-medium text-lg'>  +1 (480) 650-9911</p>
                            </div>
                            <div className="flex gap-3  items-center">
                                <Mail />
                                <p className='font-medium text-lg'>info@maple54.com</p>
                            </div>
                        </div>
                        <div className="space-y-3">

                            <p className='font-medium'>Follow us on:</p>
                            <div className="flex gap-3">
                                {socialIcons.map((logos) => (
                                    <div key={logos.name} className="w-10  rounded-full">
                                        <img className='w-full h-full rounded-full  bg-gray-300' src={logos.url} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="space-y-2">
                            {Headings.map((heading) => (
                                <div key={heading} className="border border-white rounded-xl px-5 py-2 flex ">
                                    <p className='font-bold text-lg'>{heading}</p>
                                </div>
                            ))}
                        </div>
                        <h2 className='text-lg font-bold my-5'>Products</h2>
                        <div className="">
                            {Products.map((p) => (
                                <p className='text-lg font-medium' key={p}>{p}</p>
                            ))}
                        </div>
                    </div>
                    <div className="lg:grid hidden lg:w-200  ">
                        <div className="grid grid-cols-2 rounded-2xl ">
                            <div className="">
                                {CategoriesArray.map((c) => (
                                    <div key={c.id} className="border border-white px-10 py-4">
                                        <p className='font-semibold '>{c.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="">
                                {LinksArray.map((l) => (
                                    <div key={l.id} className="border border-white p-2 ">
                                        <p className='text-sm font-medium '>{l.name}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
                <h2 className='text-center text-[10rem] font-bold border'>Build with Maple 54</h2>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex border w-full justify-center gap-6 p-4">
                        {PoliciesArray.map((p)=>(
                            <div key={p.id} className="flex gap-4">

                            <h2 className='font-medium'>{p.name}</h2>
                            <p>{p.add}</p>
                        </div>
                        ))}
                    </div>
                    <h2 className='font-medium text-lg my-5'>Copyright © 2025 Maple 54, LLC. All rights reserved.</h2>
                    <img className='lg:w-200' src="https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvenorsImg.68515df8.jpg&w=1920&q=75" />
                </div>
            </div>
        </div>
    )
}

export default Footer