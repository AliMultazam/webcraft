import Link from "next/link"
import { Palette, Zap, Rocket } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white overflow-hidden relative">
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
              Portofolio
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-[#667eea]/20 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-6 h-6 text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-400 text-sm">Beautiful, intuitive interfaces that users love to interact with.</p>
            </div>

            <div className="bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-[#667eea]/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
              <p className="text-gray-400 text-sm">Lightning-fast websites optimized for performance and SEO.</p>
            </div>

            <div className="md:col-span-2 bg-[#1E293B]/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
              <div className="w-12 h-12 bg-[#667eea]/20 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-[#667eea]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Full-Stack Solutions</h3>
              <p className="text-gray-400 text-sm">
                Complete web solutions from frontend design to backend development, deployment, and ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}