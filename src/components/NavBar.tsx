import {  MenuIcon, X } from "lucide-react"
import { useState } from "react"


export const NavBar = () => {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/20 backdrop-blur-sm transition-all duration-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div>
              <img src="/logo.png" alt="CodeFlow" className="h-6 w-6 sm:w-8 sm:h-8" />
            </div>
            <span className="font-medium text-sm md:text-xl lg:text-2xl">
              <span className="text-white">Code</span>
              <span className="text-blue-400">Flow</span>
            </span>
          </div>

        <div className="hidden md:flex items-center space-x-6 sm:space-x-8 ">
          <a href="#features" className="text-gray-300 hover:text-white text-sm md:text-xl">Features</a>
          <a href="#pricings" className="text-gray-300 hover:text-white text-sm md:text-xl">Pricings</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white text-sm md:text-xl">Testimonials</a>
        </div>

        <button 
        className="md:hidden text-gray-300 hover:text-white"
        onClick={()=> setMobileMenuIsOpen((prev)=> !prev)}
        >
          { mobileMenuIsOpen ? (<X className="w-5 h-5 sm:w-6 sm:h-6"/>) : 
           (<MenuIcon className="w-5 h-5 sm:w-6 sm:h-6"/>) }    
        </button>
        </div>
      </div>

      {mobileMenuIsOpen && 
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800">
          <div className="flex flex-col items-center justify-center gap-2 pt-3 pb-3">
          <a href="#features" className="text-gray-300 hover:text-white text-sm md:text-xl">Features</a>
          <a href="#pricings" className="text-gray-300 hover:text-white text-sm md:text-xl">Pricings</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white text-sm md:text-xl">Testimonials</a>
          </div>
        </div>
      }
    </nav>
  )
}

