import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import SignupThankYouEmail from "@/app/components/email-templates/signup-success";

export async function POST( req: NextRequest) {
    try {

        const body = await req.json();
        const resend = new Resend(process.env.RESEND_API_KEY);
        
        const url = `${process.env.BACKEND_URL}/users`
        const user: any = await axios.post(url, body);
        const data = user.data

        if(data){
          //send email
          const emailSent = await resend.emails.send({
            from: 'Shakazu <onboarding@resend.dev>',
            to: [body.email],
            text: "",
            subject: 'Thank You for Contacting Us',
            react: SignupThankYouEmail({   
              name: body.firstname,  
            }),
          });
        }


        return NextResponse.json({ message: "User created successfully", data }, {status: 200});

    } catch (error: any) {
      return NextResponse.json({error: error.response.data.message}, {status: error.status});
    }
  
  
}