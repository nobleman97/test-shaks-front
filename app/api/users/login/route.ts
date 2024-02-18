import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST( req: NextRequest) {
    try {

        const {email, password} = await req.json();
        console.log({email, password});
        
        const url = `${process.env.BACKEND_URL}/auth/login`
        const user: any = await axios.post(url, {username: email, password: password});

        const data = user.data


        return NextResponse.json({ message: "User Logged in successfully", data }, {status: 200});

    } catch (error: any) {

        if (error.response) {
          console.error({ status: error.response.status, data: error.response.data });
          return NextResponse.json({ message: error.response.data.message || "An error occurred during login." }, { status: error.response.status });
      } else if (error.request) {
          // The request was made but no response was received
          console.error(error.request);
          return NextResponse.json({ message: "No response received from the server." }, { status: 500 });
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error', error.message);
          return NextResponse.json({ message: "Error setting up the login request." }, { status: 500 });
      }
    }
  
  
}