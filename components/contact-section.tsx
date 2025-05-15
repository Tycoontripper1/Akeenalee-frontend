"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, Phone, Mail } from "lucide-react"
import { FadeIn, ScaleIn } from "./animations"
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "ict",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We'll get back to you soon!")
    setFormData({
      name: "",
      email: "",
      serviceType: "ict",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-akeenalee-green dark:bg-akeenalee-light-green mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Ready to start your project? Get in touch with our team today.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-akeenalee-green dark:focus:ring-akeenalee-light-green"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-akeenalee-green dark:focus:ring-akeenalee-light-green"
                />
              </div>

              <div className="space-y-2">
                <Label>Service Type</Label>
                <RadioGroup
                  value={formData.serviceType}
                  onValueChange={handleRadioChange}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ict" id="ict" />
                    <Label htmlFor="ict">ICT Infrastructure</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="power" id="power" />
                    <Label htmlFor="power">Power Distribution</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="solar" id="solar" />
                    <Label htmlFor="solar">Solar & Inverters</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lighting" id="lighting" />
                    <Label htmlFor="lighting">LED Lighting</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-akeenalee-green dark:focus:ring-akeenalee-light-green"
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full bg-akeenalee-green hover:bg-akeenalee-green/90 dark:bg-akeenalee-light-green dark:hover:bg-akeenalee-light-green/90 text-white"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </FadeIn>

          <div className="space-y-8">
            <FadeIn direction="left" delay={0.3}>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-akeenalee-green dark:text-akeenalee-light-green mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Address</p>
                      <p className="text-gray-700 dark:text-gray-300">123 Victoria Island, Lagos, Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-akeenalee-green dark:text-akeenalee-light-green mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <a
                          href="tel:+2341234567890"
                          className="hover:text-akeenalee-green dark:hover:text-akeenalee-light-green"
                        >
                          +234 123 456 7890
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-akeenalee-green dark:text-akeenalee-light-green mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Email</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        <a
                          href="mailto:info@akeenalee.com"
                          className="hover:text-akeenalee-green dark:hover:text-akeenalee-light-green"
                        >
                          info@akeenalee.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <ScaleIn delay={0.5}>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Office Location</h3>
                <div className="h-80 w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7302424225997!2d3.4216229999999997!3d6.4280807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e34fe6a84cdcd53!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1652345678901!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map – Akeenalee HQ"
                  ></iframe>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  )
}
