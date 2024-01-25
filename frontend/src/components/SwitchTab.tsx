import Users from '@/images/Users'
import React from 'react'

const SwitchTab = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-semibold text-slate-700'>Drawstack</div>
        <div><Users /></div>
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-4'>
          <button className='text-gray-500 hover:underline hover:text-slate-600'>Board</button>
          <button className='text-gray-500 hover:underline hover:text-slate-600'>List</button>
          <button className='text-gray-500 hover:underline hover:text-slate-600'>Timeline</button>
          <button className='text-gray-500 hover:underline hover:text-slate-600'>Calendar</button>
          <button className='text-gray-500 hover:underline hover:text-slate-600'>Forms</button>
        </div>
        <div className='flex gap-4'>
          <button className='text-gray-500 hover:underline hover:text-slate-600'>Filter</button>
          <button className='text-gray-500 hover:underline hover:text-slate-600'>Sort</button>
          <button className='text-gray-500 hover:underline hover:text-slate-600'>Group by: Status</button>
        </div>
      </div>
    </div>
  )
}

export default SwitchTab