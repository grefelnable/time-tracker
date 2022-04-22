import React from "react"
import tw from "tailwind-styled-components"
import {
  BsPlayCircleFill,
  BsFillStopCircleFill,
  BsBarChartFill,
} from "react-icons/bs"

const Activity = () => {
  const [start, setStart] = React.useState(true)
  return (
    <SingleActivity>
      <Header>
        <ActivityTitle>Learn Coding</ActivityTitle>
        <ToggleBtn type="button" onClick={() => setStart(!start)}>
          {start ? <BsPlayCircleFill /> : <BsFillStopCircleFill />}
        </ToggleBtn>
      </Header>
      <ChartBtn type="button">
        <BsBarChartFill />
      </ChartBtn>
    </SingleActivity>
  )
}

export default Activity

//Styles
const SingleActivity = tw.article`
bg-violet-500 mb-3 p-3 rounded-md
`
const Header = tw.div`
flex justify-between 
`
const ActivityTitle = tw.h4`
text-violet-200
`
const ToggleBtn = tw.button`
text-3xl bg-violet-200 text-violet-700 p-0 rounded-full 
`
const ChartBtn = tw.button`

`
