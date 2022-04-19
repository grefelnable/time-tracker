import tw from "tailwind-styled-components"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <Wrapper>
      <Navbar />
      {/* sidebar */}
      {/* profile */}
      {/* dashboard */}
      {/* notes */}
      {/* logout */}
    </Wrapper>
  )
}

export default App

const Wrapper = tw.div`
`
