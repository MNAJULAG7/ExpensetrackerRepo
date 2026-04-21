import React from 'react'
import Delete from '../Buttons/Delete.jsx'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { set } from 'react-hook-form';

function Expense({id, title, amount, category, date , onDelete}) {
  
  const expense = [id, title,amount,category,date];
  setExpenses((prev)=>[...prev,expense])
  return (
    // <div className='border-2 py-12 w-screen m-10 bg-white rounded-2xl shadow-md shadow-amber-200'>
      <tr key={id} className='border-2 h-25 border-black bg-white shadow-md shadow-amber-200 ' >
        <td className='p-2 text-left pl-5 w-60 text-2xl font-semibold '>{title}</td>
        <td className='p-2 text-left pl-5 text-2xl font-semibold '>{amount}</td>
        <td className='p-2 text-left pl-5 text-2xl font-semibold '>{category}</td>
        <td className='p-2 text-left pl-5 text-2xl font-semibold '>{date}</td>
        <td className='p-2' onClick={()=>{onDelete(id)}}><Delete/></td>
      </tr>
    // </div>
  )
}

export default Expense