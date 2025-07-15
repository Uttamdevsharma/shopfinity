import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

import React from 'react'

const PrivateAdminRoute = ({children}) => {
    const {userLoggedIn, role} = useAuth();
  return userLoggedIn && 
  role &&
  (role === "admin" || role === "super-admin") ? ( children
  ) : (
    <Navigate to="/"/>
  )

} 

export default PrivateAdminRoute