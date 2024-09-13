import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const OnlyAdminPrivateRoute = () => {

    const {currentUser} = useSelector((state)=> state.user)
      // Log the user to check their role
    console.log('Current User:', currentUser);

    return currentUser && currentUser.isAdmin ===true ? (
        <Outlet />
      ) : (
        <Navigate to='/sign-in' />
      );
}

export default OnlyAdminPrivateRoute