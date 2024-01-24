// pages/api/sendEmail.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import mailgun from 'mailgun-js';

type Data = {
  message: string;
  error?: string;
  body?: mailgun.messages.SendResponse;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  console.log({body:req.body})
  if (req.method === 'POST') {
    // Ensure the MAILGUN_API_KEY and MAILGUN_DOMAIN are set in your environment
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN) {
      res.status(500).json({ message: 'Mailgun credentials are not properly set' });
      return;
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
      text: `new lead ${JSON.stringify(req.body)}`
    };

    // Send the email
    mg.messages().send(data, (error, body) => {
      if (error) {
        res.status(500).json({ message: 'Error in sending email', error: error.message });
      } else {
        res.status(200).json({ message: 'Email sent successfully', body });
      }
    });
  } else {
    // Handle any other HTTP method
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
