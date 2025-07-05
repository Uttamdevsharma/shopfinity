import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import Shop from '../pages/Shop'

export const rootRouter =  createBrowserRouter ([
    {
        path: "/", element: <RootLayout/>,
        children: [{path: "/",index: true, element: <Shop/>}],
    },


]);