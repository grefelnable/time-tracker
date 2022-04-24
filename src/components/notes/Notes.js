import React, { useState } from "react"
import tw from "tailwind-styled-components"
import { BsPlusLg } from "react-icons/bs"
import CreateNote from "./CreateNote"
const Notes = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [notesData, setNotesData] = useState([])

  //open modal for adding an activity
  if (isOpen) {
    return (
      <CreateNote setIsOpen={setIsOpen} noteData={(notesData, setNotesData)} />
    )
  }

  return (
    <Section>
      <Title>Notes</Title>
      <AddNoteBtn
        type="button"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Add Note
        <BsPlusLg />
      </AddNoteBtn>
    </Section>
  )
}

export default Notes

// Styles
const Section = tw.section`
bg-slate-700 height-custom pt-10
`
const Title = tw.h2`
bg-emerald-500 text-white text-xl tracking-wide px-14 py-2 w-fit mx-auto
mb-4 rounded-md
`
const AddNoteBtn = tw.button`
bg-white mx-auto flex items-center gap-4 py-2 px-4 shadow-2xl rounded-xl
transition-linear duration-200 hover:scale-110 active:scale-100
mb-6
`
