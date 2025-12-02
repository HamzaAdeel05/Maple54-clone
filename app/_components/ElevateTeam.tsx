"use client"
import { Card } from '@/components/ui/card';
import Java from "./../../public/Images/Dev/Java.svg"
import JavaScript from "./../../public/Images/Dev/JavaScript.svg"
import Next from "./../../public/Images/Dev/Next.svg"
import Node from "./../../public/Images/Dev/Node.svg"
import PhotoShop from "./../../public/Images/Dev/Photoshop.svg"
import Mongo from "./../../public/Images/Dev/Mongo.svg"
import Ai from "./../../public/Images/Dev/Ai.svg"
import Figma from "./../../public/Images/Dev/Figma.svg"
import Flutter from "./../../public/Images/Dev/Flutter.svg"
import Python from "./../../public/Images/Dev/Python.svg"
import Qa from "./../../public/Images/Dev/Qa.svg"
import Word from "./../../public/Images/Dev/Word.svg"
import Stack from "./../../public/Images/Dev/Stack.svg"
import React from "./../../public/Images/Dev/React.svg"
import Image from 'next/image';
import { useState } from 'react';
import { CloudUpload, Flame, Globe, MessageSquare, Sparkles } from 'lucide-react';

const ElevateTeam = () => {

    const links = [
        {
            id: 'java-dev',
            label: 'Hire a Java Developer',
            icon: Java,
            path: '/hire/java-developer',
            group: 'main',
            heading: 'HIRE A JAVA DEVELOPER',
            question: 'Why Choose Maple54 for Java Developers?',
            points: [
                { label: 'Rigorous Screening', icon: Sparkles },
                { label: 'Deep Java Expertise', icon: CloudUpload },
                { label: 'Proven Track Record', icon: Globe },
                { label: 'Flexible Engagement', icon: Flame },
                { label: 'Cost-Effective Solutions', icon: MessageSquare },
            ],
            cta_text: 'Is finding skilled Java developers who can deliver high-quality code on time and within budget proving to be a major headache?',
            description: "Maple54's Java development outsourcing services connect you with top-tier Java programmers who are experts in building robust, scalable, and secure applications.",
        },
        {
            id: "merged",
            merged: true,
        },
        {
            id: 'python-dev',
            label: 'Hire a Python Developer',
            icon: Python,
            path: '/hire/python-developer',
            group: 'main',
            heading: 'HIRE A PYTHON DEVELOPER',
            question: 'Why Choose Maple54 for Python Developers?',
            points: [
                { label: 'Access to Python Experts', icon: Sparkles },
                { label: 'Data Science & ML Proficiency', icon: CloudUpload },
                { label: 'Web Development Expertise', icon: Globe },
                { label: 'Rapid Project Scaling', icon: Flame },
                { label: 'Dedicated Support', icon: MessageSquare },
            ],
            cta_text: 'Need Python expertise for your data science, machine learning, or web development project, but struggling to find the right talent?',
            description: 'Maple54 provides access to experienced Python developers proficient in Django, Flask, and other leading frameworks, ensuring your project’s success.',
        },
        {
            id: 'js-dev',
            label: 'Hire a JavaScript Developer',
            icon: JavaScript,
            path: '/hire/javascript-developer',
            group: 'main',
            heading: 'HIRE A JAVASCRIPT DEVELOPER',
            question: 'Why Choose Maple54 for JavaScript Developers?',
            points: [
                { label: 'Frontend & Backend Mastery', icon: Sparkles },
                { label: 'Expertise in Modern Frameworks (e.g., React, Vue, Angular)', icon: CloudUpload },
                { label: 'Full-Stack Development Capability', icon: Globe },
                { label: 'Performance Optimization Focus', icon: Flame },
                { label: 'Dedicated Team Integration', icon: MessageSquare },
            ],
            cta_text: 'Looking for versatile JavaScript talent to build responsive, modern, and scalable web applications?',
            description: 'Maple54 offers vetted JavaScript developers proficient in the entire ecosystem, ready to power your web, mobile, and server-side projects.',
        },
        {
            id: 'flutter-dev',
            label: 'Hire a Flutter Developer',
            icon: Flutter,
            path: '/hire/flutter-developer',
            group: 'main',
            heading: 'HIRE A FLUTTER DEVELOPER',
            question: 'Why Choose Maple54 for Flutter Developers?',
            points: [
                { label: 'Cross-Platform Expertise (iOS & Android)', icon: Sparkles },
                { label: 'Single Codebase Efficiency', icon: CloudUpload },
                { label: 'Beautiful UI/UX Design Skills', icon: Globe },
                { label: 'Fast Development Cycles', icon: Flame },
                { label: 'Dart Language Proficiency', icon: MessageSquare },
            ],
            cta_text: 'Do you need a single, elegant app that runs natively on both mobile platforms, delivered quickly?',
            description: 'Connect with expert Flutter developers from Maple54 to build high-performance, visually appealing, and cost-effective mobile applications.',
        },
        {
            id: 'nodejs-dev',
            label: 'Hire a Node.js Developer',
            icon: Node,
            path: '/hire/nodejs-developer',
            group: 'main',
            heading: 'HIRE A NODE.JS DEVELOPER',
            question: 'Why Choose Maple54 for Node.js Developers?',
            points: [
                { label: 'Scalable Backend Development', icon: Sparkles },
                { label: 'Real-Time Application Expertise', icon: CloudUpload },
                { label: 'Microservices Architecture Knowledge', icon: Globe },
                { label: 'API Integration Specialists', icon: Flame },
                { label: 'Non-blocking I/O Proficiency', icon: MessageSquare },
            ],
            cta_text: 'Struggling to build a fast, scalable backend capable of handling high-traffic and real-time data flow?',
            description: 'Maple54 provides access to elite Node.js developers specializing in building lightning-fast and highly concurrent server-side applications.',
        },
        {
            id: 'reactjs-dev',
            label: 'Hire a React.js Developer',
            icon: React,
            path: '/hire/reactjs-developer',
            group: 'main',
            heading: 'HIRE A REACT.JS DEVELOPER',
            question: 'Why Choose Maple54 for React.js Developers?',
            points: [
                { label: 'Component-Based Architecture', icon: Sparkles },
                { label: 'State Management Expertise (Redux/Context)', icon: CloudUpload },
                { label: 'Optimized User Interface Development', icon: Globe },
                { label: 'Front-End Performance Tuning', icon: Flame },
                { label: 'Hook-based Development Proficiency', icon: MessageSquare },
            ],
            cta_text: 'Need to build a dynamic, high-performing front-end interface using the industry-leading component library?',
            description: 'Our React.js developers are experts in crafting sophisticated, scalable, and maintainable user interfaces for single-page applications.',
        },
        {
            id: 'nextjs-dev',
            label: 'Hire a Next.js Developer',
            icon: Next,
            path: '/hire/nextjs-developer',
            group: 'main',
            heading: 'HIRE A NEXT.JS DEVELOPER',
            question: 'Why Choose Maple54 for Next.js Developers?',
            points: [
                { label: 'Server-Side Rendering (SSR) Excellence', icon: Sparkles },
                { label: 'Static Site Generation (SSG) Mastery', icon: CloudUpload },
                { label: 'SEO Optimization Focus', icon: Globe },
                { label: 'Rapid Development with Vercel/Deployment', icon: Flame },
                { label: 'Full-Stack Capabilities with API Routes', icon: MessageSquare },
            ],
            cta_text: 'Require a modern, full-stack React framework solution for better performance and SEO?',
            description: 'Hire Next.js developers from Maple54 to build professional, production-ready applications with unmatched speed and search engine visibility.',
        },

        // Right Column (Experts)
        {
            id: 'mongodb-expert',
            label: 'Hire a MongoDB Expert',
            icon: Mongo,
            path: '/hire/mongodb-expert',
            group: 'expert',
            heading: 'HIRE A MONGODB EXPERT',
            question: 'Why Choose Maple54 for MongoDB Experts?',
            points: [
                { label: 'NoSQL Database Design', icon: Sparkles },
                { label: 'Schema Optimization & Indexing', icon: CloudUpload },
                { label: 'High-Availability/Clustering Setup', icon: Globe },
                { label: 'Performance Tuning & Query Optimization', icon: Flame },
                { label: 'Data Migration & Security', icon: MessageSquare },
            ],
            cta_text: 'Are you looking for an expert to design and optimize your flexible, scalable NoSQL database infrastructure?',
            description: 'Find top-tier MongoDB experts for robust database solutions, ensuring high performance, scalability, and data integrity for your application.',
        },
        {
            id: 'photoshop-expert',
            label: 'Hire Adobe Photoshop Expert',
            icon: PhotoShop,
            path: '/hire/photoshop-expert',
            group: 'expert',
            heading: 'HIRE ADOBE PHOTOSHOP EXPERT',
            question: 'Why Choose Maple54 for Photoshop Experts?',
            points: [
                { label: 'Advanced Photo Retouching', icon: Sparkles },
                { label: 'Digital Compositing', icon: CloudUpload },
                { label: 'Visual Asset Creation', icon: Globe },
                { label: 'Branding & Mockup Design', icon: Flame },
                { label: 'Industry Standard Quality', icon: MessageSquare },
            ],
            cta_text: 'Need flawless visual assets, high-end photo manipulation, or creative design work for your marketing or product?',
            description: 'Our Adobe Photoshop experts deliver world-class graphic design and image manipulation services for all your digital and print needs.',
        },
        {
            id: 'illustrator-expert',
            label: 'Hire Adobe Illustrator Expert',
            icon: Ai,
            path: '/hire/illustrator-expert',
            group: 'expert',
            heading: 'HIRE ADOBE ILLUSTRATOR EXPERT',
            question: 'Why Choose Maple54 for Illustrator Experts?',
            points: [
                { label: 'Vector Graphics Design', icon: Sparkles },
                { label: 'Logo & Branding Development', icon: CloudUpload },
                { label: 'Infographic & Icon Creation', icon: Globe },
                { label: 'Print and Digital Asset Ready', icon: Flame },
                { label: 'Scalable Artwork Mastery', icon: MessageSquare },
            ],
            cta_text: 'Do you require crisp, infinitely scalable vector graphics for logos, illustrations, or marketing materials?',
            description: 'Hire Adobe Illustrator specialists to create stunning, professional vector artwork and graphics for any platform or medium.',
        },
        {
            id: 'figma-expert',
            label: 'Hire a Figma Expert',
            icon: Figma,
            path: '/hire/figma-expert',
            group: 'expert',
            heading: 'HIRE A FIGMA EXPERT',
            question: 'Why Choose Maple54 for Figma Experts?',
            points: [
                { label: 'UI/UX Design and Prototyping', icon: Sparkles },
                { label: 'Design System Creation', icon: CloudUpload },
                { label: 'Interactive Wireframing', icon: Globe },
                { label: 'Seamless Developer Handoff', icon: Flame },
                { label: 'Collaborative Design Workflow', icon: MessageSquare },
            ],
            cta_text: 'Need a collaborative, modern UI/UX designer to create a cohesive and user-friendly digital product?',
            description: 'Our Figma experts excel at creating intuitive user interfaces, interactive prototypes, and scalable design systems for your product.',
        },
        {
            id: 'qa-engineer',
            label: 'Hire a QA Engineer',
            icon: Qa,
            path: '/hire/qa-engineer',
            group: 'expert',
            heading: 'HIRE A QA ENGINEER',
            question: 'Why Choose Maple54 for QA Engineers?',
            points: [
                { label: 'Manual & Automated Testing', icon: Sparkles },
                { label: 'Test Plan and Strategy Development', icon: CloudUpload },
                { label: 'Performance & Load Testing', icon: Globe },
                { label: 'Regression & Integration Testing', icon: Flame },
                { label: 'Defect Tracking and Management', icon: MessageSquare },
            ],
            cta_text: 'Is the quality and stability of your software a concern? Do you need a dedicated professional to ensure a bug-free product?',
            description: 'Hire highly skilled QA Engineers from Maple54 to ensure your application is robust, reliable, and provides a flawless user experience.',
        },
        {
            id: 'content-writer',
            label: 'Hire a Content Writer',
            icon: Word,
            path: '/hire/content-writer',
            group: 'expert',
            heading: 'HIRE A CONTENT WRITER',
            question: 'Why Choose Maple54 for Content Writers?',
            points: [
                { label: 'SEO-Optimized Content', icon: Sparkles },
                { label: 'Blog Posts & Article Writing', icon: CloudUpload },
                { label: 'Website Copy & Messaging', icon: Globe },
                { label: 'Technical & Explainer Documentation', icon: Flame },
                { label: 'Conversion-Focused Copywriting', icon: MessageSquare },
            ],
            cta_text: 'Do you need compelling, high-quality written content that engages your audience and drives organic traffic?',
            description: 'Connect with professional Content Writers who can create clear, persuasive, and SEO-friendly copy for all your digital platforms.',
        },
        {
            id: 'mern-stack-dev',
            label: 'Hire MERN Stack Developer',
            icon: Stack,
            path: '/hire/mern-stack-developer',
            group: 'expert',
            heading: 'HIRE MERN STACK DEVELOPER',
            question: 'Why Choose Maple54 for MERN Stack Developers?',
            points: [
                { label: 'Full-Stack Development (MongoDB, Express, React, Node.js)', icon: Sparkles },
                { label: 'Seamless API and Database Integration', icon: CloudUpload },
                { label: 'Rapid Prototyping and Deployment', icon: Globe },
                { label: 'Single-Page Application (SPA) Mastery', icon: Flame },
                { label: 'End-to-End Project Ownership', icon: MessageSquare },
            ],
            cta_text: 'Looking for a comprehensive full-stack solution built on modern, JavaScript-based technologies?',
            description: 'Our MERN Stack Developers are experts in building robust, high-performance, and scalable full-stack applications from database to user interface.',
        },

    ];
    const [selected, setSelected] = useState<any>(links[0])

    return (
        <div>
            <div className="bg-[#F3F3F3]">
                <div className="flex flex-col px-60 gap-5 justify-center items-center py-10">
                    <h2 className='font-bold text-4xl'>Elevate Your Team with <span className='text-[#FA5131]'> Top-Tier Talent</span></h2>
                    <p className='font-bold text-2xl text-[#431616]'>Hire Skilled Developers and Designers On-Demand</p>
                    <p className='text-2xl font-medium'>At Maple54, we offer flexible outsourcing solutions to integrate skilled developers and specialists into
                        your workflow, covering everything from Java development to UI/UX design.</p>
                </div>
                <div className="py-20 px-30 gap-6 grid grid-cols-4">
                    {links.map((link: any) => (
                        <div key={link.id} className={link.merged ? "row-span-7 col-span-2" : " "}>
                            {link.merged ? (
                                <div className="h-full">

                                    {selected && (
                                        <Card className='h-full p-6'>

                                            <div className="flex gap-4 items-center">
                                                {selected?.icon && (
                                                    <Image alt="" src={selected.icon} className='w-10 h-10' />
                                                )}
                                                <h2 className='text-[#3F5C7C] text-2xl font-bold'>{selected?.heading}</h2>
                                            </div>

                                            <h3 className='text-[#FA5131] text-xl font-extrabold'>{selected?.question}</h3>

                                            <div className="space-y-3">
                                                {selected?.points?.map((item: any, index: number) => (
                                                    <div key={index} className="flex gap-3 ">
                                                        <item.icon className="text-[#3F5C7C]" />
                                                        <p className='text-[#3F5C7C] font-semibold text-lg'>{item.label}</p>
                                                        <Image alt='' src={item.icon} />
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="bg-[#3F5C7C] font-semibold text-white px-4 py-2 rounded-2xl">
                                                <p>{selected.cta_text}</p>
                                            </div>
                                            <p className='font-bold '>{selected.description}</p>
                                        </Card>
                                    )}
                                </div>

                            ) : (

                                <Card onClick={() => setSelected(link)} className='py-3'>
                                    <div className="flex gap-3 px-3 ">
                                        <Image src={link.icon} alt="sjd" className='w-7 ' />
                                        <p className='font-medium text-lg'>{link.label}</p>
                                    </div>
                                </Card>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ElevateTeam