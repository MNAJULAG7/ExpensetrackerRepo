import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';


function AddingForm({closeForm}) {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
    const res = await fetch("http://localhost:8080/api/expenses/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (res.ok) {
        {console.log("successfully added");
          navigate("/");
        }

    } else {
        console.log("failed to add");
    }
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col items-center justify-center bg-linear-to-bl from-blue-800 to-black h-screen w-screen'>
     
            <div className='h-/12 flex flex-col items-center justify-center border-3 border-black bg-blue-100 shadow-md shadow-amber-200'>
                <div className="p-2 text-left pl-5 text-2xl font-semibold " ><input type="text" placeholder='title' {...register("title")} className="border-b-2 focus:outline-none"  /></div>
                <div className='p-2 text-left pl-5 text-2xl font-semibold'><input type="number" placeholder='amount' {...register("amount")} className="border-b-2 focus:outline-none"/></div>
                <div className='p-2 text-left pl-5 text-2xl font-semibold '><input type="text" placeholder='title' {...register("category")} className="border-b-2 focus:outline-none"/></div>
                <div className='p-2 text-left pl-5 text-2xl font-semibold '><input type="date" {...register("date")} className="border-b-2 focus:outline-none"/></div>
                
                    <button type='submit' className='w-50 border-2 bg-yellow-300 border-amber-700 px-5 py-2 text-2xl rounded-3xl hover:bg-yellow-500 cursor-pointer transition duration-300'>Save</button> 
                
            </div>
            </div>
        
    </form>
  )
}

export default AddingForm