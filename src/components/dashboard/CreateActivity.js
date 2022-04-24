import React, { useId } from "react"
import tw from "tailwind-styled-components"
import { RiCloseCircleFill } from "react-icons/ri"

const CreateActivity = ({ setIsOpen, setActivityNames, activityNames }) => {
  const [getName, setGetName] = React.useState("")
  //generate id for activity
  const activityId = useId()

  const handleCreate = () => {
    setActivityNames([...activityNames, { id: activityId, name: getName }])
  }
  return (
    <Wrapper>
      <Form>
        <CloseBtn onClick={() => setIsOpen(false)}>
          <RiCloseCircleFill />
        </CloseBtn>
        <InputName
          type="text"
          placeholder="Untitled Activity..."
          required
          onChange={(e) => setGetName(e.target.value)}
        />
        <CreatBtn
          type="button"
          onClick={() => {
            handleCreate()
            setIsOpen(false)
          }}
        >
          Create
        </CreatBtn>
      </Form>
    </Wrapper>
  )
}

export default CreateActivity

// Styles
const Wrapper = tw.div`
h-screen w-full absolute top-0 grid place-items-center
bg-slate-500 opacity-75
`
const CloseBtn = tw.button`
absolute -top-2 -right-2 text-3xl text-red-700
`
const Form = tw.form`
relative w-11/12 max-w-md h-64 flex flex-col justify-between pt-8
bg-white rounded-md
`
const InputName = tw.input`
w-80 mx-auto p-2 text-center text-2xl bg-slate-100 border-x-2 
border-emerald-600 text-slate-900
`
const CreatBtn = tw.button`
inline-block bg-emerald-600 text-emerald-50 tracking-wider w-full transition-all duration-200 hover:bg-emerald-500 p-1
rounded-br-md rounded-bl-md 
`
