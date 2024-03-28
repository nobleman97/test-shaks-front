"use client"
import React, { useEffect, useState } from "react";
import { Feature } from "@/app/lib/types";
import Button from "../atoms/button/button";
import FeatureItem from "./featureItem";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import axios from "axios";




export default function PriceCard({type, id, price, description, features}:{type: string, id:any,  price: number, description: string, features: Feature[]}) {
    // State to track if all features should be shown
    const [showAllFeatures, setShowAllFeatures] = useState(false);
    const [token, setToken] = useState<any>(null);
    const [planId, setPlanId] = useState<any>(id);

    const router = useRouter()
    // Function to toggle the visibility of all features
    const toggleFeaturesVisibility = () => {
        setShowAllFeatures(!showAllFeatures);
    };
      

    const handlePaymentRequest = async () => {
        try {
            const resp = await axios.post('/api/payment/create',{planId, token});
            const paymentUrl = resp.data.data.data;
            router.push(paymentUrl)

        } catch (error: any) {
            console.log(error.message)
            if(error.response.status === 401){
                router.push('/login')
            }
            console.log(error.response)
        }
    }

    useEffect(() => {
        const tok = Cookies.get('token')
        setToken(tok)
    },[])

    // Determine the features to display based on `showAllFeatures`
    const displayedFeatures = showAllFeatures ? features : features.slice(0, 4);

    return(
        <>
            <div className="rounded-[20px] border-[1px] max-w-[360px] shadow-custom bg-white text-black pb-[44px] pt-[62px]">
                <div className="px-[44px] border-b-[1px] flex flex-col gap-[12px] text-center items-center justify-center">
                    <h2 className="text-[40px] font-medium">${price}</h2>
                    <h3 className="text-2xl font-semibold"> {type} </h3>
                    <p className="mb-[26px] text-[12px] md:text-base text-[#424242] font-light">{description}</p>
                </div>
                <div className="mt-[33px] flex items-center justify-center flex-col">
                    <div className="flex flex-col gap-[12px] justify-between px-[6.25%] items-start mb-[20px] w-full">
                        {displayedFeatures.map((item, key) => (
                            <FeatureItem key={key} feature={item} />
                        ))}
                    </div>
                    {features.length > 4 && (
                        <div  onClick={toggleFeaturesVisibility} className="cursor-pointer my-[32px] text-sm text-[#8F8F8F]">
                            {showAllFeatures ? 'See Less' : 'See More'}
                        </div>
                    )}

                    {token ? (
                        <Button color="secondary" type="button" style="rounded-[40px] px-[70px] py-[10px]" onClick={handlePaymentRequest}>
                            Start Now
                        </Button>
                    ):(
                        <Button color="secondary" type="button" style="rounded-[40px] px-[70px] py-[10px]" onClick={()=>{router.push('/contact-us')}}>
                            Get My Quote
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}
