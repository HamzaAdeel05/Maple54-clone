"use client"
import React, { useState } from "react";
import { MoveRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
    Globe,
    Palette,
    Image as ImageIcon,
    Smartphone,
    ShoppingCart,
    FileText,
    PenTool,
    Mail,
    FlaskConical,
    Lightbulb,
    Brush,
    Film,
} from "lucide-react";
import { cn } from "@/lib/utils";



export default function ServicesGrid() {

    const services = [
        {
            title: "Website Design",
            desc: "Is your website failing to make a positive first impression and driving visitors away?",
            icon: <Globe size={22} />,
            question: "Is your website failing to make a positive first impression and driving visitors away?",
            answer:
                "Captivate your audience with a stunning website that reflects your brand and delivers exceptional user experiences.",
            list: [
                { text: "User-Centered Design: We craft intuitive, engaging sites around user needs." },
                { text: "Conversion-Focused Layouts: Clear CTAs and layouts that drive visitor actions." },
                { text: "Mobile-First Approach: Responsive design ensures seamless use on all devices." },
            ],
        },

        {
            title: "UI Design Strategies",
            desc: "Is your digital product visually unappealing or lacking a cohesive brand identity?",
            icon: <Palette size={22} />,
            question: "Is your digital product visually unappealing or lacking a cohesive brand identity?",
            answer:
                "We create cohesive and visually compelling UI designs that strengthen your brand and enhance product usability.",
            list: [
                { text: "Brand Consistency: Harmonized design elements for a unified experience." },
                { text: "Modern Visual Hierarchy: Clean, structured layouts to guide user focus." },
                { text: "Adaptive Themes: UI systems that scale across all platforms and screens." },
            ],
        },

        {
            title: "Social Media Graphics",
            desc: "Are your social media posts failing to engage your audience?",
            icon: <ImageIcon size={22} />,
            question: "Are your social media posts being ignored or not getting engagement?",
            answer:
                "We design eye-catching, scroll-stopping graphics that increase engagement and elevate your brand presence.",
            list: [
                { text: "Platform-Optimized Designs: Perfect sizes for every social media platform." },
                { text: "Brand-Aligned Visuals: Unique graphics that match your brand voice." },
                { text: "High-Engagement Layouts: Designs that attract attention instantly." },
            ],
        },

        {
            title: "Mobile App Design",
            desc: "Is your app idea struggling to become an intuitive mobile experience?",
            icon: <Smartphone size={22} />,
            question: "Is your app difficult to use or failing to engage users?",
            answer:
                "We transform your app idea into a seamless, intuitive, and visually compelling mobile experience.",
            list: [
                { text: "User Flow Optimization: Clear journeys that reduce friction." },
                { text: "Gesture-Friendly Layouts: Designed specifically for mobile interactions." },
                { text: "Platform Guidelines: Follows iOS and Android design best practices." },
            ],
        },

        // ⭐ MERGED BIG CARD (Dynamic)
        {
            merged: true,
        },

        {
            title: "Logo Design / Flyers",
            desc: "Does your brand lack a memorable logo and impactful marketing materials?",
            icon: <PenTool size={22} />,
            question: "Does your brand struggle to stand out visually?",
            answer:
                "We craft memorable logos and marketing materials that express your identity with clarity and impact.",
            list: [
                { text: "Concept-Driven Logos: Designs rooted in strategy and meaning." },
                { text: "Brand-Consistent Flyers: Visually powerful promotional materials." },
                { text: "Multiple Style Options: Modern, minimal, bold, or illustrative." },
            ],
        },

        {
            title: "E-commerce Design",
            desc: "Is your online store losing customers due to confusing UX?",
            icon: <ShoppingCart size={22} />,
            question: "Is your online store failing to convert visitors into paying customers?",
            answer:
                "We build clean, conversion-optimized e-commerce interfaces that make buying effortless.",
            list: [
                { text: "Conversion UX: Layouts built to increase sales and decrease cart abandonment." },
                { text: "Product-Focused Design: Clear visuals and information hierarchy." },
                { text: "Easy Navigation: Intuitive paths for fast browsing and checkout." },
            ],
        },

        {
            title: "Email Newsletter Design",
            desc: "Are your email newsletters failing to engage subscribers?",
            icon: <Mail size={22} />,
            question: "Are your email newsletters not getting clicks or engagement?",
            answer:
                "We design clean, compelling newsletters that improve readability, engagement, and conversions.",
            list: [
                { text: "Mobile-Optimized Layouts: Perfect formatting on all devices." },
                { text: "Clear CTAs: Strategic placement for increased clicks." },
                { text: "Brand Styling: Consistent colors, typography, and structure." },
            ],
        },

        {
            title: "Landing Page Design",
            desc: "Are your landing pages failing to convert visitors?",
            icon: <FileText size={22} />,
            question: "Is your landing page not producing leads or results?",
            answer:
                "We design high-converting landing pages that maximize clarity, trust, and call-to-action impact.",
            list: [
                { text: "Frictionless Layouts: Straightforward flow to conversion." },
                { text: "A/B-Tested Structures: Proven formats that convert better." },
                { text: "Trust Elements: Testimonials, badges, and clean visuals." },
            ],
        },

        {
            title: "A/B Testing Thumbnails",
            desc: "Are your video thumbnails failing to attract clicks and views?",
            icon: <FlaskConical size={22} />,
            question: "Are your thumbnails not generating clicks or engagement?",
            answer:
                "We create and test multiple thumbnail variations to significantly improve click-through rates.",
            list: [
                { text: "Multiple Variants: Eye-catching designs for comparison testing." },
                { text: "CTR Optimization: Layouts engineered to attract attention." },
                { text: "Data-Driven Decisions: Choose thumbnails backed by results." },
            ],
        },

        {
            title: "UX Design Strategies",
            desc: "Is your digital product causing frustration or abandonment?",
            icon: <Lightbulb size={22} />,
            question: "Is your product difficult to use or overwhelming for users?",
            answer:
                "We optimize usability through strategic UX improvements that increase retention and satisfaction.",
            list: [
                { text: "User Journey Mapping: Identify friction points and solve them." },
                { text: "Interaction Design: Smooth, intuitive user actions." },
                { text: "Accessibility Standards: Inclusive design for all users." },
            ],
        },

        {
            title: "Graphic Design",
            desc: "Are your marketing materials failing to capture attention?",
            icon: <Brush size={22} />,
            question: "Do your marketing assets feel outdated or ineffective?",
            answer:
                "We design visually compelling graphics that elevate your marketing and communication impact.",
            list: [
                { text: "Print & Digital Assets: Designed for all mediums." },
                { text: "Brand-Aligned Visuals: Consistency across all materials." },
                { text: "High-Impact Layouts: Designs crafted to engage instantly." },
            ],
        },

        {
            title: "Motion Graphics",
            desc: "Are your videos lacking visual energy?",
            icon: <Film size={22} />,
            question: "Are your videos or presentations failing to visually engage your audience?",
            answer:
                "We create dynamic motion graphics that add energy, clarity, and storytelling power.",
            list: [
                { text: "Animated Elements: Smooth transitions and kinetic text." },
                { text: "Brand Motion Identity: Movements aligned with your brand feel." },
                { text: "Engaging Visual Rhythm: Keeps viewers watching longer." },
            ],
        },
    ];
    const [selected, setSelected] = useState<any>(services[0])

    return (
        <div className="max-w-360 mx-auto py-20">
            <div className="grid grid-cols-3 gap-4 ">
                {services.map((card: any) => (
                    <div key={card.desc} className={card.merged ? "row-span-3" : " "}>
                        {card.merged ? (
                            <Card className="h-full bg-[#F6F0E6] px-4 py-8">
                                {selected && (
                                    <>
                                        <h2 className="font-semibold text-xl text-[#FA6F54]">
                                            {selected.question}
                                        </h2>

                                        <h3 className="font-medium text-lg text-[#3F5C7C]">
                                            {selected.answer}
                                        </h3>

                                        <ul className="mt-4 space-y-4">
                                            {selected.list?.map((item: any, i: any) => (
                                                <li key={i} className="text-lg font-medium" >{item.text} </li>
                                            ))}

                                        </ul>
                                    </>
                                )}
                            </Card>
                        ) : (
                            <Card onClick={() => setSelected(card)} className={cn(
                                "px-5 py-8 h-full cursor-pointer",
                                selected === card ? " text-white bg-[#3F5C7C]" : "bg-white text-black"
                            )}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={cn("h-10 w-10 bg-[#3F5C7C] text-white flex justify-center items-center rounded-full", selected === card ? "bg-white text-[#3F5C7C]" : "")}>
                                        {card.icon}
                                    </div>
                                    <h2 className={cn("font-bold text-2xl text-[#431616]", selected === card ? "text-white" : "")}>{card.title}</h2>
                                </div>
                                <p className={cn("font-semibold text-gray-800", selected === card ? "text-white" : "")}>{card.desc}</p>
                                <div className="flex justify-end  ">
                                    <div className={cn("border-2 border-[#3F5C7C] rounded-full h-8 w-8 flex justify-center items-center", selected === card ? "bg-gray-200" : "")}>

                                        <MoveRight className="text-[#3F5C7C]" size={20} />
                                    </div>
                                </div>
                            </Card>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
}
