import React, { useState } from "react"
import tw from "tailwind-styled-components"
import { db } from "../../firebase"
import { FaRegTrashAlt } from "react-icons/fa"
import ModalNote from "./ModalNote"

const SingleNote = ({ note, id }) => {
  const [mouseHover, setMouseHover] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  //open modal view of single note
  if (isModalOpen) {
    return <ModalNote setIsModalOpen={setIsModalOpen} note={note} id={id} />
  }
  return (
    <NoteContainer
      onMouseOver={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      onClick={() => setIsModalOpen(!isModalOpen)}
    >
      <h4>{note.title}</h4>
      <p>{note.text}</p>
      {mouseHover ? (
        <Button
          type="button"
          onClick={() => {
            db.collection("notes").doc(id).delete()
          }}
        >
          <FaRegTrashAlt />
        </Button>
      ) : (
        ""
      )}
    </NoteContainer>
  )
}

export default SingleNote

//Styles
const NoteContainer = tw.article`
p-2 border border-slate-400 rounded-md shadow-xl 
min-w-fit text-left w-full text-slate-100
relative 
`
const Button = tw.button`
absolute bottom-2 right-2 ease-in-out duration-200 hover:text-red-500
`
