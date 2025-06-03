import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <>
    <Navbar />
    <Sidebar />
    <Outlet />
    </>
  )
}

export default DashboardLayout