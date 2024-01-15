import { Icon } from "@iconify/react";
import Button from "../atoms/button/button";

export default function ThankYou(){
    return (<>
                <div className="flex flex-col items-center justify-center md:w-[50%] h-full bg-white px-[3.8%] md:pt-[131px] md:pl-[150px] pr-[23px] text-black pb-[58px] md:pb-[213px]">
                    <div className="text-6xl mt-[54px] mb-[24px]">
                        <Icon icon="simple-line-icons:check" />
                    </div>

                    <h1 className="text-[42px] font-semibold mb-[4px]">Thank you!</h1>
                    <p className=" text-center font-light text-base mb-[42px] md:mb-[50px] ">
                        Your message has been received, we&apos;ll <br></br>update you shortly.</p>
                        <Button color="secondary" style="rounded-[40px] px-[30px] py-[10px]">
                        Continue to Home
                        </Button>
                </div>
    </>)
}