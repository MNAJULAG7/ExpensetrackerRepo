import { useState } from "react";
import Expense from "../Home/Expense";
import AddingForm from "../things/AddingForm";


function ExpenseList({ data}) {
  const [expenses, setExpenses] = useState([]);


const deleteExpense = async (id) => {
  const res = await fetch(`http://localhost:8080/api/expenses/${id}`, {
    method: "DELETE"
  });

  if (res.ok) {
   { console.log("Deleted successfully");
     setExpenses(prev => prev.filter(exp => exp.id !== id));
   }
    
    
  } else {
    console.log("Delete failed");
  }
};
   
  return (
    
    <table className="w-full table-fixed border-separate border-spacing-y-3.5">
      <thead>
        <tr>
          <th className='p-2 text-left pl-5 w-60 text-2xl font-semibold text-white'>Title</th>
          <th className='p-2 text-left pl-5 text-2xl font-semibold text-white'>Amount</th>
          <th className='p-2  text-left pl-5 text-2xl font-semibold text-white'>Category</th>
          <th className='p-2 text-left pl-5 text-2xl font-semibold text-white'>Date</th>
          <th className='p-2  text-left pl-5 text-2xl font-semibold text-white'>Delete</th>
          
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <Expense key = {item.id} {...item}   onDelete={deleteExpense} />
        ))}
      </tbody>
      
    </table>

    
  );
}

export default ExpenseList;