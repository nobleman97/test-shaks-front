import Jumbotron from "../components/compounds/jumbotron";
import ServicePricing from "../components/compounds/servicePricing";
import PriceCard from "../components/molecules/priceCard";

export default function Pricing(){ 
    return(
        <>
        <Jumbotron image="/images/pricingbg.png">
            <div className="px-[3.8%] md:px-[10.4%] pt-[110px] md:pt-[195px] flex flex-col items-center justify-center">
                <h1 className="text-[32px] md:text-[42px] font-semibold mb-[30px] text-center">Choose Your Plan  & Get Your Free Proposal Today</h1>
                <p className="text-base md:text-2xl font-light text-center max-w-[90%] md:max-w-[52%]">
                A perfect digital marketing and social media management pricing for your business.
                </p>
            </div>
            
        </Jumbotron>

        <section className="bg-white text-black flex flex-col gap-[60px] py-[95px] px-[3.8%] md:px-[10.4%]">
            <ServicePricing />
        </section>


        </>
    )
}