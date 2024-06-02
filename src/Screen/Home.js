import React from 'react'
import Background from '../Components/Background'
import Counter from '../Components/Counter'
import TextEditor from '../Components/TextEditor'
import ProfileTrends from '../Components/ProfileTrends'

const Home = () => {

  // // console.log('createdAt', createdAt.toLocaleString());
  // // console.log('expireAt', expireAt.toLocaleString());
  // // console.log(`Welcome back. You have been here
  // //             ${sessions.length} times before.`);
  // // console.log(`This session has been active
  // //             since ${session.lastActiveAt.toLocaleString()}`);
  // //             console.log(session);
  // const [profileTrends, setProfileTrends] = useState([]);

  return (
    <div id='home' className='h-full w-full p-4'>
      <Background/>
      <div className='flex flex-col md:flex-row h-1/3 gap-4 justify-between'>
        <Counter/>
        <TextEditor/>
      </div>

      <h3 className='trends-heading my-8 text-2xl font-bold'>Click Profile Trend Cards:</h3>

      <ProfileTrends/>

    </div>
  )
}

export default Home
