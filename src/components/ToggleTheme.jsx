"use client"

import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

const ToggleTheme = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle("dark", newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300 drop-shadow-lg"
    >
      {isDark ? <Sun size={14} className="text-yellow-400" /> : <Moon size={14} className="text-blue-300" />}
    </button>
  )
}

export default ToggleTheme
