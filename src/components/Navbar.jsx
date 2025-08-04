"use client"

import { Home, User, Briefcase, FileText } from "lucide-react"

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "blog", label: "Blog", icon: FileText },
  ]

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center bg-black/80 backdrop-blur-md rounded-full px-1 py-1 border border-white/10">
        {navItems.map((item, index) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full font-medium transition-all duration-300 text-xs ${
                activeSection === item.id
                  ? "bg-white/20 text-white shadow-lg"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Icon size={14} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
