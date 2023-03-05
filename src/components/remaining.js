import React from 'react'
import { useContext } from 'react'
import { mainContext } from '../contexts'
const Remaining = () => {
  const {expenses,budget} = useContext(mainContext);
  const spentCost = expenses.reduce((acc,curval)=> {
       return acc+curval.cost;
  },0)
  const remaining = budget-spentCost;
  return (
    <div className='styled-box' style={{backgroundColor: "lightgreen"}}>
        Remaining : {remaining}
    </div>
  )
}

export default Remaining