import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST( req: NextRequest) {
    try {

        const body = await req.json();
        console.log({body});
        
        const url = `${process.env.BACKEND_URL}/users`
        const user: any = await axios.post(url, body);
        const data = user.data


        return NextResponse.json({ message: "User created successfully", data }, {status: 200});

    } catch (error: any) {
      console.log(error.message)
      return NextResponse.json({error: error.message}, {status: error.status});
    }
  
  
}