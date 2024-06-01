import React from 'react'
import Background from '../Components/Background'
import Counter from '../Components/Counter'
import TextEditor from '../Components/TextEditor'

const Home = () => {
  return (
    <div className='relative h-full w-full'>
      <Background/>
      <Counter/>
      <TextEditor/>
    </div>
  )
}

export default Home
