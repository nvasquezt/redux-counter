import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const onHandleChange = (evt) => {  
    const payload = parseInt(evt.target.value);
    dispatch({ type: 'SET_INTERVAL', payload},);
  }
  const countSelector = useSelector(state => state.counter);
  const intervalSelector = useSelector(state => state.setInter);
  return (
    <div>
        <h1>Count is in: {countSelector}</h1>
        <h1>Interval counter: {intervalSelector}</h1>
        <label htmlFor="inputCounter">Set interval: </label>
        <input type="number" id="inputCounter" onChange={onHandleChange} placeholder='add number...'/>
        
    </div>
  )
}

export default Counter; 

