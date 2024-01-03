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
            <div className="px-[10.4%] pt-[195px] flex flex-col items-center justify-center">
                <h1 className="text-[42px] font-semibold mb-[30px] text-center">Get in Contact & Get Your Free Proposal Today</h1>
                <p className="text-2xl font-light text-center max-w-[52%]">
                Get connected with a Digital Marketing Expert for tangible insights on how to grow your brand organically via SEO, Content, and /or Social Media
                </p>
            </div>
        </Jumbotron>

        <section className=" flex flex-col px-[10.4%] bg-white text-[#000] items-center justify-center pt-[47px]">
            <h1 className="text-[42px] font-semibold mb-[12px]">Speak With an Expert!</h1>
            <p className="text-base font-normal mb-[47px] max-w-[80%] text-center">Teaming up with Shakazu means you have a partner with the expertise to get the job done right. Please provide a few details below and we’ll get you connected with a seasoned Digital expert on our team (an actual account team member, not a sales representative)!</p>
        
            <div className="flex gap-[30px]">
                <div className="banner relative bg-[#091A30] mb-[120px] rounded-[10px] px-[46px] pt-[73px] pb-[67px] max-w-[31.5%] max-h-[830px] flex flex-col">
                    <h2 className="text-[32px] font-semibold text-[#FFF] mb-[23px]">Your No 1 solution to social media and digital marketing problems.</h2>
                    <p className="text-[#C2C2C2] mb-[103px]">Whether you’re trying to build brand awareness on social media or needing to drive more traffic from search engines, we’re here to help you connect with your audience and hit those strategic goals.</p>
                    
                    <div className=" absolute left-0 right-0 w-full bottom-[16%] h-[34px] bg-[#FDFAE9] "></div>
                    
                    <div className="phone text-[32px] text-white font-semibold flex gap-[30px] items-center justify-center mt-[82px]">
                        <span className="icon"><Icon icon="heroicons:phone-solid" /></span>
                        <p>+1 001 00001</p>
                    </div>
                </div>

                <div className="form pt-[25px]">
                    <ContactForm />
                </div>
            </div>
        
        </section>


        </>
    )
}