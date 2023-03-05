import React from 'react'
import { useContext } from 'react'
import { mainContext } from '../contexts'
const SpentsoFar = () => {
  const {expenses} = useContext(mainContext);
  const spentCost = expenses.reduce((acc,curval)=> {
       return acc+curval.cost;
  },0)
  return (
    <div className='styled-box'style={{backgroundColor: "lightblue"}}>
        Spent So Far : {spentCost}
    </div>
  )
}

export default SpentsoFar