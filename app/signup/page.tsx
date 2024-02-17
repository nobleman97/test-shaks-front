"use client"
import { useFormik } from "formik";
import Button from "../components/atoms/button/button";
import Input from "../components/atoms/input";
import Jumbotron from "../components/compounds/jumbotron";
import axios from "axios"


interface FormValues {
    name: string;
    email: string;
    companyname: string;
    phone: string;
    // password: string;
  }

export default function Signup(){ 

    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            companyname: '',
            phone: '',
            // password: ''
          },
        onSubmit: (values) => {
          console.log(values);
          // Handle form submission, such as sending data to an API

        //   store data in db
        },
      });

    //   const callWebHook = async () => {

    //     // https://hooks.zapier.com/hooks/catch/17686904/3gnyfbw/
    //     axios.post()
    //   }

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

            <div className="flex md:flex-row flex-col">
                <div className="md:w-[50%] h-full bg-white pt-[35px] md:pt-[131px] px-[3.8%] md:pl-[150px] md:pr-[23px] text-black pb-[54px] md:pb-[213px]">
                    <h1 className="mb-[24px] md:mb-[70px] font-light md:font-semibold text-2xl md:text-[42px] text-center md:text-start leading-10">Welcome to Shakazu Marketing Agency.</h1>

                    
                        <form onSubmit={formik.handleSubmit}>
                            <h2 className="text-[#F53300] font-light md:font-medium mb-[27px] text-2xl text-center md:text-start">Sign Up</h2>
                                <div className="w-full md:max-w-[362px] flex flex-col ">
                                    <Input type="text" label="Name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                                    <Input type="email" label="Email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                                    <Input type="text" label="Company Name" name="companyname" onChange={formik.handleChange} value={formik.values.companyname} />
                                    {/* <Input type="password" label="Password" name="password" onChange={formik.handleChange} value={formik.values.password} /> */}
                                    <Input type="phone" label="Phone number" name="phone" onChange={formik.handleChange} value={formik.values.phone} />

                                    <Button type="submit" color="secondary" style="px-[90px] py-[10px] rounded-[40px] text-[16px]">
                                        Sign Up
                                    </Button>


                                    *
{/* Company Name

Logo URL

Email Address
 
User's Name */}





                                </div>
                        </form>

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