"use client"
import { useFormik } from "formik";
import Button from "../components/atoms/button/button";
import Input from "../components/atoms/input";


interface FormValues {
    name: string;
    email: string;
    password: string;
  }

export default function Signup(){ 

    const formik = useFormik<FormValues>({
        initialValues: {
            name: '',
            email: '',
            password: ''
          },
        onSubmit: (values) => {
          console.log(values);
          // Handle form submission, such as sending data to an API
        },
      });

    return(
        <>
            <div className="flex flex-row">
                <div className="w-[50%] h-full bg-white pt-[131px] pl-[150px] pr-[23px] text-black pb-[213px]">
                    <h1 className="mb-[70px] font-semibold text-[42px]">Welcome to Shakazu Marketing Agency.</h1>

                    
                        <form onSubmit={formik.handleSubmit}>
                            <h2 className="text-[#F53300] font-medium mb-[27px] text-2xl">Sign Up</h2>
                                <div className="max-w-[362px] flex flex-col ">
                                    <Input type="text" label="Name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                                    <Input type="email" label="Email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                                    <Input type="password" label="Password" name="password" onChange={formik.handleChange} value={formik.values.password} />

                                    <Button type="submit" color="secondary" style="px-[90px] py-[10px] rounded-[40px] text-[16px]">
                                        Sign Up
                                    </Button>
                                </div>
                        </form>

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