"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with React and Node.js",
      image: "/placeholder.svg?height=300&width=400",
      category: "code",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Brand Identity Design",
      description: "Complete brand identity for a tech startup",
      image: "/placeholder.svg?height=300&width=400",
      category: "design",
      technologies: ["Figma", "Illustrator", "Branding"],
      liveUrl: "#",
      githubUrl: null,
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/placeholder.svg?height=300&width=400",
      category: "code",
      technologies: ["React", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Mobile App UI Design",
      description: "Clean and intuitive mobile app interface design",
      image: "/placeholder.svg?height=300&width=400",
      category: "design",
      technologies: ["Figma", "Prototyping", "UI/UX"],
      liveUrl: "#",
      githubUrl: null,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern animations",
      image: "/placeholder.svg?height=300&width=400",
      category: "code",
      technologies: ["React", "Framer Motion", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Restaurant Branding",
      description: "Complete visual identity for a premium restaurant",
      image: "/placeholder.svg?height=300&width=400",
      category: "design",
      technologies: ["Photoshop", "Branding", "Print Design"],
      liveUrl: "#",
      githubUrl: null,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "code", label: "Code" },
    { id: "design", label: "Design" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 sparkle-bg transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">My Work</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              A collection of projects showcasing design and development skills
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      <span>View Live</span>
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors"
                      >
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkSection
