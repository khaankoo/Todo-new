import React from 'react'
import SwitchTab from './SwitchTab'
import Todo from './Todo'

const Drawstack = () => {
  return (
    <div className='flex flex-col p-3 px-5 bg-gray-50 w-full gap-4'>
        <SwitchTab />
        <div className='flex'>
          <Todo />
        </div>
    </div>
  )
}

export default Drawstack