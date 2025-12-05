"use client"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React, { useState } from 'react'

const FutureSearch = () => {
    const seoServices = [
        {
            key: "semantic_seo",
            page_title: "Semantic SEO",
            main_heading: "Go beyond keywords. Unlock a new level of organic visibility with semantic SEO.",
            description_1: "Maple54’s semantic SEO experts help your website communicate effectively with search engines. We go beyond traditional keyword targeting to build a web of interconnected information that aligns with user intent and drives meaningful organic growth.",
            sub_heading_1: "Are you struggling to rank for relevant keywords despite creating quality content?",
            description_2: "We optimize your website for topics, entities, and user intent, ensuring that search engines understand the context and meaning of your content.",
            sub_heading_2: "Is your website failing to attract the right kind of organic traffic?",
            description_3: "At Maple54, we don’t just drive traffic—we attract your ideal customers through strategic SEO that targets buyer-intent keywords, not vanity searches.",
            solution_heading: "Our Organic Traffic Solution:",
            solution_points: [
                "Semantic SEO Strategy",
                "Local SEO Domination",
                "Technical SEO Foundation",
                "Buyer-Intent Keyword Research",
                "Content That Converts"
            ],
            result: " 300% increase in qualified organic traffic within 90 days, with visitors who stay longer, engage more, and convert at 5X higher rates than generic traffic."
        },
        {
            key: "local_seo",
            page_title: "Local SEO",
            main_heading: "Dominate your neighborhood. Turn local searches into in-store visits and calls.",
            description_1: "We ensure your business appears prominently when customers search for products or services 'near me.' Our Local SEO strategy focuses on optimizing your Google Business Profile, local citations, and geo-targeted content.",
            sub_heading_1: "Is your business invisible to customers just blocks away?",
            description_2: "We build trust and visibility where it matters most, optimizing for specific regional intent to capture high-value, ready-to-buy local traffic.",
            solution_heading: "Our Local Visibility Toolkit:",
            solution_points: [
                "Google Business Profile Optimization",
                "Consistent NAP (Name, Address, Phone) Strategy",
                "Local Citation Building and Management",
                "Localized Content Campaigns"
            ]
        },
        {
            key: "off_page_seo",
            page_title: "Off-Page SEO",
            main_heading: "Build authority. Leverage the power of the web to boost your domain rating.",
            description_1: "Off-Page SEO is about earning trust signals from the internet. We execute strategic link-building campaigns and digital PR to position your website as a leading authority in your industry.",
            sub_heading_1: "Are low-quality links damaging your site's credibility?",
            description_2: "Our focus is on securing high-quality, relevant backlinks that pass true ranking power, filtering out toxic links, and diversifying your anchor text profile.",
            solution_heading: "Our Authority Building Framework:",
            solution_points: [
                "High-Quality Link Acquisition",
                "Digital PR and Outreach",
                "Competitor Backlink Gap Analysis",
                "Brand Mention Monitoring"
            ]
        },
        {
            key: "content_seo",
            page_title: "Content SEO",
            main_heading: "Content that converts. From informational posts to transaction-ready pages.",
            description_1: "We align your content strategy directly with your buyer's journey. Our Content SEO ensures every piece of content—from blog articles to landing pages—serves a specific purpose and answers user intent precisely.",
            sub_heading_1: "Is your blog generating traffic but zero leads?",
            description_2: "We don't just write for keywords; we write to solve problems, nurturing users down the funnel with targeted, engaging, and contextually rich content.",
            solution_heading: "Our Content Performance Pillars:",
            solution_points: [
                "Topic Cluster Strategy",
                "Buyer Persona Mapping",
                "Content Audits and Optimization",
                "Conversion-Focused Copywriting"
            ]
        },
        {
            key: "youtube_seo",
            page_title: "YouTube SEO",
            main_heading: "Capture video search. Optimize your content for the world's second-largest search engine.",
            description_1: "Tap into the massive audience of video search. We optimize your video titles, descriptions, tags, and thumbnails to maximize visibility both within YouTube and in Google's main search results.",
            sub_heading_1: "Are your videos getting views but not subscribers or sales?",
            description_2: "Our strategy focuses on increasing watch time and click-through rates, turning casual viewers into loyal subscribers and qualified traffic for your website.",
            solution_heading: "Our Video Visibility Strategy:",
            solution_points: [
                "Keyword-Optimized Titles and Descriptions",
                "Engaging Custom Thumbnails",
                "Playlist Optimization and Structuring",
                "Maximizing Audience Retention Metrics"
            ]
        },
        {
            key: "international_seo",
            page_title: "International SEO",
            main_heading: "Expand your borders. Seamlessly reach global audiences and new markets.",
            description_1: "Launch your business successfully in new countries and languages. We manage the complexities of hreflang tags, geo-targeting, and country-specific hosting to ensure search engines understand your global structure.",
            sub_heading_1: "Is your international site causing search engine confusion?",
            description_2: "We prevent duplicate content issues and ensure local relevance, allowing you to capture high-intent traffic from target regions without impacting your core domain.",
            solution_heading: "Our Global Expansion Blueprint:",
            solution_points: [
                "Hreflang Implementation and Audit",
                "Country/Language Specific Keyword Research",
                "Localized Content Strategy",
                "ccTLD and Subdomain Architecture Consulting"
            ]
        },
        {
            key: "technical_seo",
            page_title: "Technical SEO",
            main_heading: "A flawless foundation. Ensure search engines can crawl, index, and rank your site easily.",
            description_1: "Technical SEO is the backbone of organic success. We meticulously optimize site speed, mobile responsiveness, XML sitemaps, and site architecture to guarantee optimal performance.",
            sub_heading_1: "Is your site speed pushing potential customers away?",
            description_2: "We identify and resolve core web vitals issues, rendering problems, and crawl budget inefficiencies, transforming your site into a fast, reliable, and rank-ready platform.",
            solution_heading: "Our Site Health Guarantee:",
            solution_points: [
                "Core Web Vitals Optimization",
                "Comprehensive Site Audits",
                "Schema Markup Implementation",
                "Crawlability and Indexability Fixes"
            ]
        },
        {
            key: "on_page_seo",
            page_title: "On-Page SEO",
            main_heading: "Optimize every element. Fine-tune your pages for maximum organic performance.",
            description_1: "On-Page SEO involves optimizing the visible and underlying elements of your web pages. We refine titles, headers, meta descriptions, and content structure to perfectly match user intent.",
            sub_heading_1: "Are you missing out on high-ranking opportunities on existing pages?",
            description_2: "We move beyond basic keyword placement, structuring your content logically with H-tags and leveraging internal links to distribute authority and improve user experience.",
            solution_heading: "Our Page Performance Checklist:",
            solution_points: [
                "Title Tag and Meta Description Optimization",
                "H-Tag Structure Audits",
                "Internal Linking Strategy",
                "Image Optimization and Alt Text"
            ]
        },
        {
            key: "mobile_seo",
            page_title: "Mobile SEO",
            main_heading: "First for mobile. Secure your rankings in Google's mobile-first index.",
            description_1: "With the internet primarily accessed via mobile devices, your site's performance on smartphones is critical. We ensure perfect mobile responsiveness, speed, and tap-target accessibility.",
            sub_heading_1: "Is a poor mobile experience tanking your search visibility?",
            description_2: "We prioritize Core Web Vitals for mobile performance, fixing issues that impact user experience and ensuring your site is fully compliant with mobile-first indexing standards.",
            solution_heading: "Our Mobile Optimization Focus:",
            solution_points: [
                "Mobile Responsiveness Testing",
                "Viewport Configuration Audits",
                "Touch Target and Readability Checks",
                "Optimizing Mobile Page Speed"
            ]
        },
        {
            key: "e_commerce_seo",
            page_title: "E-commerce SEO",
            main_heading: "Drive product sales. Optimize your categories and product pages for purchase intent.",
            description_1: "E-commerce SEO focuses on getting your products discovered by buyers. We specialize in optimizing large inventories, managing faceted navigation, and implementing product schema markup.",
            sub_heading_1: "Are low-intent shoppers dominating your product page traffic?",
            description_2: "We target transactional keywords and use structured data to ensure your products stand out in search results with reviews, pricing, and availability.",
            solution_heading: "Our E-commerce Growth Strategy:",
            solution_points: [
                "Product and Category Page Optimization",
                "Rich Snippet Schema Markup",
                "Faceted Navigation Control",
                "Optimizing Product Feeds for Search"
            ]
        },
        {
            key: "location_page_seo",
            page_title: "Location Page SEO",
            main_heading: "Hyper-local precision. Optimize individual store pages for maximum local relevance.",
            description_1: "For businesses with multiple physical locations, we create and optimize unique, high-performing location pages that capture specific geographical searches and drive foot traffic.",
            sub_heading_1: "Are your specific locations failing to show up in local searches?",
            description_2: "Each location page is optimized with unique content, schema, and local citations, ensuring your business shows up for customers searching for services in that exact area.",
            solution_heading: "Our Multi-Location Optimization:",
            solution_points: [
                "Unique Content for Every Location Page",
                "Location-Specific Schema Markup",
                "Integrating Customer Reviews per Location",
                "Consistent Local NAP Data"
            ]
        },
        {
            key: "app_store_opt",
            page_title: "App Store Opt",
            main_heading: "App Store Optimization (ASO). Maximize organic downloads and app visibility.",
            description_1: "ASO is critical for reaching users on the Apple App Store and Google Play. We optimize your app's name, subtitle, keywords, and description to improve rankings and attract high-quality users.",
            sub_heading_1: "Is your app buried under competitors in the app store?",
            description_2: "We drive organic downloads by refining your listing based on user search behavior, leveraging compelling visuals, and encouraging high-quality ratings and reviews.",
            solution_heading: "Our ASO Success Formula:",
            solution_points: [
                "Keyword Targeting for App Stores",
                "Optimizing Titles and Subtitles",
                "Conversion-Focused Screenshots and Videos",
                "Review and Rating Management Strategy"
            ]
        }
    ];
    const [selected, setSelected] = useState<any>(seoServices[0])

    const managed_services_list = [
        "Topic Cluster Strategy",
        "Optimization & Knowledge Graph",
        "User-Centric Content Development",
        "Content Quality & Relevance",
        "Search Intent Analysis",
        "Content Structuring & Optimization",
        "Strategic Internal Linking",
        "Schema Markup Implementation",
        "Keyword Research & Intent Discovery",
        "Content Clarity & Readability",
        "Conversational Tone & Engagement",
        "Mobile Responsiveness"
    ]



    return (
        <div className='bg-[#F6F0E6] py-10 my-10'>
            <div className="flex justify-center xl:items-center px-5 flex-col gap-5 xl:py-20 xl:px-25 xl:space-y-4">
                <h1 className='font-bold text-2xl xl:text-4xl text-[#431616]'>The Future of Search Engine Optimization</h1>
                <h3 className='font-bold text-2xl'><span className='text-[#FA5131]'>Semantic SEO: </span>Is your website
                    speaking the language of search engines?</h3>
                <h4 className='font-bold text-lg text-center'>Search engines have evolved.</h4>
                <p className='xl:text-2xl font-semibold'>They no longer just match keywords; they understand the meaning behind your content.Semantic
                    SEO is the key to unlocking a new level of organic visibility by optimizing your website for topics, entities,
                    and user intent. We make your communication effective with search engines. We go beyond traditional keyword targeting to
                    build a web of interconnected
                    information that aligns with user intent and drives meaningful organic growth.</p>
            </div>
            <div className="mt-5 px-5 xl:px-20">
                <div>
                    <div className="xl:grid grid-cols-4 gap-10">
                        <div className="">
                            {seoServices.map((item: any) => (
                                <div onClick={() => setSelected(item)} key={item.key} className={cn("px-6 hover:cursor-pointer border-b border-dotted py-4 ",selected.key===item.key ? "bg-[#431616] ":"")}>
                                    <h2 className={cn('font-medium text-lg hover:text-[#FA5131] text-gray-700',selected.key===item.key ? "text-[#F6F0E6]": "")}>{item.page_title}</h2>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-2 mt-7 xl:block hidden space-y-4">
                            {selected && (
                                <>
                                    <p className='font-bold text-[#431616] text-lg'>{selected.page_title}</p>
                                    <h2 className='font-bold text-4xl text-[#3F5C7C]'>{selected.main_heading}</h2>
                                    <h3 className='text-[#454545] font-medium text-lg'>{selected.description_1} </h3>
                                    <div className="space-y-3 pb-5">
                                        <h2 className='text-[#FA5131] font-bold text-xl '>{selected.sub_heading_1}</h2>
                                        <h3 className='text-[#454545] text-lg font-medium'>{selected.description_2}
                                        </h3>
                                    </div>
                                    <div className="space-y-3 pb-5">
                                        <h2 className='text-[#FA5131] font-bold text-xl '>{selected.sub_heading_2}</h2>
                                        <h3 className='text-[#454545] text-lg font-medium'>{selected.description_3}
                                        </h3>
                                    </div>
                                    <div className="space-y-3 pb-5">
                                        <h2 className=' font-bold text-4xl text-[#3F5C7C] '>{selected.solution_heading}</h2>
                                      <ul className='list-disc marker:text-[#3F5C7C] ml-7 space-y-6 mt-10 '>
                                        {selected.solution_points.map((list:any)=>(
                                            <li className='text-[#454545] font-medium' key={list}>{list}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <h2 className='text-sm font-medium'><span className='font-bold'>Results:</span>{selected.result}</h2>
                                  
                                </>
                            )}
                        </div>
                        <div className="xl:block hidden">
                            <h1 className='text-[#FA5131] font-bold text-2xl '>How We handle it?</h1>
                            {managed_services_list.map((item) => (
                                <div key={item} className="px-6 border-b-2 border-dotted py-4">
                                    <h2 className='font-medium text-lg text-gray-700 hover:text-[#FA5131] cursor-pointer'>{item}</h2>
                                </div>
                            ))}
                            <div className="xl:flex hidden justify-end mt-15">
                                <Button className='bg-[#FA5131] text-white text-[16px] px-6 py-5'>Let's discuss your goals!</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FutureSearch