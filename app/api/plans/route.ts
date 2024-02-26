import axios from "axios";
import { NextResponse } from "next/server";

export async function GET( req: Request) {
    const url = `${process.env.BACKEND_URL}/plan`

    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
    };

    console.log({url});

    try {
      const response = await axios.get(url, {headers});
      const data = response.data;

      return NextResponse.json({ message: "plans fetched successfully", data: data }, {status: 200});

    } catch (error: any) {

      return NextResponse.json({error: error.message}, {status: error.status});
    }

  
}