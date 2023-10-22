
import { NextResponse } from "next/server";

export default function middleware(request){
    console.log(request)
    let verify=request.cookies.get('token'); 
    console.log(verify)
    let url=request.url
    console.log("url"+url)


    if(!verify && (url.includes('/dashboard') || url === "http://localhost:3000/" ))
    {

        return NextResponse.redirect("http://localhost:3000/login")
    }
    if(verify && (url === "http://localhost:3000/login" || url === "http://localhost:3000/"  ))
    {
        return NextResponse.redirect("http://localhost:3000/dashboard")
    }
} 
