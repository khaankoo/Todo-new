"use client"
import axios from "axios"


const Login = () => {
  const BASE_URL = "http://localhost:8000/auth/logIn";

  const submitHandler = async (e: any) => {
    e.preventDefault()
    const result = await axios.post(BASE_URL, {
      username: 'Khangerel',
      password: '2345'
    })
    console.log(result);
    
  }
  return (
    <div>
      <h1>Login</h1>
      <form className="flex flex-col">
        <label htmlFor="">
          Username
          <input type="text" placeholder="Enter your Username" className="border ml-2"/>
        </label>
        <label htmlFor="">
          Password
          <input type="text" placeholder="Enter your Password" className="border ml-2"/>
        </label>
        <button className="w-fit bg-gray-800 text-white p-2" onClick={submitHandler}>Login</button>
      </form>
    </div>
  )
}

export default Login