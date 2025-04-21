"use client"

import axios from "axios";
import { useState } from "react";

export default function Signin() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return (
        <div className='h-screen w-screen flex items-center flex-col  justify-center'>

            <input
                className='border border-white p-2 m-2'
                type='text'
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                placeholder='Email'
            ></input>
            <input
                className='border border-white p-2 m-2'
                type='text'
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                placeholder='Password'
            ></input>
            <button onClick={()=>{
                axios.post("http://localhost:3000/api/v1/user/signin",{
                    email,
                    password
                })
            }} className="rounded-md border border-white bg-blue-500 mt-2 w-40 h-10">
                Signin
            </button>
        </div>
    );
}
