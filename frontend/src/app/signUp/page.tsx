'use client'
import Background from "@/images/Background";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sign = () => {
    const router = useRouter();
    const [ input, setInput ] = useState({
        username: '', 
        password: ''
    })

    const BASE_URL = "http://localhost:8000/auth/signUp";

  return (
    <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center items-center w-2/3 gap-36">
            <h1 className="text-green-800 text-8xl">Hello Dear</h1>
            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Your Username" className="border-b p-3 hover:border w-96" onChange={(e) => setInput((prev) => ({ ...prev, username: e.target.value}))}/>
                <input type="text" placeholder="Password" className="border-b p-3 hover:border w-96" onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value}))}/>
                <button>Sign Up</button>
            </form>
        </div>
        <div className="flex items-center h-screen w-1/3"><Background /></div>
    </div>
  )
}

export default Sign