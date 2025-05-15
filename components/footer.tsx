"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { FadeIn } from "./animations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Logo from "@/public/Logo.png"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
]

const services = [
  { name: "ICT Infrastructure", href: "#services" },
  { name: "Power Distribution", href: "#services" },
  { name: "Solar Energy Solutions", href: "#services" },
  { name: "LED Lighting Systems", href: "#services" },
]

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscriptionStatus, setSubscriptionStatus] = useState<"idle" | "success" | "error">("idle")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setSubscriptionStatus("error")
      return
    }

    // Simulate API call
    setIsSubmitting(true)
    setTimeout(() => {
      setSubscriptionStatus("success")
      setIsSubmitting(false)
      // In a real implementation, you would send this to your API
      console.log("Subscribed email:", email)
    }, 1500)
  }

  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 border-t border-gray-200 dark:border-gray-800">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-akeenalee-charcoal p-8 md:p-10 lg:p-12 border border-gray-200 dark:border-gray-800">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <svg className="h-full w-full" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 0 H40 V40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl md:max-w-md">
              <FadeIn>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Stay updated with our latest projects, industry insights, and energy solutions. No spam.
                </p>
              </FadeIn>
            </div>

            <div className="w-full md:w-auto md:flex-1 max-w-xl">
              <FadeIn delay={0.2}>
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                  <div className="relative flex-grow">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (subscriptionStatus !== "idle") setSubscriptionStatus("idle")
                      }}
                      className="h-12 pl-4 pr-4 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 w-full focus:ring-2 focus:ring-akeenalee-green dark:focus:ring-akeenalee-light-green focus:border-transparent"
                      disabled={isSubmitting || subscriptionStatus === "success"}
                      required
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      className={`h-12 px-6 font-medium ${
                        subscriptionStatus === "success"
                          ? "bg-green-600 hover:bg-green-700 text-white"
                          : "bg-akeenalee-green hover:bg-akeenalee-green/90 dark:bg-akeenalee-light-green dark:hover:bg-akeenalee-light-green/90 text-white"
                      }`}
                      disabled={isSubmitting || subscriptionStatus === "success"}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing
                        </span>
                      ) : subscriptionStatus === "success" ? (
                        <span className="flex items-center">
                          <Check className="mr-2 h-4 w-4" />
                          Subscribed
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Subscribe
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </form>

                {subscriptionStatus === "error" && (
                  <div className="mt-2 text-red-500 dark:text-red-400 text-sm flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    Please enter a valid email address
                  </div>
                )}

                {subscriptionStatus === "success" && (
                  <div className="mt-2 text-green-600 dark:text-green-400 text-sm flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    Thank you for subscribing!
                  </div>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={Logo} alt="Akeenalee Logo" className="h-20 w-auto" />
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Providing reliable infrastructure and energy solutions across Nigeria, committed to excellence and
              sustainable development.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-akeenalee-green dark:text-gray-400 dark:hover:text-akeenalee-light-green transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.2, color: "#00A859" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-akeenalee-green dark:text-gray-400 dark:hover:text-akeenalee-light-green transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2 text-akeenalee-green/70 dark:text-akeenalee-light-green/70" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-600 hover:text-akeenalee-green dark:text-gray-400 dark:hover:text-akeenalee-light-green transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3.5 w-3.5 mr-2 text-akeenalee-green/70 dark:text-akeenalee-light-green/70" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-akeenalee-green dark:text-akeenalee-light-green mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Victoria Island
                  <br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-akeenalee-green dark:text-akeenalee-light-green mr-3 flex-shrink-0" />
                <a
                  href="tel:+2341234567890"
                  className="text-gray-600 hover:text-akeenalee-green dark:text-gray-400 dark:hover:text-akeenalee-light-green"
                >
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-akeenalee-green dark:text-akeenalee-light-green mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@akeenalee.com"
                  className="text-gray-600 hover:text-akeenalee-green dark:text-gray-400 dark:hover:text-akeenalee-light-green"
                >
                  info@akeenalee.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 dark:border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Akeenalee Resource Limited. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-akeenalee-green dark:text-gray-400 dark:hover:text-akeenalee-light-green"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-akeenalee-green dark:text-gray-400 dark:hover:text-akeenalee-light-green"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-akeenalee-green dark:text-gray-400 dark:hover:text-akeenalee-light-green"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
