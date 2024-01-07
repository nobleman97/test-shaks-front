import Jumbotron from "../components/compounds/jumbotron";

export default function Pricing(){ 
    return(
        <>
        <Jumbotron image="/images/pricingbg.png">
            <div className="px-[10.4%] pt-[195px] flex flex-col items-center justify-center">
                <h1 className="text-[42px] font-semibold mb-[30px] text-center">Choose Your Plan  & Get Your Free Proposal Today</h1>
                <p className="text-2xl font-light text-center max-w-[52%]">
                A perfect digital marketing and social media management pricing for your business.
                </p>
            </div>
            
        </Jumbotron>
        </>
    )
}