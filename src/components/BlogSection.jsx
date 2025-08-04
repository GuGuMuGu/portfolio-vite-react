import { Calendar, Clock, ArrowRight } from "lucide-react"

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Exploring the latest trends in web development including AI integration, serverless architecture, and the evolution of JavaScript frameworks.",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Development",
    },
    {
      id: 2,
      title: "Design Systems: Building Consistent User Experiences",
      excerpt:
        "How to create and maintain design systems that scale across products and teams, ensuring consistency and efficiency.",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
    },
    {
      id: 3,
      title: "From Figma to Code: Bridging the Designer-Developer Gap",
      excerpt:
        "Best practices for translating design mockups into clean, maintainable code while preserving the original design intent.",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Workflow",
    },
    {
      id: 4,
      title: "The Psychology of Color in Digital Design",
      excerpt:
        "Understanding how color choices impact user behavior and emotions in digital interfaces, with practical examples.",
      date: "2023-12-28",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
      category: "Design",
    },
  ]

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 sparkle-bg transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Thoughts on design, development, and the intersection of both
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{article.excerpt}</p>

                  <button className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors group">
                    <span>Read More</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection
