import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from './router/router.jsx'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import { AuthProvider } from './contexts/Auth.jsx'

createRoot(document.getElementById('root')).render(

  <Provider store = {store}>

    <AuthProvider>

       <RouterProvider router={rootRouter}/> 

    </AuthProvider>

   

  </Provider>
  
  
)
