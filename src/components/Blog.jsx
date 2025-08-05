import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "From Ground Zero: How I Built a Community Waste Project With Zero Experience",
      summary:
        "A raw and personal journey of how I went from having zero skills to leading a real-world community waste management initiative, learning everything from scratch and turning an idea into action.",
      date: "2025-07-15",
      readTime: "8 min read",
      category: "Sustainability",
      image: "/Vmake1754400643797.png",
      featured: true,
    },
    {
      id: 2,
      title: "How I Built StudySync in a Day: From Idea to Web App",
      summary:
        "A fast-paced breakdown of how I ideated, designed, and developed StudySync — a smart study planner web app — in under 24 hours using pure frontend magic. Proof that simplicity, speed, and focus can build something meaningful.",
      date: "2025-07-30",
      readTime: "6 min read",
      category: "Development",
      image: "/studysync.png",
      featured: false,
    },
    {
      id: 3,
      title: "Designing My First Portfolio: More Than Just a Resume",
      summary:
        "Creating my personal portfolio site on Canva taught me more than just design—it taught me storytelling. In this post, I share how I shaped my identity online with zero design background and a ton of heart.",
      date: "2025-07-25",
      readTime: "5 min read",
      category: "Creativity",
      image: "/canva-portfolio.png",
      featured: false,
    },
    {
      id: 4,
      title: "Starting From Scratch: Why Being a Beginner Is My Superpower",
      summary:
        "We often fear being a beginner. But every project I've started—whether it was a hackathon, community work, or web app—began from not knowing. Here's why I've learned to love the chaos of starting from zero.",
      date: "2025-08-01",
      readTime: "7 min read",
      category: "Mindset",
      image: "/placeholder.svg?height=200&width=300&text=Mindset",
      featured: false,
    },
  ]

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getCategoryColor = (category) => {
    const colors = {
      Development: "bg-blue-500/20 text-blue-300",
      Creativity: "bg-purple-500/20 text-purple-300",
      Mindset: "bg-green-500/20 text-green-300",
      Sustainability: "bg-emerald-500/20 text-emerald-300",
    }
    return colors[category] || "bg-gray-500/20 text-gray-300"
  }

  return (
    <section className="w-screen min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white px-10 pt-28 pb-20 sparkle-bg overflow-y-auto">
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">My Blog</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Raw stories, real projects, and lessons learned from building things from scratch
        </p>

        {/* Featured Article */}
        {blogs
          .filter((blog) => blog.featured)
          .map((blog) => (
            <div key={blog.id} className="mb-12">
              <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md p-8 rounded-2xl hover:from-purple-900/70 hover:to-blue-900/70 transition-all duration-300 cursor-pointer group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
                        <Tag size={12} className="inline mr-1" />
                        {blog.category}
                      </span>
                      <span className="text-yellow-400 text-sm font-medium">✨ Featured</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                      {blog.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">{blog.summary}</p>

                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {formatDate(blog.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        {blog.readTime}
                      </div>
                    </div>

                    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group">
                      Read More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="relative">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {blogs
            .filter((blog) => !blog.featured)
            .map((blog) => (
              <div key={blog.id} className="blog-card group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(blog.category)}`}>
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(blog.date)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    {blog.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{blog.summary}</p>

                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors group">
                  Read more
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
