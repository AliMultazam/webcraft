import { Rocket, Target, Users, Lightbulb, Diamond } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
        <div className="text-xl font-bold text-white">
          solusimu <span className="text-[#667eea]">AI</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Home
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Services
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Portofolio
          </a>
          <a href="#" className="text-white font-medium">
            About
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 lg:px-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          About <span className="text-[#667eea]">WebCraft</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          We're a passionate team of designers and developers creating digital experiences that make a difference.
        </p>
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Our Story</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Founded in 2025, WebCraft AI began as a small team of passionate web enthusiasts with a simple mission:
                to help businesses succeed online through exceptional design and development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                What started as a side project has grown into a full-service digital agency that has helped over 500
                businesses transform their online presence. We combine creativity with technical expertise to deliver
                solutions that not only look great but drive real results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we're proud to work with clients ranging from startups to Fortune 500 companies, always
                maintaining our commitment to quality, innovation, and client success.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-slate-700">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">5+ Years of Excellence</h3>
                <p className="text-gray-400">Delivering innovative web solutions since 2019</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Meet Our <span className="text-[#667eea]">Team</span>
            </h2>
            <p className="text-gray-300">The creative minds behind your next digital success story.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700">
              <div className="w-20 h-20 bg-[#667eea] rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-1">Ali Multazam</h3>
              <p className="text-[#667eea] mb-3">Founder & CEO</p>
              <p className="text-gray-300 text-sm mb-4">
                Visionary leader with 10+ years in web development. Passionate about creating digital solutions that
                drive business growth.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Strategy</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Leadership</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Full-Stack</span>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700">
              <div className="w-20 h-20 bg-[#667eea] rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-1">Aji Saputra</h3>
              <p className="text-[#667eea] mb-3">Lead Designer</p>
              <p className="text-gray-300 text-sm mb-4">
                Creative powerhouse specializing in UI/UX design. Transforms complex ideas into beautiful, intuitive
                interfaces.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">UI/UX</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Figma</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Branding</span>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700">
              <div className="w-20 h-20 bg-[#667eea] rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-1">Mike Rodriguez</h3>
              <p className="text-[#667eea] mb-3">Senior Developer</p>
              <p className="text-gray-300 text-sm mb-4">
                Technical expert with expertise in modern web technologies. Builds scalable, high-performance
                applications.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Node.js</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">DevOps</span>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 text-center border border-slate-700 md:col-start-2 lg:col-start-1">
              <div className="w-20 h-20 bg-[#667eea] rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-1">Emma Wilson</h3>
              <p className="text-[#667eea] mb-3">Project Manager</p>
              <p className="text-gray-300 text-sm mb-4">
                Ensures every project runs smoothly from concept to delivery. Expert in agile methodologies and client
                communication.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Agile</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Communication</span>
                <span className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-xs">Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our <span className="text-[#667eea]">Values</span>
            </h2>
            <p className="text-gray-300">The principles that guide everything we do.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Excellence */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
              <p className="text-gray-300">
                We strive for perfection in every project, ensuring the highest quality standards and attention to
                detail in all our work.
              </p>
            </div>

            {/* Collaboration */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
              <p className="text-gray-300">
                We believe in working closely with our clients as partners, ensuring transparent communication and
                shared success.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
              <p className="text-gray-300">
                We stay ahead of trends and technologies, constantly learning and adapting to provide cutting-edge
                solutions.
              </p>
            </div>

            {/* Integrity */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <Diamond className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
              <p className="text-gray-300">
                Honesty and transparency are at the core of our business. We build trust through reliable delivery and
                open communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Work <span className="text-[#667eea]">Together?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Button className="bg-[#667eea] hover:bg-[#5a6fd8] text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Start Your Project →
          </Button>
        </div>
      </section>
    </div>
  )
}