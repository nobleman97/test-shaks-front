"use client"
import { Icon } from "@iconify/react";
import Button from "../atoms/button/button";

export default function ServicesCard ({services, socials, description, route, button}:{services: string, socials: { facebook?: string, instagram?: string, linkedin?: string }, description: string, route?: string, button?:  'primary' | 'secondary' | 'warning' | 'dark' | 'warning-yellow'}){ 
    return (
        <>
            <div className="card1 flex flex-col text-center items-center justify-center z-[2] w-full md:w-[360px] bg-[#FFF] text-[#000] shadow-xl max-h-[618px] rounded-[20px] px-[45px] pt-[54px] pb-[42.3px]">
              <h2 className="text-[32px] font-semibold max-w-[85%] md:max-w-full">{services}</h2>
              
              <div className="icons flex flex-row justify-center mt-[44.6px] mb-[45.36px] text-[40px]">
                <span className="flex flex-row gap-[10px]">
                  <Icon icon="skill-icons:instagram" />
                  <Icon icon="logos:facebook" />
                  <Icon icon="skill-icons:linkedin" />
                </span>
               
              </div>

              <div className="flex items-center justify-center">
                <p className="text-sm font-normal max-w-[87%] ">
                    {description}
                </p>
              </div>



              <Button style="text-base font-normal px-[30px] py-[10px] rounded-[40px] mt-[39.64px] mb-[42px]" color={button || 'dark'}>
                Learn more...
              </Button>

          </div>
        
        </>
    )
}