import React from 'react';
import { incrementCount, decrementCount, resetCount } from '../redux/slices/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack } from '@mui/material';

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
    <div className=' bg-blue-100 relative flex flex-col w-[40%] h-auto items-center justify-center gap-4 p-6 gap'> 
        <h1 className='text-3xl'>Background Level: {count}%</h1>
        <Stack direction="row" spacing={2}>
          <Button onClick={handleIncreaseCount} variant="contained" color="secondary">Increase</Button>
          <Button onClick={handleDecreaseCount} variant="contained" color="success">Decrease</Button>
          <Button onClick={handleResetCount} variant="contained" color="error">Reset</Button>
      </Stack>
    </div>
  )
}

export default Counter
