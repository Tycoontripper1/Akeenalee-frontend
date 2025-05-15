"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Lightbulb } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const values = [
    {
      icon: <Target className="h-10 w-10 text-green-600 dark:text-green-400" />,
      title: "Mission",
      description:
        "To deliver innovative and sustainable energy solutions that empower our clients and contribute to a greener future.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-green-600 dark:text-green-400" />,
      title: "Vision",
      description:
        "To be the leading provider of integrated energy and infrastructure solutions in Africa, known for excellence and sustainability.",
    },
    {
      icon: <Heart className="h-10 w-10 text-green-600 dark:text-green-400" />,
      title: "Values",
      description:
        "Integrity, Innovation, Excellence, Sustainability, and Customer Satisfaction guide everything we do.",
    },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Akeenalee Resource Limited
          </h2>
          <div className="w-20 h-1 bg-green-600 dark:bg-green-400 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Founded with a vision to transform Africa's energy landscape, Akeenalee Resource Limited has grown to become
            a trusted provider of comprehensive energy and infrastructure solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-full">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Story</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Akeenalee Resource Limited was established to address the growing need for reliable and sustainable energy
            solutions in Africa. With years of experience in the industry, our team of experts has successfully
            delivered numerous projects across various sectors.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            We take pride in our ability to understand the unique needs of each client and provide tailored solutions
            that exceed expectations. Our commitment to quality, innovation, and sustainability has earned us a
            reputation as a trusted partner for energy and infrastructure projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
