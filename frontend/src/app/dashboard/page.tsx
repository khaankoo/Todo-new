"use client"
import Aside from "@/components/Aside"
import Drawstack from "@/components/Drawstack"
import { useState } from "react";
import AddTask from "@/components/AddTask";

const Dashboard = () => {
  const [ modal, setModal ] = useState(false);
  const pickUp = () => {
      setModal(!modal)
      console.log(modal);
      
  }
  return (
    <div className="flex max-w-screen-xl mx-auto">
        <Aside />
        <Drawstack />
        {modal && (<AddTask />)}
    </div>
  )
}

export default Dashboard