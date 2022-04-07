import React from 'react'
import { useDispatch } from 'react-redux';
import { Down } from '../../Store/actions';

const ButtonDecrement = () => {
    const dispatch = useDispatch()
    const handleClickDecrement = () => {
        dispatch(Down());
    }
  return (
    <div>
        <button onClick={handleClickDecrement}>---</button>
    </div>
  )
}

export default ButtonDecrement