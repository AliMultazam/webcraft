import Link from "next/link"
import { Palette, Zap, Rocket, User, Globe, Smartphone, ShoppingCart, Home as HomeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const teamMembers = [
    {
      name: "ALI MULTAZAM AKBAR",
      nim: "22.61.0235",
      whatsapp: "https://wa.me/6285394363406",
    },
    {
      name: "Aji Saputra",
      nim: "22.61.0236",
      whatsapp: "https://wa.me/6283861797131",
    },
  ];

  const products = [
    {
      id: 1,
      title: "TechStart SaaS Platform",
      description:
        "A modern SaaS platform for tech startups featuring dashboard analytics, user management, and payment integration.",
      category: "Web Design",
      icon: Globe,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      title: "FitTracker Mobile App",
      description: "Cross-platform fitness tracking app with workout plans, progress tracking, and social features.",
      category: "Mobile App",
      icon: Smartphone,
      technologies: ["React Native", "Firebase", "Redux"],
    },
    {
      id: 3,
      title: "Luxury Fashion Store",
      description: "High-end e-commerce platform with advanced filtering, wishlist, and personalized recommendations.",
      category: "E-commerce",
      icon: ShoppingCart,
      technologies: ["Shopify", "JavaScript", "SCSS"],
    },
    {
      id: 4,
      title: "Restaurant Booking System",
      description: "Modern restaurant website with online booking, menu showcase, and customer reviews system.",
      category: "Web Design",
      icon: HomeIcon,
      technologies: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white overflow-x-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-[90px] right-[90px] w-[300px] h-[300px] rounded-full bg-[#667eea]/10 blur-3xl"></div>
      <div className="absolute bottom-[90px] left-[90px] w-[300px] h-[300px] rounded-full bg-[#667eea]/10 blur-3xl"></div>

      {/* Navigation */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-[#667eea] text-xl font-bold">
            solusimu
          </Link>
          <div className="flex items-center gap-8">
            <Link href="#services" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <span className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-xs">
                ⚙️
              </span>
              Services
            </Link>
            <Link
              href="#portofolio"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <span className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-xs">
                🖼️
              </span>
              Portfolio
            </Link>
            <Link href="#about" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
              <span className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-xs">
                👤
              </span>
              About
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Content */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="text-white">Crafting </span>
              <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent">
                Digital Experiences{" "}
              </span>
              <span className="text-[#667eea]">That Convert</span>
            </h1>

            <p className="text-gray-300 text-lg max-w-xl">
              We design and develop stunning websites that not only look amazing but drive real business results. From
              concept to launch, we're your digital partners.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-md font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Get Started →
              </Link>
              <Link
                href="#portofolio"
                className="px-6 py-3 border border-gray-600 rounded-md font-medium flex items-center gap-2 hover:bg-white/5 transition-colors"
              >
                View Our Work ↗
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12 pt-8">
              <div className="text-center">
                <div className="text-[#667eea] text-3xl font-bold">500+</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-[#667eea] text-3xl font-bold">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-[#667eea] text-3xl font-bold">5 Years</div>
                <div className="text-gray-400 text-sm">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 group">
            <div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#1E293B]/80">
              <div className="w-12 h-12 bg-[#667eea]/20 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Palette className="w-6 h-6 text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-400 text-sm">Beautiful, intuitive interfaces that users love to interact with.</p>
            </div>

            <div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#1E293B]/80">
              <div className="w-12 h-12 bg-[#667eea]/20 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Zap className="w-6 h-6 text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
              <p className="text-gray-400 text-sm">Lightning-fast websites optimized for performance and SEO.</p>
            </div>

            <div className="md:col-span-2 bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#1E293B]/80">
              <div className="w-12 h-12 bg-[#667eea]/20 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                <Rocket className="w-6 h-6 text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Solutions</h3>
              <p className="text-gray-400 text-sm">
                Complete web solutions from frontend design to backend development, deployment, and ongoing maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <section id="portofolio" className="py-20 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Featured Products</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Check out some of our best work that has helped clients achieve their goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((project) => {
              const IconComponent = project.icon;
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
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>


        {/* Contact Person Section */}
        <section id="contact" className="py-20 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact <span className="text-[#667eea]">Our Team</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We are ready to help bring your digital ideas to life.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl">
                {teamMembers.map((member, index) => (
                <a
                    key={index}
                    href={member.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1E293B]/50 backdrop-blur-sm rounded-lg p-6 text-center border border-gray-800 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-[#1E293B]/80 block"
                >
                    <div className="mb-4">
                    <User className="w-16 h-16 text-[#667eea] mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-[#667eea]">{member.nim || member.role}</p>
                </a>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}