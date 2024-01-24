"use client"
import axios from "axios"
import { useRouter } from "next/navigation";
import { useState } from "react";



const Login = () => {
  const router = useRouter();
  const [ error, setError ] = useState('');

  const [ input, setInput ] = useState({
    username: '',
    password: ''
  });


  const BASE_URL = "http://localhost:8000/auth/logIn";

  const submitHandler = async (e: any) => {
    e.preventDefault()
    try {
        const { data } = await axios.post(BASE_URL, {
            ...input,
        })
        localStorage.setItem('user', JSON.stringify(data.user));

        router.push("/dashboard")
    } catch (error) {
        setError(error.response.data.msg)
    }
  }
  return (
    <div>
        <h1>Login</h1>
        <form className="flex flex-col">
            <label htmlFor="">
                Username
                <input type="text" placeholder="Enter your Username" className="border ml-2" onChange={(e) => setInput((prev) => ({ ...prev, username: e.target.value}))}/>
            </label>
            <label htmlFor="">
                Password
                <input type="text" placeholder="Enter your Password" className="border ml-2" onChange={(e) => setInput((prev) => ({ ...prev, password: e.target.value}))}/>
            </label>
            <button className="w-fit bg-gray-800 text-white p-2" onClick={submitHandler}>Login</button>
        </form>
    </div>
  )
}

export default Login