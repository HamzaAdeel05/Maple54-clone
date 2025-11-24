import { Separator } from '@/components/ui/separator'
import { Sparkle } from 'lucide-react'
import React from 'react'

const Appointment = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className="flex justify-between w-full py-3 px-2 border-b text-[#431616]   ">
                <div className="flex gap-1 justify-center items-center">
                    <Sparkle size={14} className='font-medium text-red-800' />
                    <h2 className='text-[14px] underline font-semibold'>
                        Book an Appointment
                    </h2>
                </div>
                <div className="flex gap-3">
                    <Separator orientation='vertical' className=' bg-neutral-600 '/>
                    <p className='text-[14px] font-semibold'>Contact us</p>
                </div>

            </div>
        </div>
    )
}

export default Appointment