import Button from "../components/atoms/button/button";
import Jumbotron from "../components/compounds/jumbotron";

export default function ThankYou(){ 
    return(
        <>
        <div className="flex flex-row">
            <div className="flex flex-col items-center justify-center w-[50%] h-full bg-white pt-[131px] pl-[150px] pr-[23px] text-black pb-[213px]">
                <div></div>
                <h1 className="text-[42px] font-semibold mb-[4px]">Thank you!</h1>
                <p className=" text-center font-light text-base mb-[50px] ">Your message has been received, we&apos;ll <br></br>update you shortly.</p>
                <Button color="secondary" style="rounded-[40px] px-[30px] py-[10px]">
                  Continue to Home
                </Button>

            </div>


            <div
                className=" text-white px-[120px] w-[50%] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col"
                style={{ backgroundImage: `url(./images/signupbg.png)`, backgroundColor: '#F53300' }}
            >
                <h1 className="text-[36px] font-semibold mb-[24px]">
                Your <span className="text-[#091A30]">No 1 </span>solution to social media and digital marketing problems.
                </h1>

                <p className="font-normal text-[16px]">Whether you&apos;re trying to build brand awareness on social media or needing to drive more traffic from search engines, we&apos;re here to help you connect with your audience and hit those strategic goals.</p>
            </div>
        </div>
    </>
    )
}