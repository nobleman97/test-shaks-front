"use client"
import { Plan } from "@/app/lib/types";
import axios from "axios";
import { useEffect, useState } from "react";
import PriceCard from "../molecules/priceCard";

export default function ServicePricing(){
    // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const [ plans, setPlans] = useState<null|Plan[]>(null)
    const [selectedBillingCycle, setSelectedBillingCycle] = useState<'MONTHLY' | 'YEARLY'>('MONTHLY');

    const fetchPlans = async () => {
        try {
          const response = await axios(baseUrl + '/api/plans');
          // const response = await axios('/api/plans');

          console.log({response});

          setPlans(response.data.data.data);
        } catch (error) {
          console.error("Failed to fetch plans:", error);
        }
      };
    
      useEffect(() => {
        if (plans === null) {
          fetchPlans();
        }
      }, [plans])

      const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedBillingCycle(event.target.checked ? 'YEARLY' : 'MONTHLY');
      };

      const filteredPlans = plans?.filter(plan => plan.billingCycle === selectedBillingCycle) || [];

    return (<>
            <section className="flex flex-col gap-[55px] md:gap-[60px] items-center justify-center ">

                <h2 className="text-2xl leading-10 md:text-[42px] font-semibold max-w-[90%] md:max-w-[821px] text-center">
                    {'Choose Your Plan'}
                </h2>

                <div>
                    <div>
                        <label className="inline-flex gap-[23px] items-center cursor-pointer">
                        <span className={`ms-3 text-base font-medium ${selectedBillingCycle === 'MONTHLY' ? 'text-[#2D77D8]' : 'text-[#C2C2C2]'}`}>Monthly Plan</span>
                                <input type="checkbox" onChange={handleToggleChange} className="sr-only peer"  />
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span className={`ms-3 text-sm font-medium ${selectedBillingCycle === 'YEARLY' ? 'text-[#2D77D8]' : 'text-[#C2C2C2]'}`}>
                                    Yearly PlanYearly Plan
                                </span>
                        </label>
                    </div>
                </div>

                <section className="bg-white text-black flex flex-col flex-wrap md:flex-row gap-[30px]">
                {filteredPlans.length > 0 ? (
                    filteredPlans.map(({price, description, name, id, features}) => (
                        <PriceCard key={id} id={id} type={name} price={price} description={description} features={features} />
                    ))
                ) : (
                    <p>No plans available for the selected billing cycle.</p>
                )}
                </section>

                <section className="text-center md:text-start">
                    {/* <h3 className="text-base md:text-2xl mb-[8px] font-semibold ">{descriptionTitle}</h3>
                    <p className="text-[14px] font-light md:text-base text-[#242424]">{description}</p> */}
                </section>


            </section>
    </>)
}