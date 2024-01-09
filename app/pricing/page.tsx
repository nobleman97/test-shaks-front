import Jumbotron from "../components/compounds/jumbotron";
import ServicePricing from "../components/compounds/servicePricing";
import PriceCard from "../components/molecules/priceCard";

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

        <section className="bg-white text-black flex flex-col gap-[60px] py-[95px] px-[10.4%]">
            <ServicePricing 
            title="Social Media Management & Advertising Services Plan" 
            descriptionTitle="What&apos;s Included in the Cost of Social Media Management And Advertising Services?" 
            description="Depending on your ad budget, Shakazu offers a variety of options from a starter plan with a monthly social ad spend budget, and to a custom plan with an unlimited monthly social ad spend budget. Our services are here to provide you with expert help by optimizing your social media ad campaigns and saving you time while doing so. 
            Our social media management include some of these services; Social Media Manager, Account Manager, 24/7 Analytics, Custom Content Creation, Pre-approved Content."  
            pricing ={[
                {
                    price: 20,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                },
                {
                    price: 60,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                },
                {
                    price: 200,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                }
            ]}  />
            <ServicePricing 
            title="Email Marketing Pricing" 
            descriptionTitle="What&apos;s Included in Our Email Marketing Services?" 
            description="Our email marketing services include original email copy and designs, list maintenance and clean-up, performance reports and more. Our email services can help you speed up your sales cycle, move email marketing leads from one stage to the next, skyrocket your engagement, email opens, and click-through rates."  
            pricing ={[
                {
                    price: 20,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                },
                {
                    price: 60,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                },
                {
                    price: 200,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                }
            ]}  />
            <ServicePricing 
            title="PPC Management Pricing" 
            descriptionTitle="What&apos;s Included in PPC Management?" 
            description="PPC management entails ad creation and monitoring and controlling a business&apos;s PPC advertising spend. So if you&apos;re a business owner looking for a PPC agency to manage your PPC accounts, then look no further. Read on to learn more about our PPC management pricing and get started today."  
            pricing ={[
                {
                    price: 20,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                },
                {
                    price: 60,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                },
                {
                    price: 200,
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. consectetur adipiscing elit.",
                    features: [
                        "This is a feature",
                        "This feature is not available"
                    ]
                }
            ]}  />

        </section>


        </>
    )
}