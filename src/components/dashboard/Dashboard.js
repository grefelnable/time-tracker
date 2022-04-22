import React from "react"
import tw from "tailwind-styled-components"
import { BsPlusCircle } from "react-icons/bs"

const Dashboard = () => {
  return (
    <Section>
      <Heading>
        <Title>Projects</Title>
        <Button type="button">
          <BsPlusCircle />
        </Button>
      </Heading>
    </Section>
  )
}

export default Dashboard

// Styles
const Section = tw.section`
bg-slate-700 height-custom pt-10
`
const Heading = tw.div`
border-red-500 border-solid border-2
mx-auto flex justify-center
`
const Title = tw.h2`
bg-emerald-500 text-white text-xl tracking-wide
`
const Button = tw.button`
bg-white
`
