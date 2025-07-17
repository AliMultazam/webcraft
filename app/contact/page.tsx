import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-xl text-gray-300">Get in touch with our team</p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
          {/* Contact Form */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">Send us a message</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <Input id="name" placeholder="Enter your name" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email address" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="How can we help you?" className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:ring-blue-500 min-h-[150px]" />
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-lg py-6">
              Send Message
            </Button>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-8">
             <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
             <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-400"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Address</h3>
                    <p className="text-gray-300">Jl. sleman, condongcatur, Yogyakarta 65148</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-400"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-gray-300">contact@solusimu.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-400"/>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-gray-300">+62 853 9436 3406</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}