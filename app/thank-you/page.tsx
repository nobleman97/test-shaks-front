"use client"
import { Icon } from "@iconify/react";
import Button from "../components/atoms/button/button";
import Jumbotron from "../components/compounds/jumbotron";

export default function ThankYou(){ 
    return(
        <>

            <span className="flex md:hidden">
            <Jumbotron image="/images/signupbg.png">
                <div className="px-[3.8%] md:px-[10.4%] pt-[110px] md:pt-[195px] flex flex-col items-center justify-center">
                    <h1 className="text-[32px] md:text-[42px] font-semibold mb-[30px] text-center">
                    Your <span className="text-black">No 1</span> solution to social media and digital marketing problems
                    </h1>
                    <p className="text-base md:text-2xl font-light text-center max-w-[90%] md:max-w-[52%]">
                        Whether you&apos;re trying to build brand awareness on social media or needing to drive more traffic from search engines, we&apos;re here to help you connect with your audience and hit those strategic goals
                    </p>
                </div>
            </Jumbotron>
            </span>

            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center md:w-[50%] h-full bg-white px-[3.8%] md:pt-[131px] md:pl-[150px] pr-[23px] text-black pb-[58px] md:pb-[213px]">
                    <div className="text-6xl mt-[54px] mb-[24px]"><Icon icon="simple-line-icons:check" /></div>

                    <h1 className="text-[42px] font-semibold mb-[4px]">Thank you!</h1>
                    <p className=" text-center font-light text-base mb-[42px] md:mb-[50px] ">Your message has been received, we&apos;ll <br></br>update you shortly.</p>
                    <Button color="secondary" style="rounded-[40px] px-[30px] py-[10px]">
                    Continue to Home
                    </Button>

                </div>


                <div
                    className=" hidden text-white px-[120px] md:w-[50%] bg-cover bg-center bg-no-repeat md:flex justify-center items-center flex-col"
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