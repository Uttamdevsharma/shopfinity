import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../pages/RootLayout'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import CartItem from '../components/CartItem'
import SignupForm from '../pages/SignupForm'
import Login from '../pages/Login'

export const rootRouter =  createBrowserRouter ([
    {
        path: "/", element: <RootLayout/>,
        children: [
            {path: "/",index: true, element: <Shop/>},
            {path: "/cart", element: <Cart />},
            {path: "/sign-up" , element: <SignupForm/>},
            {path: "/login" , element: <Login/>},

        ],
        
    },


]);