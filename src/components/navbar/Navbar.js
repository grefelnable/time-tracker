import React, { useState } from "react"
import tw from "tailwind-styled-components"
import { BiMenuAltLeft } from "react-icons/bi"
import { IoIosArrowDown } from "react-icons/io"
import { BsPlayCircleFill, BsFillStopCircleFill } from "react-icons/bs"

const Navbar = () => {
  const [start, setStart] = useState(true)
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
        <ToggleBtn type="button" onClick={() => setStart(!start)}>
          {start ? <BsPlayCircleFill /> : <BsFillStopCircleFill />}
        </ToggleBtn>
      </Activity>
    </Container>
  )
}

export default Navbar

const Container = tw.header`
bg-white flex justify-between
`
const MenuBtn = tw.button`
text-4xl text-emerald-700 transition-all duration-200 hover:text-emerald-100 hover:bg-emerald-600 px-3 py-2
`

const Activity = tw.div`
flex gap-2 items-center mr-2
`

const Text = tw.p`

 `

const ActivityBtn = tw.button`

`
const ToggleBtn = tw.button`
text-4xl text-emerald-700
`
