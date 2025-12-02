import { Button } from '@/components/ui/button'
import React from 'react'

const Help = () => {
    return (
        <div className='my-20'>
            <div 
                className="relative w-full h-[500px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/Images/Divs/image.svg')" }}
            >

                {/* Text on top */}
                <div className="absolute grid grid-cols-2 w-full">
                    <div className=""></div>
                    <div className="max-w-md mt-30  space-y-10 ">
                    <h1 className="text-4xl font-bold">How can we <span className='text-[#FA5131]'>help? </span></h1>
                    <h3 className="text-2xl font-medium ">
                        With expert advice and award-winning support,
                        Maple 54 is here to help you grow!
                    </h3>
                    <div className="flex gap-4">
                        <Button className='bg-white px-6 hover:bg-[#FA5131] hover:text-white text-[#FA5131] border border-[#FA5131]'>Let's discuss your goals!</Button>
                        <Button className='bg-[#FA5131] border border-[#FA5131] hover:bg-white hover:text-[#FA5131] px-10'>Book A Demo</Button>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Help
