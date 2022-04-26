import React from "react"
import { FaRegTrashAlt } from "react-icons/fa"
import tw from "tailwind-styled-components"
import { db } from "../../firebase"

const ModalNote = ({ note, id, setIsModalOpen }) => {
  return (
    <Wrapper onClick={() => setIsModalOpen(false)}>
      <Section>
        <h4>{note.title}</h4>
        <p>{note.text}</p>
        <ButtonGroup>
          <CloseBtn type="button" onClick={() => setIsModalOpen(false)}>
            Close
          </CloseBtn>
          <Button
            type="button"
            onClick={() => {
              db.collection("notes").doc(id).delete()
            }}
          >
            <FaRegTrashAlt />
          </Button>
        </ButtonGroup>
      </Section>
    </Wrapper>
  )
}

export default ModalNote
//Styles
const Wrapper = tw.div`
h-screen w-full absolute top-0 grid place-items-center
bg-slate-900 opacity-75 left-0 
`
const Section = tw.section`
 w-11/12 max-w-xl h-64 min-h-max bg-black opacity-100 p-2 border border-slate-400 rounded-md shadow-2xl text-slate-100
 relative
`
const ButtonGroup = tw.div`
absolute bottom-2 right-3 flex center bg-none
`
const Button = tw.button`
 ease-in-out duration-200 hover:text-red-500 bg-none
`
const CloseBtn = tw(Button)`
mr-2 
`
