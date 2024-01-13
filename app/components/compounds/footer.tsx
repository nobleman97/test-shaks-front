"use client"
import Image from "@/node_modules/next/image";
import FooterMenu from "../molecules/footer-menu";
import logo from "@/public/images/footerlogo.png";
import { Icon } from '@iconify/react';

const menu = [

   { 
    title: "Home",
    menu: [
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"}]      
  },
   { 
    title: "Services",
    menu: [
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"}]      
  },
   { 
    title: "Resources",
    menu: [
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"},
    { title: "SEO", url: "/"}]      
  }
]


export default function Footer(){
    return(
        <>
        <div className="flex flex-wrap justify-between items-center px-[10.4%] pt-[73px] pb-[115px] gap-[53px] md:gap-[200px]">

            <div className="flex flex-col md:max-w-[28.6%] grow">
                <Image src={logo} alt="logo"/>
                <p className=" mt-[42.5px] mb-[25px] text-base font-normal max-w-[63.3%] md:max-w-[263px]">Shakazu is a full-service social media marketing agency. Drive traffic and sales with our management services.</p>
                <div className="flex sociallinks justify-between  max-w-[263px] text-2xl">
                     <Icon icon="ic:sharp-facebook" />
                     <Icon icon="lucide:instagram" />
                    <Icon icon="ri:twitter-fill" />
                    <Icon icon="ant-design:youtube-filled" />
                </div>
            </div>

            <div className="flex flex-wrap justify-between grow">
                {
                    menu.map((item, key) => (
                        <FooterMenu key={key} title={item.title} options={item.menu}/>
                    ))
                }
            </div>
           
        </div>

      </>
    )
}