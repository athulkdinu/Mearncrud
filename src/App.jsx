import { Route, Routes } from "react-router-dom"
import Employee from "./pages/Employee"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Employee/>}></Route>
      </Routes>
     </>
  )
}

export default App
