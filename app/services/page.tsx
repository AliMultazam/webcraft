import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Settings, Zap, Rocket, Smartphone, ShoppingCart, Search, Palette, Code, Database } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Settings,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that users love to interact with. We focus on user experience and conversion optimization.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
    },
    {
      icon: Zap,
      title: "Fast Development",
      description:
        "Lightning-fast websites optimized for performance and SEO. Built with modern technologies and best practices.",
      features: ["React/Next.js", "Performance Optimization", "SEO Ready", "Mobile First"],
    },
    {
      icon: Rocket,
      title: "Full-Stack Solutions",
      description:
        "Complete web solutions from frontend design to backend development, deployment, and ongoing maintenance.",
      features: ["Frontend Development", "Backend APIs", "Database Design", "Cloud Deployment"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences on all devices.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Complete online store solutions with payment integration, inventory management, and analytics.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Analytics"],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive more organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
    },
    {
      icon: Palette,
      title: "Brand Identity",
      description:
        "Create a strong brand identity that resonates with your target audience and stands out from competitors.",
      features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"],
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your business needs and requirements.",
      features: ["Custom Applications", "API Development", "Third-party Integrations", "Maintenance"],
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Database design, data migration, and analytics solutions to help you make data-driven decisions.",
      features: ["Database Design", "Data Migration", "Analytics Setup", "Reporting"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
              From design to development, we've got you covered.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <CardTitle className="text-white">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-slate-800/30 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your digital goals. Contact us today for a
              free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Project →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
