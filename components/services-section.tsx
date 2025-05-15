"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, Zap, Sun, Lightbulb, Building } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Server className="h-10 w-10 text-green-600 dark:text-green-400" />,
      title: "ICT Infrastructure",
      description:
        "Comprehensive ICT infrastructure solutions including network design, implementation, and maintenance for businesses and government agencies.",
      details: [
        "Network design and implementation",
        "Server infrastructure setup",
        "Data center solutions",
        "IT security systems",
        "Structured cabling",
      ],
    },
    {
      icon: <Zap className="h-10 w-10 text-green-600 dark:text-green-400" />,
      title: "Power Distribution & Substation Installations",
      description:
        "Expert design and installation of power distribution systems and substations for reliable electricity supply.",
      details: [
        "Substation design and construction",
        "Power distribution networks",
        "Transformer installations",
        "Switchgear systems",
        "Power quality analysis",
      ],
    },
    {
      icon: <Sun className="h-10 w-10 text-green-600 dark:text-green-400" />,
      title: "Renewable Energy Solutions",
      description:
        "Sustainable solar and inverter systems designed to provide clean, reliable energy for homes and businesses.",
      details: [
        "Solar PV system design and installation",
        "Inverter systems",
        "Battery storage solutions",
        "Hybrid power systems",
        "Energy efficiency consulting",
      ],
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-green-600 dark:text-green-400" />,
      title: "LED Lighting & Street Light Installations",
      description:
        "Energy-efficient LED lighting solutions for indoor and outdoor applications, including street lighting projects.",
      details: [
        "LED street lighting",
        "Commercial lighting solutions",
        "Smart lighting systems",
        "Energy-efficient retrofits",
        "Lighting control systems",
      ],
    },
    {
      icon: <Building className="h-10 w-10 text-green-600 dark:text-green-400" />,
      title: "General Energy & Infrastructure Services",
      description:
        "Comprehensive energy and infrastructure services tailored to meet the specific needs of government contracts, enterprises, and individuals.",
      details: [
        "Energy audits and consulting",
        "Infrastructure project management",
        "Maintenance and support services",
        "System upgrades and retrofits",
        "Turnkey project implementation",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            We offer a comprehensive range of energy and infrastructure solutions to meet the diverse needs of our
            clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-900 overflow-hidden group">
                <CardHeader className="pb-2">
                  <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit">{service.icon}</div>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-600 dark:text-green-400 mr-2">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
