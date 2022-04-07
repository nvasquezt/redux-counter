import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonReset = () => {
    const dispatch = useDispatch();
    const onHandleClick = () => {
        dispatch({ type: 'RESET' });
    }
  return (
    <div>
        <button onClick={onHandleClick}>Reset</button>
    </div>
  )
}

export default ButtonReset