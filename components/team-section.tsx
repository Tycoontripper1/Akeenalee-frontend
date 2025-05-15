"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function Team() {
  const team = [
    {
      name: "Akintola Alli",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in the energy sector, John leads our company with vision and expertise.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jane Smith",
      position: "Technical Director",
      bio: "Jane brings extensive knowledge in electrical engineering and renewable energy systems to our projects.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Johnson",
      position: "Operations Manager",
      bio: "Michael ensures the smooth execution of all our projects with his exceptional project management skills.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Williams",
      position: "Business Development Manager",
      bio: "Sarah builds and maintains relationships with our clients, understanding their needs and providing tailored solutions.",
      image: "/placeholder.svg?height=300&width=300",
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
    <section id="team" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Meet the dedicated professionals behind Akeenalee Resource Limited who make our success possible.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group dark:bg-gray-800">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-green-600 dark:text-green-400 font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
