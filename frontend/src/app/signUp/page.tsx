'use client'
import Background from "@/images/Background";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

const Sign = () => {
    const router = useRouter();
    const [ error, setError ] = useState("")
    const [ input, setInput ] = useState({
        username: '', 
        password: '',
        repassword: ''
    });

    const BASE_URL = "http://localhost:8000/auth/signUp";

    const submit = async (e: any) => {
        e.preventDafault()
        try {
            const user = await axios.post(BASE_URL, {...input})
            console.log(user);
            if ( input.password !== input.repassword) {
                alert("Password and Repassword are not match")
                // return;
            }
            router.push("/login")
        } catch (error) {
            setError("Invalid request")
            console.log(error, "error");
        }
    }

  return (
    <div className="flex w-full justify-between">
        <div className="flex flex-col justify-center items-center w-2/3 gap-36">
            <h1 className="text-green-800 text-8xl">Hello Dear</h1>
            <form className="flex flex-col gap-3">
                <input type="text" placeholder="Your Username" className="border-b p-3 hover:border w-96" onChange={(e) => setInput((prev) => ({ ...prev, username: e.target.value}))}/>
                <input type="text" placeholder="Password" className="border-b p-3 hover:border w-96" onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value}))}/>
                <input type="text" placeholder="Repassword" className="border-b p-3 hover:border w-96" onChange={(e) => setInput((prev) => ({ ...prev, repassword: e.target.value}))}/>
                <button className="flex justify-center w-36 text-white p-2 bg-green-800 rounded-md" onClick={submit}>Sign Up</button>
            </form>
        </div>
        <div className="flex items-center h-screen w-1/3"><Background /></div>
    </div>
  )
}

export default Sign