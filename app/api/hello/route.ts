import { NextResponse } from "next/server";
import Mailgun, { Interfaces, MailgunClientOptions, MessagesSendResult } from 'mailgun.js';

const FormData = require('form-data');
const { google } = require('googleapis');

const mailgun = new Mailgun(FormData);


export async function POST( req: Request) {
    
    const sheetData = convertObjectToArray(await req.json()) // data that needs to be added to the sheetlater

    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
        return NextResponse.json({message: 'Mailgun credentials are not properly set' }, { status:500 } );
      }

    const mailgunClient: Interfaces.IMailgunClient = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY!
    });

    try {

    //send out emails to leads who fill the form 
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

      appendDataToSheet(sheetData).then(res => console.log('added successfully')).catch(error => console.log({err: error.message}))

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

function convertObjectToArray(obj: any) {
    return [
      obj.firstname,
      obj.lastname,
      obj.email,
      obj.phone,
      obj.companyname,
      obj.industry,
      obj.annualrevenue,
      obj.country,
      obj.message,
      obj.subscribe
    ];
  }


async function authenticateGoogleSheets() {
  const auth = new google.auth.GoogleAuth({
    keyFile: './app/lib/credentials.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });
  return sheets;
}

async function appendDataToSheet(data: any) {
  const sheets = await authenticateGoogleSheets();
  const spreadsheetId = process.env.SHEET_ID; // Replace with your spreadsheet ID

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A2', // Adjust range accordingly
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: [data], // data is an array of values to append
    },
  });
}




