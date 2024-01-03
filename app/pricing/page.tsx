import Jumbotron from "../components/compounds/jumbotron";

export default function Pricing(){ 
    return(
        <>
        <Jumbotron image="/images/aboutusjumbotronbg.png">
            <div className="px-[10.4%] pt-[76px]">
                <h1 className="text-[38px] font-semibold mb-[41px]">About Shakazu</h1>
                <p className="text-2xl font-light max-w-[457px]">
                    Shakazu is an award-winning social media marketing agency in 2023. We offer social media services, social media advertising services, email marketing services, and more. We create and manage top-performing social media campaigns for businesses.
                </p>
            </div>
            
        </Jumbotron>
        </>
    )
}