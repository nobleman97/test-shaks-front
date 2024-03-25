import { NextResponse } from "next/server";
import { Resend } from "resend";
import ThankYouEmail from "@/app/components/email-templates/contact-us";

// const FormData = require('form-data');
const { google } = require('googleapis');

// const mailgun = new Mailgun(FormData);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST( req: Request) {

    const body = await req.json();
    console.log({body})

    const sheetData = convertObjectToArray(body) // data that needs to be added to the sheetlater

    try {

      const data = await resend.emails.send({
        from: 'Shakazu <onboarding@resend.dev>',
        to: [body.email],
        subject: 'Thank You for Contacting Us',
        text: '',
        react: ThankYouEmail({   
          customerName: body.firstname,  
          yourName: "Ola", 
          yourPosition: "C.E.O" 
        }),
      });
  

    //

      if (!data) {
        return NextResponse.json({error: "couldn't send the email"}, {status: 500});
      }

      appendDataToSheet(sheetData).then(res => console.log('added successfully')).catch(error => console.log({err: error.message}))

      return NextResponse.json({ message: "Email sent successfully", data: data }, {status: 200});

    } catch (error: any) {
      return NextResponse.json({error: error.message}, {status: error.status});
    }
  



  
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




