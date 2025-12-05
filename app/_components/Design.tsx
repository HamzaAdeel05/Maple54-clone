import React from "react";
import Image from "next/image";
import Facebook from "../../public/Images/Socials/Facebook.svg";
import Instagram from "../../public/Images/Socials/Instagram.svg";
import Twitter from "../../public/Images/Socials/Twitter.svg";
import Youtube from "../../public/Images/Socials/Youtube.svg";
import Pinterest from "../../public/Images/Socials/Pinterest.svg";
import Google from "../../public/Images/Socials/Google.svg";
import Tiktok from "../../public/Images/Socials/Tiktok.svg";
import Whatsapp from "../../public/Images/Socials/Whatsapp.svg";
import Linkedin from "../../public/Images/Socials/Linkedin.svg";
import Snapchat from "../../public/Images/Socials/Snapchat.svg";
import Bing from "../../public/Images/Socials/Bing.svg";

const Design = () => {
    const Logos = [
        { id: 1, src: Facebook, alt: "Facebook" },
        { id: 2, src: Instagram, alt: "Instagram" },
        { id: 3, src: Twitter, alt: "Twitter" },
        { id: 4, src: Youtube, alt: "YouTube" },
        { id: 5, src: Pinterest, alt: "Pinterest" },
        { id: 6, src: Google, alt: "Google" },
        { id: 7, src: Tiktok, alt: "TikTok" },
        { id: 8, src: Whatsapp, alt: "WhatsApp" },
        { id: 9, src: Linkedin, alt: "LinkedIn" },
        { id: 10, src: Snapchat, alt: "Snapchat" },
        { id: 11, src: Bing, alt: "Bing" },
    ];

    return (
        <div className="py-15 md:grid  hidden  ">
            <div className="md:grid md:grid-cols-7  lg:flex flex-wrap justify-center items-center gap-4 hidden px-20 mb-20 ">
                {Logos.map((logo) => (
                    <div key={logo.id} className="md:w-25 md:h-25   shadow-xl flex justify-center items-center">

                        <Image
                            key={logo.id}
                            src={logo.src}
                            alt={logo.alt}
                            width={60}
                            height={40}
                        />
                    </div>
                ))}
            </div>
                <div className="xl:flex hidden justify-center text-center flex-col space-y-4">
                    <h2 className="text-4xl font-bold"><span className="text-[#FA5131]">Design & Website</span> Development</h2>
                    <p className="text-2xl font-medium text-[#3F5F84]">Crafting tailored websites and designs to elevate your brand presence.</p>
                </div>
        </div>
    );
};

export default Design;
