import React, { useState } from "react"
import tw from "tailwind-styled-components"
import {
  BsPlayCircleFill,
  BsFillStopCircleFill,
  BsBarChartFill,
} from "react-icons/bs"

const Activity = () => {
  const [startIcon, setStartIcon] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const [time, setTime] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hour, setHour] = useState(0)

  React.useEffect(() => {
    let interval = null
    //running seconds
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    //storing minutes in a variable; % is used to reset every 60seconds
    setSeconds(`0${time % 60}`.slice(-2)) //slice to make 2 digits
    setMinutes(`0${Math.floor(time / 60) % 60}`.slice(-2))
    setHour(`0${Math.floor(time / 3600)}`.slice(-2))

    return () => {
      clearInterval(interval)
    }
  }, [isActive, time])
  //handle onclick buttons
  const handleStart = () => {
    setIsActive(true)
  }
  const handleStop = () => {
    setIsActive(false)
    setTime(0)
  }
  // handling data on local storage
  const storeTime = (hour, minutes) => {
    hour = hour * 60

    let totalTime = hour + minutes
    console.log(totalTime)
    localStorage.setItem("timeData", JSON.stringify(totalTime))
  }
  const getTime = () => {
    let data = localStorage.getItem("timeData")
    data = JSON.parse(data)
    console.log(data)
  }
  return (
    <SingleActivity>
      <Header>
        <ActivityTitle>Activity</ActivityTitle>
        {isActive && `${hour}:${minutes}:${seconds}`}
        {startIcon && (
          <StartBtn
            type="button"
            onClick={() => {
              setStartIcon(!startIcon)
              handleStart()
              getTime()
            }}
          >
            <BsPlayCircleFill />
          </StartBtn>
        )}
        {!startIcon && (
          <StopBtn
            type="button"
            onClick={() => {
              setStartIcon(!startIcon)
              handleStop()
              storeTime(1, 20)
            }}
          >
            <BsFillStopCircleFill />
          </StopBtn>
        )}
      </Header>
      <ChartBtn type="button">
        <BsBarChartFill />
      </ChartBtn>
      <BorderLine></BorderLine>
      <ActivityLog>
        <ActivityName>Learn Coding</ActivityName>
        <Duration>35 min</Duration>
      </ActivityLog>
    </SingleActivity>
  )
}

export default Activity

//Styles
const SingleActivity = tw.article`
bg-violet-500 p-3 rounded-md
`
const Header = tw.div`relative
flex items-center justify-between pr-12
`
const ActivityTitle = tw.h4`
text-violet-200
`

const StartBtn = tw.button`
absolute right-0
text-3xl bg-violet-200 text-violet-700 p-0 rounded-full 
`
const StopBtn = tw(StartBtn)`
`

const ChartBtn = tw.button`
text-violet-900
`
const BorderLine = tw.div`
w-full bg-violet-400 h-px
`

const ActivityLog = tw.div`
text-violet-200 pt-2 flex justify-between
`
const ActivityName = tw.small`

`
const Duration = tw.small`

`
