import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest){
    const data = await req.json();

    const user = await prisma.user.create({
        data:{
            email:data.email,
            password: data.password
        }
    })
    console.log(user);
    return NextResponse.json({
        msg:"Signed up",
        username: user.email
    })
}