import React, { useEffect, useState } from 'react'
import Background from '../Components/Background'
import Counter from '../Components/Counter'
import TextEditor from '../Components/TextEditor'
import { useSession, useSessionList } from '@clerk/clerk-react'
import FlipCard from '../Components/FlipCard/FlipCard'

const Home = () => {

  const { session } = useSession();
  const { sessions } = useSessionList();
  const { createdAt, expireAt } = session;

  // console.log('createdAt', createdAt.toLocaleString());
  // console.log('expireAt', expireAt.toLocaleString());
  // console.log(`Welcome back. You have been here
  //             ${sessions.length} times before.`);
  // console.log(`This session has been active
  //             since ${session.lastActiveAt.toLocaleString()}`);
  //             console.log(session);
  const [profileTrends, setProfileTrends] = useState([]);

  useEffect(() => {
    const arr = [
      { frontContent: 'Session created at', backContent: createdAt.toLocaleString() },
      { frontContent: 'Session will expire at', backContent: expireAt.toLocaleString() },
      { frontContent: 'No. of logins', backContent: sessions.length },
      { frontContent: 'Session has been active since', backContent: session.lastActiveAt.toLocaleString() },
    ]
    setProfileTrends(arr);
  })

  return (
    <div className='h-full w-full p-4'>
      <Background/>
      <div className='flex h-1/3 gap-4 justify-between'>
        <Counter/>
        <TextEditor/>
      </div>

      <h3 className='my-8'>Click profile Trend Cards:</h3>

      <div className='grid grid-cols-4'>
        {
          profileTrends.map(trend => {
            return <FlipCard frontContent={trend.frontContent} backContent={trend.backContent} /> 
          })
        }
      </div>

    </div>
  )
}

export default Home
