"use client"
import PriceCard from "../molecules/priceCard";

export default function ServicePricing({ title, descriptionTitle, description,  pricing }:{title: string, pricing: any[], descriptionTitle: string, description: string}){
    const pricingPackages = ['BASIC', 'PROFESSIONAL', 'ADVANCED']
    return (<>
            <section className="flex flex-col gap-[55px] md:gap-[60px] items-center justify-center ">

                <h2 className="text-2xl leading-10 md:text-[42px] font-semibold max-w-[90%] md:max-w-[821px] text-center">
                    {title}
                </h2>

                <section className="bg-white text-black flex flex-col flex-wrap md:flex-row gap-[30px]">
                    {
                        pricing.map((item, key) => (
                            <PriceCard key={key} type={pricingPackages[key]} price={item?.price} description={item?.description} features={item?.features} />
                        ))
                    }
                </section>

                <section className="text-center md:text-start">
                    <h3 className="text-base md:text-2xl mb-[8px] font-semibold ">{descriptionTitle}</h3>
                    <p className="text-[14px] font-light md:text-base text-[#242424]">{description}</p>
                </section>


            </section>
    </>)
}