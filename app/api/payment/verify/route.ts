import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET( req: NextRequest) {
try {
    const pageUrl = req.nextUrl;

    const query = pageUrl.searchParams;

    const session_id = query.get("session_id")
    console.log(
        {session_id}
    )
    const url = `${process.env.BACKEND_URL}/payment/verify?session_id=${session_id}`

    const response = await axios.get(url);

    const isSuccessful = response.data.data.status; 
    
    const redirectUrl = new URL('/pricing', req.url);

    redirectUrl.searchParams.set("status", isSuccessful == "success" ? "success" : "failed");

    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error({error});

    const redirectUrl = new URL('/pricing', req.url);

    redirectUrl.searchParams.set("status", "failed");

    return NextResponse.redirect(redirectUrl);
  }
}
