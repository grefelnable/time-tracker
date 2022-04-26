import React, { useState } from "react"
import tw from "tailwind-styled-components"
import SingleNote from "./SingleNote"
import { BsPlusCircle } from "react-icons/bs"

//firebase config
// const firebase = {
//   apiKey: "AIzaSyABp8PCrcgyBJ9n4EZE3IbWSusUDMaJoG4",
//   authDomain: "time-tracker-51d4e.firebaseapp.com",
//   projectId: "time-tracker-51d4e",
//   storageBucket: "time-tracker-51d4e.appspot.com",
//   messagingSenderId: "1081749694837",
//   appId: "1:1081749694837:web:0ad638975b6953aabfcb3c",
// }

const Notes = () => {
  const [showInput, setShowInput] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [titleValue, setTitleValue] = useState("")
  const [notesData, setNotesData] = useState([])

  const textAreaRef = React.useRef(null)

  // grow textarea with user text input
  const autoGrow = (elem) => {
    elem.current.style.height = "5px"
    elem.current.style.height = 10 + elem.current.scrollHeight + "px"
  }
  //
  const blurOut = () => {
    if (textValue !== "" || titleValue !== "") {
      setShowInput(false)
      let noteObj = {
        title: titleValue,
        text: textValue,
      }
      setTextValue("")
      setTitleValue("")
      setNotesData([...notesData, noteObj])
    }
  }

  return (
    <Section>
      <Title>Notes</Title>
      <NoteInput action="">
        {showInput ? (
          <InputTitle
            type="text"
            placeholder="Title"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
          />
        ) : (
          ""
        )}

        <TextArea
          name=""
          id=""
          cols="30"
          rows="1"
          value={textValue}
          onFocus={() => {
            setShowInput(true)

            textAreaRef.current.focus()
          }}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Take a note..."
          onInput={() => autoGrow(textAreaRef)}
          ref={textAreaRef}
        />
        <Button
          type="button"
          onClick={() => {
            blurOut()
          }}
        >
          <BsPlusCircle />
        </Button>
      </NoteInput>

      <NotesWrapper>
        {notesData.map((note, index) => (
          <SingleNote note={note} key={index} />
        ))}
      </NotesWrapper>
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
const NoteInput = tw.form`
border border-slate-400 w-11/12 mx-auto max-w-xl p-3 rounded-md
shadow-xl mb-10 relative
`
const InputTitle = tw.input`
inline-block w-full bg-slate-700 text-slate-300 placeholder:text-slate-300
`
const TextArea = tw.textarea`
block w-full bg-slate-700 resize-none text-slate-300 placeholder:text-slate-300
`
const NotesWrapper = tw.div`
w-11/12 mx-auto grid gap-2 md:grid-cols-2 lg:grid-cols-4
`
//button
const Button = tw.button`
text-slate-400 text-3xl absolute -bottom-4 left-2 bg-slate-700
rounded-full shadow-2xl transition-linear duration-200 hover:scale-105

`
