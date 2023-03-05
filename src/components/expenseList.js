import React from 'react'
import { mainContext } from '../contexts'
import { useContext } from 'react'
const ExpenseList = () => {
  const {expenses,dispatch} = useContext(mainContext)
  console.log(expenses);
  const deleteItem = (idx) =>{
       dispatch({type: "DELETE_ITEM",payload: idx});
  }
  return (
    <div className='expenselist-container'>
        {expenses.map((expense,idx) => {
          return(
            <div className='expense-card'>
              <h3>{expense.name}</h3>
              <div>
                <span>Rs. {expense.cost}</span>
                <button onClick={()=> deleteItem(idx)}>X</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ExpenseList