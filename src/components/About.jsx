import { Download, Mail, Github, Linkedin, Instagram, Phone, MapPin, Globe } from "lucide-react"

const About = () => {
  const techSkills = [
    { name: "HTML5", icon: "🌐", color: "from-orange-500 to-red-500" },
    { name: "CSS3", icon: "🎨", color: "from-blue-500 to-cyan-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-500 to-orange-500" },
    { name: "IoT", icon: "🔗", color: "from-green-500 to-teal-500" },
    { name: "Python", icon: "🐍", color: "from-blue-600 to-yellow-500" },
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-600 to-lime-500" },
  ]

  const designSkills = [
    { name: "Canva", icon: "🎨", color: "from-purple-500 to-pink-500" },
    { name: "Figma", icon: "🎯", color: "from-purple-600 to-red-500" },
    { name: "Illustrator", icon: "✨", color: "from-orange-500 to-yellow-500" },
    { name: "UI/UX", icon: "📱", color: "from-blue-500 to-purple-500" },
  ]

  return (
    <section className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white px-10 pt-32 pb-20 sparkle-bg overflow-y-auto">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Profile Section */}
        <div className="text-center mb-16">
          <img
            src="/profile.jpg"
            alt="Adarsh Sharma"
            className="rounded-full w-44 h-44 mb-8 mx-auto shadow-2xl border-4 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 object-cover"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Adarsh Sharma
          </h1>
          <p className="text-purple-400 text-2xl mb-6 font-medium">Designer + Coder</p>
          <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto text-lg mb-8">
            I'm passionate about creating digital experiences that seamlessly blend beautiful design with functional
            code. Based in India, I work with clients globally to bring their visions to life through innovative web
            solutions and compelling visual designs.
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 text-lg"
          >
            <Download size={22} />
            Download Resume
          </a>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-red-400" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:adarshsharma.tech@gmail.com"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    adarshsharma.tech@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-green-400" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a href="tel:+916203519158" className="text-white hover:text-purple-400 transition-colors">
                    +91 6203519158
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-400" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Gautam Buddha Nagar, UP, India</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="text-purple-400" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Portfolio</p>
                  <a
                    href="https://gugumugu.my.canva.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    gugumugu.my.canva.site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Tech Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                💻 Development
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {techSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${skill.color} p-1 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20`}
                >
                  <div className="bg-black/80 backdrop-blur-sm p-4 rounded-xl h-full flex flex-col items-center justify-center text-center">
                    <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-white font-semibold text-sm group-hover:text-purple-200 transition-colors">
                      {skill.name}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Design Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                🎨 Design
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {designSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${skill.color} p-1 rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-pink-500/20`}
                >
                  <div className="bg-black/80 backdrop-blur-sm p-4 rounded-xl h-full flex flex-col items-center justify-center text-center">
                    <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <div className="text-white font-semibold text-sm group-hover:text-pink-200 transition-colors">
                      {skill.name}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center">About Me</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">My Journey</h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                Started as a curious designer who fell in love with code. Over the years, I've developed a unique
                perspective that bridges the gap between aesthetic appeal and technical functionality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe great digital products are born when design thinking meets development expertise.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">What I Do</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Web Application Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  UI/UX Design & Prototyping
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Brand Identity Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  IoT Solutions & Integration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:adarshsharma.tech@gmail.com"
              className="p-4 bg-gradient-to-br from-red-500 to-pink-500 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 group"
            >
              <Mail size={24} className="text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/GuGuMuGu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/30 transition-all duration-300 group"
            >
              <Github size={24} className="text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-sharma-5a8a042a7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group"
            >
              <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://instagram.com/_gugumugu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 group"
            >
              <Instagram size={24} className="text-white group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="tel:+916203519158"
              className="p-4 bg-gradient-to-br from-green-500 to-teal-600 rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 group"
            >
              <Phone size={24} className="text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
