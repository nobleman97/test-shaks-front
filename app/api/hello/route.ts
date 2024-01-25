import { NextResponse } from "next/server";
import Mailgun, { Interfaces, MailgunClientOptions, MessagesSendResult } from 'mailgun.js';
const FormData = require('form-data');
const mailgun = new Mailgun(FormData);

export async function POST( req: Request) {
    
    console.log('no gree')

    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
        return NextResponse.json({message: 'Mailgun credentials are not properly set' }, { status:500 } );
      }

    const mailgunClient: Interfaces.IMailgunClient = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY!
    });

    try {
     const email = await mailgunClient.messages.create(
        process.env.MAILGUN_DOMAIN,
        {
          from: `${process.env.MAILGUN_DEFAULT_EMAIL_NAME} <${process.env.MAILGUN_DEFAULT_EMAIL}>`,
          to: 'desmondezoojile@gmail.com',
          subject: "new hamshire",
          template: "testmail",
        //   'h:X-Mailgun-Variables': rest['h:X-Mailgun-Variables'],
        },
      );   

      if (!email) {
        return NextResponse.json({error: "couldn't send the email"}, {status: 500});
      }

      return NextResponse.json({ message: "Email sent successfully", data: email }, {status: 200});

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: error.status});
    }
  



    //   'h:X-Mailgun-Variables': JSON.stringify({
    //     firstname: dto.firstname,
    //     link: `${this.frontendUrl}/verify_email/${user._id}`,
    //   })

  
}


/// fill up a sheet doc
