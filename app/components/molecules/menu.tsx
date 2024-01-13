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
            <div className="fixed  top-[96px] inset-0 bg-black bg-opacity-50 z-10" onClick={closeMenu}></div>
        )}

        <div className={`md:flex md:gap-[60px] md:items-center ${isOpen ? 'flex flex-col absolute top-[96px] left-0 bg-[#091A30] w-full z-10 p-[10px]' : 'hidden'}`}>
    

            <Link href={"/our-services"} className="border-b-[1px] md:border-b-0  text-center md:text-start py-[10px]">Services</Link>
            <Link href={"/pricing"} className="border-b-[1px] md:border-b-0  text-center md:text-start py-[10px]">Pricing</Link>
            {/* <Link href={"/blog"} className="text-center md:border-b-0  md:text-start py-[10px]">Blogs</Link> */}
            <Link href={"/about-us"} className=" border-b-[1px] md:border-b-0 text-center md:text-start py-[10px]">About Us</Link>
            <Link href={"/contact-us"} className=" text-center md:text-start md:rounded-[40px] py-[10px] md:px-[30px] md:bg-[#F53300]"> Contact Us</Link>
        </div>

        <div  className="flex gap-[60px] items-center md:hidden">
            <button className="text-6xl" onClick={() => setIsOpen(!isOpen)}>
                {!isOpen ? (
                     <Icon icon="ci:hamburger-md" />
                ):(
                    <Icon icon="tabler:x" />
                )}
               
               
            </button>
            
        </div>
        </>
    )
}