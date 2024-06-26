import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"

function App() {


  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={"About"} />
          <Route path="/projects" element={"Projects"} />
          <Route path="/contact" element={"Contact"} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
