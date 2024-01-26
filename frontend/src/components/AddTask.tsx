"use client"
import { useState } from "react"

const AddTask = () => {
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    return (
        <div className="h-96 w-[270px] bg-white p-2">
            {/* <div className="h-screen w-screen"></div> */}
            <div className="flex flex-col gap-5 z-10">
                <input type="text" className="border p-2 rounded-md" placeholder="Title"/>
                <input type="text" className="border p-2 rounded-md" placeholder="Description"/>
                <select name="" id="" className="border p-2 rounded-md">
                    <option value="">High</option>
                    <option value="">Medium</option>
                    <option value="">Low</option>
                </select>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default AddTask