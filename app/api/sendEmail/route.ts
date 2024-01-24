// pages/api/sendEmail.ts
import { NextResponse } from "next/server"
import mailgun from 'mailgun-js';

type Data = {
  message: string;
  error?: string;
  body?: mailgun.messages.SendResponse;
};

export default async function POST(request: Request, response: Response) {

  const reqData: any = await request.json()
  console.log({reqData})

    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      return NextResponse.json({ error: 'Mailgun credentials are not properly set' }, { status: 500 })     
    }

    // Initialize mailgun client with your Mailgun domain and API key
    const mg = mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN
    });

    const data = {
      from: 'TEST <hello@sandbox483562de96034e8c82f913f63b0e2b35.mailgun.org>',
      to: 'desmondezoojile@gmail.com', // The recipient's email address
      subject: 'New Lead to follow up',
      text: `new lead ${reqData}`
    };

    mg.messages().send(data, (error, body) => {
      if(error){
        return NextResponse.json({ error: 'Error in sending email' }, { status: 500 })   
      }
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })   
    })

}

