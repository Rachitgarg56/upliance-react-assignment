import React from 'react';
import { incrementCount, decrementCount, resetCount } from '../redux/slices/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  
  const handleIncreaseCount = () => {
    dispatch(incrementCount(count + 1))
  }

  const handleDecreaseCount = () => {
    if (count === 0) return;
    dispatch(decrementCount(count - 1))
  }

  const handleResetCount = () => {
    dispatch(resetCount(0))
  }

  return (
    // <div style={{ position: 'relative', textAlign: 'center', paddingTop: '20%' }}>
    <div className='relative'> 
        <h1>Counter: {count}</h1>
        <button onClick={handleIncreaseCount}>Increment</button>
        <button onClick={handleDecreaseCount}>Decrement</button>
        <button onClick={handleResetCount}>Reset</button>
    </div>
  )
}

export default Counter
