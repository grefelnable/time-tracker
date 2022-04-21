import React from "react"
import { NavLink } from "react-router-dom"
import tw from "tailwind-styled-components"
import { MdOutlineDashboard, MdOutlineStickyNote2 } from "react-icons/md"

const Sidebar = () => {
  return (
    <Section className="height">
      {/* Links */}
      <NavLink to="/">
        <Button type="button">
          <Icon>
            <MdOutlineDashboard />
          </Icon>
          dashboard
        </Button>
      </NavLink>
      <NavLink to="/notes">
        <Button type="button">
          <Icon>
            <MdOutlineStickyNote2 />
          </Icon>
          notes
        </Button>
      </NavLink>
    </Section>
  )
}

export default Sidebar

// Styles
const Section = tw.aside`
bg-slate-600  absolute top-52px left-0 w-2/5 flex flex-col text-white
pt-4 px-2 gap-3
`
const Button = tw.button`
flex items-center gap-3 capitalize transition-all duration-200 hover:bg-emerald-400 w-full px-2 py-2 rounded-lg
`
const Icon = tw.span`
text-3xl  
`
