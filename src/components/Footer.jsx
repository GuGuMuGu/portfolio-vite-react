 import { Mail, Github, Linkedin, Instagram, Phone, Heart } from "lucide-react"

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/adarsh-sharma-5a8a042a7",
      label: "LinkedIn",
      color: "hover:bg-blue-600",
    },
    {
      icon: Github,
      href: "https://github.com/GuGuMuGu",
      label: "GitHub",
      color: "hover:bg-gray-700",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/_gugumugu",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Mail,
      href: "mailto:adarshsharma.tech@gmail.com",
      label: "Email",
      color: "hover:bg-red-600",
    },
    {
      icon: Phone,
      href: "tel:+916203519158",
      label: "Phone",
      color: "hover:bg-green-600",
    },
  ]

  return (
    <footer className="bg-black/90 backdrop-blur-md py-8 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* New Flex Layout: Left = Social, Right = Text */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  title={social.label}
                  className={`p-3 bg-white/10 rounded-full ${social.color} hover:scale-110 transition-all duration-300 group border border-white/20`}
                >
                  <Icon size={18} className="group-hover:text-white" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 flex items-center gap-1">
            © 2025 Made with <Heart size={14} className="text-red-500" /> by Adarsh Sharma
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
