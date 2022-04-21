import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  )
}

export default SharedLayout
