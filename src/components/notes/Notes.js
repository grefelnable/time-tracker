import React, { useState } from "react"
import tw from "tailwind-styled-components"
import SingleNote from "./SingleNote"
import { BsPlusCircle } from "react-icons/bs"
import { db } from "../../firebase"
import firebase from "firebase/compat/app"

const Notes = () => {
  const [showInput, setShowInput] = useState(false)
  const [textValue, setTextValue] = useState("")
  const [titleValue, setTitleValue] = useState("")
  const [notesData, setNotesData] = useState([])

  //fetch new notes as they get added/removed
  React.useEffect(() => {
    db.collection("notes")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setNotesData(
          snapshot.docs.map((doc) => ({ id: doc.id, note: doc.data() }))
        )
      })
  }, [])

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
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection("notes").add(noteObj)
      setTextValue("")
      setTitleValue("")
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
        {notesData.map((note) => (
          <SingleNote note={note.note} id={note.id} key={note.id} />
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
w-11/12 max-w-6xl mx-auto grid gap-2 md:grid-cols-2 lg:grid-cols-4
`
//button
const Button = tw.button`
text-slate-400 text-2xl absolute -bottom-4 left-2 bg-slate-700
rounded-full shadow-2xl transition-linear duration-200 hover:scale-105

`
