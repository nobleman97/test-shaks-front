"use client"
import PriceCard from "../molecules/priceCard";

export default function ServicePricing({ title, descriptionTitle, description,  pricing }:{title: string, pricing: any[], descriptionTitle: string, description: string}){
    return (<>
            <section className="flex flex-col gap-[60px] items-center justify-center ">

                <h2 className="text-[42px] font-semibold max-w-[821px] text-center">
                    {title}
                </h2>

                <section className="bg-white text-black flex gap-[30px]">
                    {
                        pricing.map((item, key) => (
                            <PriceCard key={key} price={item?.price} description={item?.description} features={item?.features} />
                        ))
                    }
                </section>

                <section>
                    <h3 className="text-2xl mb-[8px] font-semibold">{descriptionTitle}</h3>
                    <p>{description}</p>
                </section>


            </section>
    </>)
}