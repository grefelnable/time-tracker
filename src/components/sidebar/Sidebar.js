import React from "react"
import { Link } from "react-router-dom"
import tw from "tailwind-styled-components"

const Sidebar = () => {
  return (
    <Section>
      <Link to="/">
        <Button type="button">dashboard</Button>
      </Link>
      <Link to="/notes">
        <Button type="button">notes</Button>
      </Link>
    </Section>
  )
}

export default Sidebar

const Section = tw.aside`
bg-slate-600
`
const Button = tw.button`
inline-block
`
