import React from 'react'
import Github from "./../../public/Images/LastLogos/Github.svg"
import Button from "./../../public/Images/LastLogos/Button.svg"
import Amazon from "./../../public/Images/LastLogos/Amazon.svg"
import Flutter from "./../../public/Images/LastLogos/Flutter.svg"
import Google from "./../../public/Images/LastLogos/Google.svg"
import Meta from "./../../public/Images/LastLogos/Meta.svg"
import Shopify from "./../../public/Images/LastLogos/Shopify.svg"
import W from "./../../public/Images/LastLogos/W.svg"
import Arrow from "./../../public/Images/LastLogos/Arrow.svg"
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const GithubLogo = () => {
   const Logos = [
    {
        id: 1,
        name: Github
    },
    {
        id: 2,
        name: Button
    },
    {
        id: 3,
        name: Amazon
    },
    {
        id: 4,
        name: Flutter
    },
    {
        id: 5,
        name: Google
    },
    {
        id: 6,
        name: Meta
    },
    {
        id: 7,
        name: Shopify
    },
    {
        id: 8,
        name: W
    },
    {
        id: 9,
        name: Arrow
    }
]
    return (
        <div className='md:flex hidden justify-center items-center my-20'>
            <div className="grid grid-cols-9 gap-6">
                {Logos.map((logo)=>(
                    <Card key={logo.id} className='p-2 border-none shadow-lg'>
                        <div className="w-15">
                        <Image className='w-full' src={logo.name} alt="ok" />
                        </div>
                    </Card>
                ))}
                

            </div>
        </div>
    )
}

export default GithubLogo