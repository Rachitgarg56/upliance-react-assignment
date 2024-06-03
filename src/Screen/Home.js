import React, { useEffect } from 'react'
import Background from '../Components/Background'
import Counter from '../Components/Counter'
import TextEditor from '../Components/TextEditor'
import ProfileTrends from '../Components/ProfileTrends'
import { useUser } from '@clerk/clerk-react'

const Home = () => {

  const { user } = useUser();
  const userId = user.id; 

  useEffect(() => {
    const usersData = JSON.parse(localStorage.getItem('usersData'));
    console.log(usersData);
    if (usersData !== null) {
      const notFirstTimeUser = usersData.some(obj => obj.userID === userId);
      console.log(notFirstTimeUser);
      if (!notFirstTimeUser) {
        alert('Fill the user form, click on the menu icon in navbar');
      }
    } else {
      alert('Fill the user form, click on the menu icon in navbar');
    }
  },[])

  return (
    <div id='home' className='h-full w-full p-4'>
      <Background/>
      <div className='flex flex-col md:flex-row h-1/3 gap-4 justify-between'>
        <Counter/>
        <TextEditor/>
      </div>

      <h3 className="trends-heading my-8 text-2xl font-bold text-center text-indigo-600 shadow-sm">Hover Profile Trend Cards:</h3>

      <ProfileTrends/>

    </div>
  )
}

export default Home
