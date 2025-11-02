import { Features } from "./components/Features"
import Footer from "./components/Footer"
import { Hero } from "./components/Hero"
import { NavBar } from "./components/NavBar"
import { Pricing } from "./components/Pricing"
import { Testimonials } from "./components/Testimonials"


function App() {
 

  return (
    <div className="min-h-screen text-white bg-slate-950 overflow-hidden">
      <NavBar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div >
  )
}

export default App
