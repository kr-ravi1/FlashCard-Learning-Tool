import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

function AdminPage() {
  return (
    <>
        <NavBar btn={"Home"} to={"/"}/>
        <Outlet/>
    </>
  )
}

export default AdminPage