import React from "react"
import tw from "tailwind-styled-components"
import { BiMenuAltLeft } from "react-icons/bi"

const Navbar = ({ hideSidebar, setHideSidebar }) => {
  return (
    <Container>
      <MenuBtn type="button" onClick={() => setHideSidebar(!hideSidebar)}>
        <BiMenuAltLeft />
      </MenuBtn>
      <AppName>
        <Accent>GXL</Accent>TimeTracker
      </AppName>
    </Container>
  )
}

export default Navbar

const Container = tw.header`
bg-white flex justify-between h-max items-center
shadow-xl pr-2


`
const MenuBtn = tw.button`
text-4xl text-emerald-700 transition-all duration-200 hover:text-emerald-100 hover:bg-emerald-600 px-3 py-2
`
const AppName = tw.h4`
text-emerald-600
`

const Accent = tw.span`
text-emerald-700 font-bold
`
