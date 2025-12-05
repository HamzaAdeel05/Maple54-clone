import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import * as Icons from "lucide-react";
import React from 'react';

const Ineed = () => {
    const serviceItems = [
        { id: 1, category: 'Online Advertising & PPC', iconName: 'volume-2', description: 'Targeted ads and pay-per-click campaign management.' },
        { id: 2, category: 'Digital Marketing Services', iconName: 'trending-up', description: 'Data-driven strategies for online growth and performance.' },
        { id: 3, category: 'Social Media Marketing', iconName: 'share-2', description: 'Content creation and engagement for all social platforms.' },
        { id: 4, category: 'Website Design & Development', iconName: 'code', description: 'Building modern, responsive, and performant websites.' },
        { id: 5, category: 'Design Branding Services', iconName: 'palette', description: 'Logo creation, brand guidelines, and visual identity.' },
        { id: 6, category: 'Custom Software & App Dev', iconName: 'smartphone', description: 'Developing bespoke mobile and web applications.' },
        { id: 7, category: 'AI & Automation Solutions', iconName: 'bot', description: 'Implementing artificial intelligence and workflow automation.' },
        { id: 8, category: 'Team & Talent Outsourcing', iconName: 'users', description: 'Providing skilled professionals for your project needs.' },
    ];

    const iconMap:any = {
        "volume-2": Icons.Volume2,
        "trending-up": Icons.TrendingUp,
        "share-2": Icons.Share2,
        "code": Icons.Code,
        "palette": Icons.Palette,
        "smartphone": Icons.Smartphone,
        "bot": Icons.Bot,
        "users": Icons.Users,
    };

    return (
        <div>
            <div className="xl:flex grid md:grid-cols-3 grid-cols-2 text-center pb-10 gap-4 justify-center items-center px-5 my-15">
                {serviceItems.map((item) => {
                    const IconComponent = iconMap[item.iconName];
                    return (
                        <Card  key={item.id} className='h-full w-full px-4  items-center shadow-xl hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl '>
                            <div className="bg-gray-200 rounded-full p-2  hover:text-[#FA5131]">
                            <IconComponent className='w-8 h-8 text-[#FA5131] ' />
                            </div>
                            <p className='text-gray-700 text-sm'>I need</p>
                            <h2 className='items-center font-bold  text-[#431616] text-lg '>{item.category}</h2>
                            <Icons.MoveRight className='text-[#431616]' />
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default Ineed;
