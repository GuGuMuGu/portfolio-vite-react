import { Github, Linkedin, Twitter, Mail, MapPin, Calendar } from "lucide-react"

const AboutSection = () => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "Figma",
    "Adobe Creative Suite",
    "UI/UX Design",
    "Branding",
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 sparkle-bg transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Designer + Coder passionate about creating digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Profile Section */}
            <div className="text-center md:text-left">
              <div className="w-48 h-48 mx-auto md:mx-0 mb-6 rounded-full overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Adarsh Sharma"
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Adarsh Sharma</h2>

              <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                Full Stack Developer & UI/UX Designer
              </p>

              <div className="flex items-center justify-center md:justify-start text-gray-600 dark:text-gray-300 mb-6">
                <MapPin size={16} className="mr-2" />
                <span>Mumbai, India</span>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4 mb-8">
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <Github size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <Linkedin size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <Twitter size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                >
                  <Mail size={20} className="text-gray-600 dark:text-gray-300" />
                </a>
              </div>

              <button className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg mx-auto md:mx-0">
                <Calendar size={16} />
                <span>Schedule a Call</span>
              </button>
            </div>

            {/* Bio and Skills */}
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Bio</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I'm a passionate full-stack developer and designer with over 5 years of experience creating digital
                  solutions that bridge the gap between beautiful design and functional code.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  My expertise spans modern web technologies, user experience design, and brand identity creation. I
                  believe in crafting experiences that are not only visually appealing but also intuitive and
                  accessible.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
