"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "./animations"

const testimonials = [
  {
    quote:
      "Akeenalee exceeded our expectations with their solar installation project. Their team was professional, efficient, and delivered on time and within budget.",
    author: "Dr. Oluwaseun Adebayo",
    position: "Director of Operations",
    company: "Nigerian Power Ltd",
  },
  {
    quote:
      "We've worked with Akeenalee on multiple ICT infrastructure projects for our ministry. Their expertise and attention to detail have made them our go-to partner for all our technology needs.",
    author: "Engr. Mohammed Bello",
    position: "IT Director",
    company: "Federal Ministry of Works",
  },
  {
    quote:
      "The LED lighting system installed by Akeenalee has significantly reduced our energy costs while improving visibility and safety in our facility. Highly recommended!",
    author: "Mrs. Chioma Okafor",
    position: "Facility Manager",
    company: "Lagos State University Teaching Hospital",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">What Our Clients Say</h2>
            <div className="w-20 h-1 bg-akeenalee-green dark:bg-akeenalee-light-green mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Don't just take our word for it. Here's what our clients have to say about working with Akeenalee.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full px-4"
              >
                <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-lg">
                  <CardContent className="p-8">
                    <Quote className="h-10 w-10 text-akeenalee-green dark:text-akeenalee-light-green mb-4" />
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 mr-4 overflow-hidden">
                        <img
                          src={`https://randomuser.me/api/portraits/men/${currentIndex + 20}.jpg`}
                          alt={testimonials[currentIndex].author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {testimonials[currentIndex].author}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? "bg-akeenalee-green dark:bg-akeenalee-light-green"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </div>
        </div>

   
      </div>
    </section>
  )
}
