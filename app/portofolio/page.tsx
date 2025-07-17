"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Smartphone, ShoppingCart, Palette, Home } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "TechStart SaaS Platform",
    description:
      "A modern SaaS platform for tech startups featuring dashboard analytics, user management, and payment integration.",
    category: "Web Design",
    icon: Globe,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    buttons: [
      { label: "View Live", variant: "default" as const },
      { label: "Case Study", variant: "outline" as const },
    ],
  },
  {
    id: 2,
    title: "FitTracker Mobile App",
    description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
    category: "Mobile App",
    icon: Smartphone,
    technologies: ["React Native", "Firebase", "Redux", "Push Notifications"],
    buttons: [
      { label: "Download", variant: "default" as const },
      { label: "Details", variant: "outline" as const },
    ],
  },
  {
    id: 3,
    title: "Luxury Fashion Store",
    description: "High-end e-commerce platform with advanced filtering, wishlist, and personalized recommendations.",
    category: "E-commerce",
    icon: ShoppingCart,
    technologies: ["Shopify", "JavaScript", "SCSS", "API Integration"],
    buttons: [
      { label: "Visit Store", variant: "default" as const },
      { label: "Portfolio", variant: "outline" as const },
    ],
  },
  {
    id: 4,
    title: "Banking Dashboard",
    description: "Clean and intuitive banking dashboard design with data visualization and transaction management.",
    category: "UI/UX Design",
    icon: Palette,
    technologies: ["Figma", "Prototyping", "User Research", "Design System"],
    buttons: [
      { label: "View Design", variant: "default" as const },
      { label: "Process", variant: "outline" as const },
    ],
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description: "Modern restaurant website with online booking, menu showcase, and customer reviews system.",
    category: "Web Design",
    icon: Home,
    technologies: [],
    buttons: [
      { label: "View Live", variant: "default" as const },
      { label: "Case Study", variant: "outline" as const },
    ],
  },
]

const categories = ["All Projects", "Web Design", "Mobile Apps", "E-commerce", "UI/UX"]

export default function Component() {
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => {
          if (activeCategory === "Mobile Apps") return project.category === "Mobile App"
          if (activeCategory === "UI/UX") return project.category === "UI/UX Design"
          return project.category === activeCategory
        })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-white">WebCraft AI</div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="text-white font-medium">
                Portfolio
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Portfolio
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              data-variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg"
                  : "border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 bg-transparent"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon
            return (
              <Card
                key={project.id}
                className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-slate-700/50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-700/70 transition-colors">
                    <IconComponent className="w-8 h-8 text-slate-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <Badge
                    className="w-fit bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30"
                  >
                    {project.category}
                  </Badge>
                  <CardTitle className="text-white text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-400 leading-relaxed">{project.description}</CardDescription>

                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="text-xs border-slate-600 text-slate-300 bg-slate-800/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3 pt-2">
                    {project.buttons.map((button, index) => (
                      <Button
                        key={index}
                        data-variant={button.variant}
                        className={
                          button.variant === "default"
                            ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 transition-all"
                            : "border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 bg-transparent transition-all"
                        }
                      >
                        {button.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </main>
    </div>
  )
}