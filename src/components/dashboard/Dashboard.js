import React from "react"
import tw from "tailwind-styled-components"
import { BsPlusLg } from "react-icons/bs"
import Activity from "./Activity"

const Dashboard = () => {
  return (
    <Section>
      <Wrapper>
        <Title>Activities</Title>
        <Button type="button">
          Add Activity
          <BsPlusLg />
        </Button>
        <Wrap>
          <Activity />
          <Activity />
          <Activity />
        </Wrap>
      </Wrapper>
    </Section>
  )
}

export default Dashboard

// Styles
const Section = tw.section`
bg-slate-700 height-custom pt-10
`
const Wrapper = tw.div`w-11/12 mx-auto`

const Title = tw.h2`
bg-emerald-500 text-white text-xl tracking-wide px-14 py-2 w-fit mx-auto
mb-4 rounded-md
`
const Button = tw.button`
bg-white mx-auto flex items-center gap-4 py-2 px-4 shadow-2xl rounded-xl
transition-linear duration-200 hover:scale-110 active:scale-100
mb-6
`
const Wrap = tw.div`

`
