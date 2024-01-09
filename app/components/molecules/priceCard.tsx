"use client"
import { Icon } from "@iconify/react";
import Button from "../atoms/button/button";

export default function PriceCard({price, description, features}:{price: string, description: string, features: string[]}){
    return(
        <>
            <div className="rounded-[20px] border-[1px] max-w-[360px] shadow-custom bg-white text-black pb-[44px] pt-[62px]">
                <div className="px-[44px] border-b-[1px] flex flex-col gap-[12px] text-center items-center justify-center">
                    <h2 className="text-[40px] font-medium">${price}</h2>
                    <h3 className="text-2xl font-semibold"> BASIC </h3>

                    <p className="mb-[26px] text-[#424242] font-light">{description}</p>
                </div>
                <div className="mt-[33px] flex items-center justify-center flex-col">
                    <div className="flex flex-col gap-[12px] justify-center items-start mb-[64px]">
                        {features.map((item,key) => (
                            
                                <div key={key} className="flex  gap-[13px] justify-center items-center">
                                    <Icon icon="mingcute:check-fill" /> 
                                    <p className="font-medium">{item}</p>
                                </div>
                        ))}
                        
                        <div className="flex  gap-[13px] justify-center items-center">
                            <Icon icon="mingcute:check-fill" /> 
                            <p className="font-medium">This is a feature</p>
                        </div>
                        <div className="flex gap-[13px] justify-center items-center">
                            <Icon icon="mingcute:check-fill" /> 
                            <p className="font-medium">This is a feature</p>
                        </div>
                        <div className="flex gap-[13px] text-[#C2C2C2] justify-center items-center">
                            <Icon icon="mingcute:check-fill" /> 
                            <p>This feature is not available</p>
                        </div>
                        <div className="flex gap-[13px] text-[#C2C2C2]  justify-center items-center">
                            <Icon icon="mingcute:check-fill" /> 
                            <p>This feature is not available</p>
                        </div>
                        <div className="flex gap-[13px] text-[#C2C2C2]  justify-center items-center">
                            <Icon icon="mingcute:check-fill" /> 
                            <p>This feature is not available</p>
                        </div>
                        <div className="flex gap-[13px] text-[#C2C2C2]  justify-center items-center">
                            <Icon icon="mingcute:check-fill" /> 
                            <p>This feature is not available</p>
                        </div>

                    </div>

                    <Button color="secondary" type="button" style="rounded-[40px] px-[70px] py-[10px]">
                        Get My Quote
                    </Button>
                </div>
            </div>
        </>
    )
}