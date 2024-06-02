import { useSession, useSessionList } from '@clerk/clerk-react';
import React, { useEffect, useState } from 'react'
import FlipCard from './FlipCard/FlipCard';

const ProfileTrends = () => {

    const { session } = useSession();
    const { sessions } = useSessionList();
    const { createdAt, expireAt } = session;

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
    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center'>
        {
            profileTrends.map(trend => {
            return <FlipCard frontContent={trend.frontContent} backContent={trend.backContent} /> 
            })
        }
        </div>
    )
}

export default ProfileTrends
