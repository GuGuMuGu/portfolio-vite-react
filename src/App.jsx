"use client"

import { useState } from "react"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import About from "./components/About"
import Work from "./components/Work"
import Blog from "./components/Blog"
import Footer from "./components/Footer"

function App() {
  const [activeSection, setActiveSection] = useState("home")

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />
      case "work":
        return <Work />
      case "blog":
        return <Blog />
      default:
        return <HeroSection />
    }
  }

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="transition-all duration-500 ease-in-out">{renderSection()}</main>
      {activeSection !== "home" && <Footer />}
    </div>
  )
}

export default App
