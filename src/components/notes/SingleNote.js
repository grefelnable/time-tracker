import React from "react"
import tw from "tailwind-styled-components"

const SingleNote = ({ note }) => {
  return (
    <NoteContainer>
      <h4>{note.title}</h4>
      <p>{note.text}</p>
    </NoteContainer>
  )
}

export default SingleNote

//Styles
const NoteContainer = tw.article`
p-2 border border-slate-400 rounded-md shadow-xl 
min-w-fit text-left w-full text-slate-100
`
