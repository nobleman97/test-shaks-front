"use client"
import { ElementType, useState } from "react";
import { Icon } from '@iconify/react';
import Jumbotron from "../components/compounds/jumbotron";
import ContactForm from "../components/molecules/contact-form";

export default function ContactUs(){ 

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        industry: '',
        annualRevenue: '',
        country: '',
        message: '',
      });
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle the form submission logic, like sending data to an API
      };
    
      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
      };

    return(
        <>
        <Jumbotron image="/images/contactusjb.png">
            <div className="px-[3.8%] md:px-[10.4%] pt-[90px] md:pt-[195px] flex flex-col items-center justify-center">
                <h1 className="text-[32px] md:text-[42px] font-semibold mb-[30px] text-center">Get in Contact & Get Your Free Proposal Today</h1>
                <p className="text-base md:text-2xl font-light text-center md:max-w-[52%]">
                Get connected with a Digital Marketing Expert for tangible insights on how to grow your brand organically via SEO, Content, and /or Social Media
                </p>
            </div>
        </Jumbotron>

        <section className=" flex flex-col  px-[3.8%] pb-[32px] md:px-[10.4%] bg-white text-[#000] items-center justify-center pt-[47px]">
            <h1 className="text-2xl md:text-[42px] font-semibold mb-[12px]">Speak With an Expert!</h1>
            <p className="text-base font-normal mb-[47px] max-w-[80%] text-center">Teaming up with Shakazu means you have a partner with the expertise to get the job done right. Please provide a few details below and we&apos;ll get you connected with a seasoned Digital expert on our team (an actual account team member, not a sales representative)!</p>
        
            <div className="flex flex-col md:flex-row gap-[32px] md:gap-[30px]">
                <div className="banner relative bg-[#091A30] md:mb-[120px] 
                rounded-[10px] pt-[73px] pb-[67px] md:max-w-[31.5%] 
                max-h-full flex flex-col min-w-[360px]">
                    <h2 className=" px-[46px] text-base md:text-[32px] font-semibold text-[#FFF] mb-[23px] leading-10">Your <span className="text-[#F53300]">No 1</span> solution to social media and digital marketing problems.</h2>
                    <p className=" px-[46px] text-[14px] md:text-base text-[#C2C2C2] mb-[24px] md:mb-[103px]">Whether you&apos;re trying to build brand awareness on social media or needing to drive more traffic from search engines, we&apos;re here to help you connect with your audience and hit those strategic goals.</p>
                    
                    <div className=" w-full bottom-[16%] h-[34px] bg-[#FDFAE9] "></div>
                    
                    <div className="px-[46px] w-full phone text-2xl md:text-[32px] text-white font-semibold flex gap-[30px] items-center justify-center mt-[24px] md:mt-[82px]">
                        <span className="icon"><Icon icon="heroicons:phone-solid" /></span>
                        <p className="font-light flex md:font-normal w-full">+100100001</p>
                    </div>
                </div>

                <div className="form md:pt-[25px]">
                    <ContactForm />
                </div>
            </div>
        
        </section>


        </>
    )
}