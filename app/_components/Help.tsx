import { Button } from '@/components/ui/button'
import React from 'react'

const Help = () => {
  return (
    <section className="my-12 md:my-20">
      <div
        className="relative w-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px] xl:min-h-[520px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/Divs/image.svg') " }}
      >
        {/* Overlay for better readability on small screens */}
        <div className="absolute inset-0 bg-black/10 md:bg-transparent" />

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Empty column for image balance on desktop */}
              <div className="hidden md:block" />

              {/* Text Section */}
              <div className="max-w-xl space-y-6 sm:space-y-8 py-2 md:space-y-10 text-center md:text-left">
                <h1 className="text-2xl sm:text-3xl xl:text-4xl font-bold leading-tight">
                  How can we <span className="text-[#FA5131]">help?</span>
                </h1>

                <h3 className="text-base sm:text-lg xl:text-2xl font-medium">
                  With expert advice and award-winning support, Maple 54 is here to help you grow!
                </h3>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="bg-white px-6 hover:bg-[#FA5131] hover:text-white text-[#FA5131] border border-[#FA5131] w-full sm:w-auto">
                    Let's discuss your goals!
                  </Button>
                  <Button className="bg-[#FA5131] border border-[#FA5131] hover:bg-white hover:text-[#FA5131] px-8 w-full sm:w-auto">
                    Book A Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help
