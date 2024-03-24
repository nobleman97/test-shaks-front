"use client"
import { useFormik } from "formik";
import Button from "../components/atoms/button/button";
import Input from "../components/atoms/input";
import Jumbotron from "../components/compounds/jumbotron";
import * as Yup from 'yup';
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

interface FormValues {
    email: string;
    password: string;
  }

export default function Login(){ 
    const router = useRouter()
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
      });

    const formik = useFormik<FormValues>({
        initialValues: {
            email: '',
            password: '',
          },
          validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(values);
          // Handle form submission, such as sending data to an API
            axios.post('/api/users/login', values)
            .then(res => {
                console.log({res: res})
                Cookies.set('token', res.data.data.data.access_token)  
                toast.success('Logged in!')
                router.push('pricing')
            })
            .catch(err => {
                toast.error('error Logging in user')
            })
        },
      });


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
                            <h2 className="text-[#F53300] font-light md:font-medium mb-[27px] text-2xl text-center md:text-start">Login</h2>
                                <div className="w-full md:max-w-[362px] flex flex-col ">
                                    <Input type="email" label="Email" name="email" onChange={formik.handleChange} value={formik.values.email}  error={formik.touched.email && formik.errors.email} />
                                    <Input 
                                        type="password" 
                                        label="Password" 
                                        name="password" 
                                        onChange={formik.handleChange} 
                                        value={formik.values.password} 
                                        error={formik.touched.password && formik.errors.password}
                                    />


                                    <Button type="submit" color="secondary" style="px-[90px] py-[10px] rounded-[40px] text-[16px]">
                                        Login
                                    </Button>

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