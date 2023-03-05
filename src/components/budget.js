import React from 'react'
import { useContext } from 'react'
import { mainContext } from '../contexts'
const Budget = () => {
  const {budget} = useContext(mainContext);
  return (
    <div className='styled-box' style={{backgroundColor: "grey"}}>
        Budget : {budget}
    </div>
  )
}

export default Budget