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

const ElevateTeam = () => {
    const [selected, setSelected] = useState()

    const links = [
        {
            id: 'java-dev',
            label: 'Hire a Java Developer',
            icon: Java,
            path: '/hire/java-developer',
            group: 'main',
        },
        {
            merged: true,
        },
        {
            id: 'python-dev',
            label: 'Hire a Python Developer',
            icon: Python,
            path: '/hire/python-developer',
            group: 'main',
        },
        {
            id: 'js-dev',
            label: 'Hire a JavaScript Developer',
            icon: JavaScript,
            path: '/hire/javascript-developer',
            group: 'main',
        },
        {
            id: 'flutter-dev',
            label: 'Hire a Flutter Developer',
            icon: Flutter,
            path: '/hire/flutter-developer',
            group: 'main',
        },
        {
            id: 'nodejs-dev',
            label: 'Hire a Node.js Developer',
            icon: Node,
            path: '/hire/nodejs-developer',
            group: 'main',
        },
        {
            id: 'reactjs-dev',
            label: 'Hire a React.js Developer',
            icon: React,
            path: '/hire/reactjs-developer',
            group: 'main',
        },
        {
            id: 'nextjs-dev',
            label: 'Hire a Next.js Developer',
            icon: Next,
            path: '/hire/nextjs-developer',
            group: 'main',
        },

        // Right Column (Experts)
        {
            id: 'mongodb-expert',
            label: 'Hire a MongoDB Expert',
            icon: Mongo,
            path: '/hire/mongodb-expert',
            group: 'expert',
        },
        {
            id: 'photoshop-expert',
            label: 'Hire Adobe Photoshop Expert',
            icon: PhotoShop,
            path: '/hire/photoshop-expert',
            group: 'expert',
        },
        {
            id: 'illustrator-expert',
            label: 'Hire Adobe Illustrator Expert',
            icon: Ai,
            path: '/hire/illustrator-expert',
            group: 'expert',
        },
        {
            id: 'figma-expert',
            label: 'Hire a Figma Expert',
            icon: Figma,
            path: '/hire/figma-expert',
            group: 'expert',
        },
        {
            id: 'qa-engineer',
            label: 'Hire a QA Engineer',
            icon: Qa,
            path: '/hire/qa-engineer',
            group: 'expert',
        },
        {
            id: 'content-writer',
            label: 'Hire a Content Writer',
            icon: Word,
            path: '/hire/content-writer',
            group: 'expert',
        },
        {
            id: 'mern-stack-dev',
            label: 'Hire MERN Stack Developer',
            icon: Stack,
            path: '/hire/mern-stack-developer',
            group: 'expert',
        },
    ];

    return (
        <div>
            <div className="bg-[#F3F3F3]">
                <div className="flex flex-col px-60 gap-5 justify-center items-center py-10">
                    <h2 className='font-bold text-4xl'>Elevate Your Team with <span className='text-[#FA5131]'> Top-Tier Talent</span></h2>
                    <p className='font-bold text-2xl text-[#431616]'>Hire Skilled Developers and Designers On-Demand</p>
                    <p className='text-2xl font-medium'>At Maple54, we offer flexible outsourcing solutions to integrate skilled developers and specialists into
                        your workflow, covering everything from Java development to UI/UX design.</p>
                </div>
                <div className="p-20 gap-6 grid grid-cols-3">
                    {links.map((link: any) => (
                        <div key={link.icon} onClick={() => setSelected(link)} className={link.merged ? "row-span-7" : " "}>
                            {link.merged ? (
                                <div className="row-span-3 h-full">

                                    <Card className='h-full'>
                                        hello
                                    </Card>
                                </div>
                            ) : (

                                <Card>
                                    <div className="flex">
                                        <Image src={link.icon} alt="sjd" className='w-20 h-10' />
                                        <p className='font-medium text-xl'>{link.label}</p>
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