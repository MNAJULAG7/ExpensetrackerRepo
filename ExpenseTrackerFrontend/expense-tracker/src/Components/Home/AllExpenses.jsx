import React, { useEffect, useState } from 'react'
import ExpenseList from '../Home/ExpenseList'
import { useNavigate } from 'react-router-dom';
function AllExpenses() {
    const [datas,setDatas] = useState([]);
     const navigate = useNavigate();

    useEffect(()=>
        {
            const getRequest = async ()=>
            {
                const res = await fetch("http://localhost:8080/api/expenses/get");
                const modified = await res.json();
                setDatas(modified);
            }
            getRequest();
        },[])
  return (
    <div className='flex flex-col items-center bg-linear-to-bl from-blue-800 to-black h-screen w-screen'>
     {
            datas && <ExpenseList data = {datas} />
     
     }
       <button   onClick={() => navigate("/add")} className='w-50 border-2 bg-yellow-300 border-amber-700 px-5 py-2 text-2xl rounded-3xl hover:bg-yellow-500 cursor-pointer transition duration-300'>Add</button>
    </div>
  )
}

export default AllExpenses