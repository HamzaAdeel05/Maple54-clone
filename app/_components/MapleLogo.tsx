import { Button } from '@/components/ui/button'
import React from 'react'

const MapleLogo = () => {
    const socialIcons = [
        { name: "GitHub", url: "data:image/png;base64,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" },
        { name: "Dribbble", url: "https://static.vecteezy.com/system/resources/previews/018/930/588/non_2x/dribble-logo-dribbble-icon-transparent-free-png.png" },
        { name: "LinkedIn", url: "https://images.seeklogo.com/logo-png/39/2/linkedin-logo-png_seeklogo-393965.png" },
        { name: "Facebook", url: "https://www.freeiconspng.com/uploads/facebook-png-icon-follow-us-facebook-1.png" },
        { name: "Twitter", url: "https://static.vecteezy.com/system/resources/previews/018/930/695/non_2x/twitter-logo-twitter-icon-transparent-free-free-png.png" },
        { name: "Instagram", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" },
        { name: "Pinterest", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm14DZ5byv_7bCm5agXpbtUByBUEf7SU8vhw&s" },
    ];

    return (
        <div className='flex justify-between items-center p-4'>
            <div className=" flex gap-2">

                {socialIcons.map((logos) => (
                    <div key={logos.name} className="lg:w-8 w-5 rounded-full">
                        <img className='w-full h-full rounded-full border'  src={logos.url} />
                    </div>
                ))}
            </div>
            <div className="lg:w-50 lg:grid hidden">

            <img src='https://www.maple54.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBlackLogo.b108b29a.jpg&w=384&q=75' />
            </div>
            <Button className='bg-[#FA513E] lg:px-10 font-bold px-3 text-[12px] lg:text-lg lg:py-5 ' >
                Get Started
            </Button>
        </div>
    )
}

export default MapleLogo