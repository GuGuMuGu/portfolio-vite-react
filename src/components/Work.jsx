"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Canva Portfolio Website",
      description: "Visually charming, scroll-free portfolio with dynamic design",
      category: "design",
      image: "/canva-portfolio.png",
      technologies: ["Canva Website Builder", "Canva Design Suite", "Web Design"],
      liveUrl: "https://gugumugu.my.canva.site/",
      githubUrl: null,
    },
    {
      id: 2,
      title: "StudySync – Smart Study Planner",
      description: "Sleek study planner web app built in just one day",
      category: "code",
      image: "/studysync.png",
      technologies: ["HTML", "CSS", "JavaScript", "Netlify"],
      liveUrl: "https://focusflick.netlify.app",
      githubUrl: "https://github.com/GuGuMuGu",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      category: "code",
      image: "/placeholder.svg?height=200&width=300&text=Task+App",
      technologies: ["React", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "https://github.com/GuGuMuGu",
    },
    {
      id: 4,
      title: "Mobile App UI Design",
      description: "Clean and intuitive mobile interface design",
      category: "design",
      image: "/placeholder.svg?height=200&width=300&text=Mobile+UI",
      technologies: ["Figma", "Prototyping", "UI/UX"],
      liveUrl: "#",
      githubUrl: null,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Responsive portfolio with modern animations",
      category: "code",
      image: "/placeholder.svg?height=200&width=300&text=Portfolio",
      technologies: ["React", "Framer Motion", "CSS3"],
      liveUrl: "#",
      githubUrl: "https://github.com/GuGuMuGu",
    },
    {
      id: 6,
      title: "Restaurant Branding",
      description: "Complete visual identity for premium restaurant",
      category: "design",
      image: "/placeholder.svg?height=200&width=300&text=Restaurant",
      technologies: ["Photoshop", "Branding", "Print"],
      liveUrl: "#",
      githubUrl: null,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filters = [
    { id: "all", label: "All", icon: "🎯" },
    { id: "code", label: "Code", icon: "💻" },
    { id: "design", label: "Design", icon: "🎨" },
  ]

  return (
    <section className="w-screen min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white px-10 pt-28 pb-20 sparkle-bg overflow-y-auto">
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">My Work</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          A showcase of projects blending design and development
        </p>

        {/* Filter Buttons */}
        <div className="flex gap-4 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-white/10 hover:bg-white/20 text-gray-300"
              }`}
            >
              <span>{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <ExternalLink size={14} />
                  View Live
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
