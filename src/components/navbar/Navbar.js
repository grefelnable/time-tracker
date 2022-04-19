import tw from "tailwind-styled-components"
import React from "react"
import { BiMenuAltLeft } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { BsPlayCircleFill } from "react-icons/bs"

const Navbar = () => {
  return (
    <Container>
      <MenuBtn type="button">
        <BiMenuAltLeft />
      </MenuBtn>
      <Activity>
        <Text>Learn Coding</Text>
        <ActivityBtn type="button">
          <IoIosArrowDown />
        </ActivityBtn>
        <ToggleBtn type="button">
          <BsPlayCircleFill />
        </ToggleBtn>
      </Activity>
    </Container>
  )
}

export default Navbar

const Container = tw.header`
bg-white
`
const MenuBtn = tw.button`
text-4xl text-emerald-900 transition-all duration-200 hover:text-emerald-100 hover:bg-emerald-600 px-3 py-2
`

const Activity = tw.div`
flex gap-2 items-center
`

const Text = tw.p`

 `

const ActivityBtn = tw.button`

`
const ToggleBtn = tw.button`
text-3xl
`
