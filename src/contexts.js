import { createContext } from "react";
import { useReducer } from "react";
const initialState = {
    budget : 5000,
    expenses : [
        {id: 1,name : "clothes",cost : 2000},
        {id: 2,name : "vegetables",cost : 200},
        {id: 3,name : "petrol allowance",cost : 600}
    ]
}

const budgetReducer = (state = initialState,action) => {
  switch(action.type){
    case "setBudget":
        return {};
    case "ADD_EXPENSE":
      // console.log(state.expenses[0])
      const list = [...state.expenses,{...action.payload,id : state.expenses.length+1}];
      // console.log(list)
      const newExpense = {...state,expenses : list}
      console.log(newExpense);
        return newExpense;
    case "DELETE_ITEM":
      const expenseList = [...state.expenses];
      const filteredList = expenseList.filter((item,idx) => item.id !== action.payload+1);
          const newExpenseList = {...state,expenses : filteredList}
       return newExpenseList;
    default:
       return state;
  }
}
 export const mainContext = createContext();

 export const AppProvider = (props) => {
    const[state,dispatch] = useReducer(budgetReducer,initialState);
    
    return(
      <mainContext.Provider value={{
        budget : state.budget,
        expenses : state.expenses,
        dispatch
      }}>
        {props.children}
      </mainContext.Provider>
    )
 }
