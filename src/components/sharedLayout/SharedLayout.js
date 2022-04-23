import React from "react"
import { Outlet } from "react-router-dom"
import tw from "tailwind-styled-components"
import Navbar from "../navbar/Navbar"
import Sidebar from "../sidebar/Sidebar"

const SharedLayout = () => {
  // toggle sidebar
  const [hideSidebar, setHideSidebar] = React.useState(true)

  return (
    <>
      <Navbar setHideSidebar={setHideSidebar} hideSidebar={hideSidebar} />
      {!hideSidebar && (
        <BlurBackground onClick={() => setHideSidebar(!hideSidebar)} />
      )}
      <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />

      <Outlet />
    </>
  )
}

export default SharedLayout

//Style
const BlurBackground = tw.div`
backdrop-blur height-custom absolute top-52px left-0 w-full 

`
