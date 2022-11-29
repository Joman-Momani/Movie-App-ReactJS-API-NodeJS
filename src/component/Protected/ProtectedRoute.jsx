import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({logindata}) {
  return (
<>

{logindata?<Outlet/>  :<Navigate  to="/Login"/> }
</>
  )
}

