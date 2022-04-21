import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import tw from "tailwind-styled-components"
import SharedLayout from "./components/sharedLayout/SharedLayout"
import Dashboard from "./components/dashboard/Dashboard"
import Notes from "./components/notes/Notes"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* dashboard */}
          <Route index element={<Dashboard />} />
          {/* notes */}
          <Route path="/notes" element={<Notes />} />
          {/* profile */}
          {/* logout */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
