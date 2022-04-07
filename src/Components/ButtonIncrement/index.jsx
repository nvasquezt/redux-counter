import React from 'react'
import { useDispatch } from 'react-redux';
import { Up } from '../../Store/actions';

const ButtonIncrement = () => {
    const dispatch = useDispatch()
    const handleClickIncrement = () => {
        dispatch(Up())
    }
  return (
    <div>
        <button onClick={handleClickIncrement} >Go up!</button>
    </div>
  )
}

export default ButtonIncrement