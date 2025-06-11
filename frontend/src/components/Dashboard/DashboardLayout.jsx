import React from 'react'
import Navbar from './Navbar'
import AppSidebar from './AppSidebar'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../ui/sidebar'

function DashboardLayout() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className='w-full flex flex-col'>
          <Navbar />
          <Outlet />
        </div>
      </SidebarProvider>
    </>
  )
}

export default DashboardLayout