import { Features } from "./components/Features"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"


function App() {
 

  return (
    <div className="min-h-screen text-white bg-slate-950 overflow-hidden">
      <NavBar/>
      <Hero/>
      <Features/>
    </div >
  )
}

export default App
