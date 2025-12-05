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
import ReactLogo from "./../../public/Images/Dev/ReactLogo.svg"
import { Card } from "@/components/ui/card"
import Image from "next/image"

const FlutterLogo = () => {
    const logos = [
        Flutter,
        ReactLogo,
        JavaScript,
        Java,
        Next,
        Mongo,
        Python,
        Node,
        PhotoShop,
        Ai,
        Figma
    ]

    return (
        <div className=" xl:px-40 py-30 md:block hidden">
            <div className="xl:flex md:flex-wrap  justify-center gap-4 px-5">
                {logos.map((logo:any,index:number) => (
                    <Card key={index} className="flex justify-center items-center  xl:px-4 xl:py-3 shadow-lg  border-none">
                        <div className="xl:w-15 md:w-12 ">
                        <Image src={logo} alt="" className="w-full h-full " />
                        </div>
                    </Card >
                ))}
            </div>

        </div>
    )
}

export default FlutterLogo