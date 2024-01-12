"use client"
import Link from "@/node_modules/next/link";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Menu (){
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <>
         {isOpen && (
            // Overlay that covers the screen and can be clicked to close the menu
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeMenu}></div>
        )}

        {/* <div className="hidden md:flex md:gap-[60px] md:items-center"> */}
        <div className={`md:flex md:gap-[60px] md:items-center ${isOpen ? 'flex flex-col absolute top-[96px] left-0 bg-[#091A30] w-full z-10 p-[10px]' : 'hidden'}`}>
        
            <button className="absolute top-0 right-0 p-4" onClick={closeMenu}>
                <Icon icon="ep:circle-close-filled" className="text-3xl text-white" />
            </button>

            <Link href={"/our-services"} className="py-[10px]">Services</Link>
            <Link href={"/pricing"} className="py-[10px]">Pricing</Link>
            {/* <Link href={"/blog"} className="py-[10px]">Blogs</Link> */}
            <Link href={"/about-us"} className="py-[10px]">About Us</Link>
            <Link href={"/contact-us"} className="rounded-[40px] py-[10px] px-[30px] bg-[#F53300]"> Contact Us</Link>
        </div>

        <div  className="flex gap-[60px] items-center md:hidden">
            <button className="text-6xl" onClick={() => setIsOpen(!isOpen)}>
                <Icon icon="ci:hamburger-md" />
            </button>
            
        </div>
        </>
    )
}