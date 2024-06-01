import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Home from '../Screen/Home'
import Profile from '../Screen/Profile'

const route = createBrowserRouter([{
    path:'/',
    element: <Layout/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/profile',
            element:<Profile/>
        },
        
    ]
},{
    // path:'/meeting/:callId',
    // element:<NewMeeting/>
},
])

export default route
