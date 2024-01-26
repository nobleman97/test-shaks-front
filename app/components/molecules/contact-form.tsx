import Input from "../atoms/input";
import countries from "../../lib/countries.json"
import Button from "../atoms/button/button";
import { useFormik } from 'formik';
import axios from "axios";
import { useRouter } from "next/navigation";

interface FormValues {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    companyname: string;
    industry: string;
    annualrevenue: string;
    country: string;
    message: string;
    subscribe: boolean;
  }


export default function ContactForm(){
    const router = useRouter()
    const formik = useFormik<FormValues>({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            companyname: '',
            industry: '',
            annualrevenue: '',
            country: '', 
            message: '',
            subscribe: false,
          },
        onSubmit: (values) => {
          console.log(values);
          // Handle form submission, such as sending data to an API

            axios.post('/api/hello',values,{ headers: {
                'Content-Type': 'application/json',
            }}).then(res => {
              router.push('thank-you')
                console.log({res})
            }).catch((error) => {
              console.log({error})
            });
        },
      });

    return (<>
    
     <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center md:justify-start flex-wrap gap-x-[28px]">
   
      <Input type="text" label="First name" name="firstname" onChange={formik.handleChange} value={formik.values.firstname} />
      <Input type="text" label="Last name" name="lastname" onChange={formik.handleChange} value={formik.values.lastname} />
      <Input type="text" label="Email" name="email" onChange={formik.handleChange} value={formik.values.email} />
      <Input type="text" label="Phone" name="phone" onChange={formik.handleChange} value={formik.values.phone} />
      <Input type="text" label="Company name" name="companyname" onChange={formik.handleChange} value={formik.values.companyname} />
      <Input type="text" label="Industry" name="industry" onChange={formik.handleChange} value={formik.values.industry} />
      <Input type="number" label="Annual Revenue ($)" name="annualrevenue" onChange={formik.handleChange} value={formik.values.annualrevenue} />
      <Input
        componentType="select"
        name="country"
        label="Country"
        options={countries}
        onChange={formik.handleChange}
        value={formik.values.country}
      />
      <Input componentType="textarea" name="message" label="Your Message" onChange={formik.handleChange} value={formik.values.message} />

      {/* <label htmlFor="subscribe" className="inline-flex items-center mt-3 w-full">
        <Input
          componentType="checkbox"
          name="subscribe"
          label="Subscribe to Newsletter"
          checked={formik.values.subscribe}
          onChange={formik.handleChange}
          style="form-checkbox h-5 w-5 text-blue-600"
        />
      </label> */}

      <Button type="submit" color="secondary" style="rounded-[40px] px-[70px] py-[10px]">
        Submit
      </Button>
            
        </div>
    </form>
       
    </>)
}