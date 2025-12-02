"use client"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState } from 'react'

const SuccessContent = () => {

const serviceItems = [
    // 1. Online Advertising & PPC (Already complete from your prompt)
    {
        id: 1,
        category: 'Online Advertising & PPC',
        iconName: 'volume-2',
        description: 'Targeted ads and pay-per-click campaign management.',
        q_1: "Are you satisfied with your ROI?",
        a_1: "In today's competitive digital landscape, simply running ads isn't enough. You need targeted strategies and data-driven insights to maximize your return on investment (ROI).",
        q_2: "Are your ads reaching 50,000 people but not converting a single customer?",
        a_2: "We use precision audience segmentation and behavioral data to find your exact customers, the ones ready to buy right now, not just browse. Every dollar targets buyers, not browsers.",
        q_3: "Are you tracking the right metrics?",
        a_3: "Our online advertising services create and manage highly effective campaigns across various platforms, including Google Ads, social media, and programmatic advertising.",
        q_4: "Are you getting thousands of clicks but zero phone calls or sales?",
        a_4: "High traffic, zero conversions mean your landing pages are conversion killers—visitors click, see your page, and immediately leave for competitors. We create conversion-optimized landing pages with psychology-based design, compelling copy, and clear call-to-actions that turn clicks into customers, not just expensive website visits."
    },

    // 2. Digital Marketing Services
    {
        id: 2,
        category: 'Digital Marketing Services',
        iconName: 'trending-up',
        description: 'Data-driven strategies for online growth and performance.',
        q_1: "Is your organic search traffic falling flat?",
        a_1: "We utilize advanced **SEO techniques** (on-page, off-page, technical) and content strategies to boost your ranking and drive high-quality organic traffic.",
        q_2: "How do you measure success across channels?",
        a_2: "We implement robust **analytics tracking** to provide clear, actionable insights on conversion rates, customer lifetime value, and channel performance.",
        q_3: "Do you have a consistent content strategy?",
        a_3: "We develop a comprehensive content calendar that engages your audience, establishes thought leadership, and supports your entire marketing funnel.",
        q_4: "Are your email campaigns generating revenue?",
        a_4: "We design and execute personalized **email marketing** and automation sequences to nurture leads and re-engage customers efficiently."
    },

    // 3. Social Media Marketing
    {
        id: 3,
        category: 'Social Media Marketing',
        iconName: 'share-2',
        description: 'Content creation and engagement for all social platforms.',
        q_1: "Are you struggling to maintain a consistent social media presence?",
        a_1: "We handle **full-service content planning, creation, and scheduling** across platforms like Instagram, Facebook, LinkedIn, and TikTok.",
        q_2: "Is your social engagement low?",
        a_2: "We focus on creating highly shareable and relevant content that encourages genuine interaction, building a loyal community around your brand.",
        q_3: "How can social media drive sales?",
        a_3: "We integrate direct sales features like shoppable posts and manage targeted social advertising campaigns to convert followers into customers.",
        q_4: "Do you need help with brand voice and tone?",
        a_4: "Our strategists define and maintain a cohesive, authentic brand voice to ensure consistency across all your social media channels."
    },

    // 4. Website Design & Development
    {
        id: 4,
        category: 'Website Design & Development',
        iconName: 'code',
        description: 'Building modern, responsive, and performant websites.',
        q_1: "Is your current website slow and outdated?",
        a_1: "We build modern, **responsive websites** using the latest performance standards, ensuring fast loading times and perfect display on all devices.",
        q_2: "Are you using the right technology stack?",
        a_2: "We advise on and implement scalable architectures, including headless CMS, custom integrations, and robust front-end frameworks (like React or Vue).",
        q_3: "Is the user experience (UX) frustrating visitors?",
        a_3: "Our focus is on **intuitive UX design** and clear information architecture, guiding users effortlessly toward conversion goals.",
        q_4: "What happens after the launch?",
        a_4: "We provide ongoing maintenance, security updates, and performance monitoring to ensure your website remains fast, secure, and reliable."
    },

    // 5. Design Branding Services
    {
        id: 5,
        category: 'Design Branding Services',
        iconName: 'palette',
        description: 'Logo creation, brand guidelines, and visual identity.',
        q_1: "Do you have a consistent and memorable visual identity?",
        a_1: "We craft a complete visual identity, including a unique **logo, color palette, and typography** that reflects your company's core values.",
        q_2: "How do you ensure brand consistency across all touchpoints?",
        a_2: "We create detailed **Brand Style Guides** that outline usage rules for all design assets, ensuring uniformity in print, web, and social media.",
        q_3: "Is your brand message clear?",
        a_3: "We help define your brand's personality, mission, and voice, ensuring your visual design aligns perfectly with your strategic messaging.",
        q_4: "Are your marketing materials professional?",
        a_4: "We design high-impact marketing collateral, including brochures, presentations, and infographics, to elevate your professional image."
    },

    // 6. Custom Software & App Dev
    {
        id: 6,
        category: 'Custom Software & App Dev',
        iconName: 'smartphone',
        description: 'Developing bespoke mobile and web applications.',
        q_1: "Do off-the-shelf solutions meet your complex business needs?",
        a_1: "We develop **bespoke software** and applications tailored exactly to your unique workflows, eliminating inefficient manual processes.",
        q_2: "Are you looking for a new mobile app?",
        a_2: "We provide end-to-end services for **native (iOS/Android) and cross-platform mobile app development**, from prototyping to final deployment.",
        q_3: "How do you ensure the software is reliable and secure?",
        a_3: "We follow Agile methodologies with rigorous testing and prioritize enterprise-level security protocols throughout the development lifecycle.",
        q_4: "Need to integrate with existing systems?",
        a_4: "We specialize in complex **API integrations** to ensure your new custom software communicates seamlessly with all your current business tools."
    },

    // 7. AI & Automation Solutions
    {
        id: 7,
        category: 'AI & Automation Solutions',
        iconName: 'bot',
        description: 'Implementing artificial intelligence and workflow automation.',
        q_1: "Where can AI improve your business efficiency?",
        a_1: "We identify high-value processes for **automation**, implementing AI and machine learning models for tasks like data analysis, prediction, and personalization.",
        q_2: "Can AI help analyze customer data?",
        a_2: "We build custom solutions for **predictive analytics** and natural language processing (NLP) to extract deep, actionable insights from your big data.",
        q_3: "Do you need to automate repetitive tasks?",
        a_3: "We deploy **Robotic Process Automation (RPA)** to handle high-volume, repetitive, rule-based tasks, freeing up your team for strategic work.",
        q_4: "How do we get started with AI adoption?",
        a_4: "We offer consulting to assess your readiness, develop a clear AI roadmap, and implement solutions incrementally for maximum ROI."
    },

    // 8. Team & Talent Outsourcing
    {
        id: 8,
        category: 'Team & Talent Outsourcing',
        iconName: 'users',
        description: 'Providing skilled professionals for your project needs.',
        q_1: "Are you struggling to find specialized tech talent quickly?",
        a_1: "We provide immediate access to a vetted pool of **skilled developers, designers, and marketers** to fill critical roles in your project or team.",
        q_2: "Do you need flexible staffing solutions?",
        a_2: "We offer flexible models, from dedicated remote teams to individual specialists for short-term projects, scaling resources up or down as needed.",
        q_3: "How do you maintain quality control with remote teams?",
        a_3: "Our process includes project managers who ensure clear communication, accountability, and seamless integration with your existing workflow.",
        q_4: "Is outsourcing cost-effective?",
        a_4: "Yes, by leveraging global talent, we significantly reduce operational costs while maintaining high quality and professional standards."
    },

    // 9. Booking Calendar
    {
        id: 9,
        category: 'Booking Calendar',
        iconName: 'users',
        description: 'Providing skilled professionals for your project needs.',
        q_1: "Are you losing business due to complex scheduling?",
        a_1: "We integrate and customize a **seamless online booking system** that allows clients to schedule appointments directly on your website 24/7.",
        q_2: "Do you need to automate appointment reminders?",
        a_2: "Our solutions include automated email and SMS reminders to reduce no-shows and keep both staff and clients informed.",
        q_3: "Does your booking system integrate with your CRM?",
        a_3: "We ensure the booking calendar integrates perfectly with your existing **CRM, calendar, and payment gateways** for a unified data flow.",
        q_4: "Do you need different booking rules for different services?",
        a_4: "We configure custom availability rules, service durations, and pricing structures tailored to your specific business offerings."
    },
];
    const [selected, setSelected] = useState<any>(serviceItems[0])
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
        <div className='bg-[#F6F0E6]  '>

            <div className="">
                <div>
                    <div className="grid grid-cols-4 gap-10">
                        <div className="">
                            {serviceItems.map((item: any) => (
                                <div  onClick={() => setSelected(item)} key={item.category} className={cn("px-6 hover:cursor-pointer border-b border-dotted py-4 ", selected === item ? "bg-[#431616] " : "")}>
                                    <h2 className={cn('font-medium text-lg hover:text-[#FA5131] text-gray-700', selected === item ? "text-[#F6F0E6]" : "")}>{item.category}</h2>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-2 mt-7 space-y-4">
                            {selected && (
                                <>
                                    <p className='font-bold text-[#431616] text-lg'>{selected.category}</p>
                                    <h2 className='font-bold text-2xl text-[#3F5C7C]'>{selected.description}</h2>
                                    <div className="space-y-3 pb-5">
                                        <h2 className='text-[#FA5131] font-bold text-xl '>{selected.q_1}</h2>
                                        <h3 className='text-[#454545] text-lg font-medium'>{selected.a_1}
                                        </h3>
                                    </div>
                                    <div className="space-y-3 pb-5">
                                        <h2 className='text-[#FA5131] font-bold text-xl '>{selected.q_2}</h2>
                                        <h3 className='text-[#454545] text-lg font-medium'>{selected.a_2}
                                        </h3>
                                    </div>
                                    <div className="space-y-3 pb-5">
                                        <h2 className='text-[#FA5131] font-bold text-xl '>{selected.q_3}</h2>
                                        <h3 className='text-[#454545] text-lg font-medium'>{selected.a_3}
                                        </h3>
                                    </div>
                                    <div className="space-y-3 pb-5">
                                        <h2 className='text-[#FA5131] font-bold text-xl '>{selected.q_4}</h2>
                                        <h3 className='text-[#454545] text-lg font-medium'>{selected.a_4}
                                        </h3>
                                    </div>


                                </>
                            )}
                        </div>
                        <div className="">
                            <h1 className='text-[#FA5131] font-bold text-2xl '>We Manage</h1>
                            {managed_services_list.map((item) => (
                                <div key={item} className="px-6 border-b-2 border-dotted py-4">
                                    <h2 className='font-medium text-lg text-gray-700 hover:text-[#FA5131] cursor-pointer'>{item}</h2>
                                </div>
                            ))}
                            <div className="flex justify-end mt-15">
                                <Button className='bg-[#FA5131] text-white text-[16px] px-6 py-5'>Let's discuss your goals!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessContent