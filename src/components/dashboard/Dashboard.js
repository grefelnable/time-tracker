import React, { useState } from "react"
import tw from "tailwind-styled-components"
import { BsPlusLg } from "react-icons/bs"
import Activity from "./Activity"
import CreateActivity from "./CreateActivity"

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activityNames, setActivityNames] = useState([])
  console.log(activityNames)
  //open modal for adding an activity
  if (isOpen) {
    return (
      <CreateActivity
        setIsOpen={setIsOpen}
        setActivityName={setActivityNames}
        activityName={activityNames}
      />
    )
  }

  return (
    <Section>
      <Wrapper>
        <Title>Activities</Title>
        <Button
          type="button"
          onClick={() => {
            setIsOpen(true)
          }}
        >
          Add Activity
          <BsPlusLg />
        </Button>
        <Wrap>{activityNames}</Wrap>
      </Wrapper>
    </Section>
  )
}

export default Dashboard

// Styles
const Section = tw.section`
bg-slate-700 height-custom pt-10
`
const Wrapper = tw.div`w-11/12 mx-auto max-w-7xl `

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
grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
`
