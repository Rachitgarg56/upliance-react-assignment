import React from 'react'
import Background from '../Components/Background'
import Counter from '../Components/Counter'
import TextEditor from '../Components/TextEditor'

const Home = () => {
  return (
    <div className='h-full w-full p-4'>
      <Background/>
      <div className='flex h-1/3 gap-4 justify-between'>
        <Counter/>
        <TextEditor/>
      </div>
    </div>
  )
}

export default Home
