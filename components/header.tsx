"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./theme-toggle"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "../public/Logo.png"
import Image from "next/image"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-akeenalee-charcoal/95 backdrop-blur-md shadow-md py-2"
          : "bg-white dark:bg-akeenalee-charcoal py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#home" className="flex items-center">
              <Image
                src={Logo}
                alt="Akeenalee Logo"
                width={50}
                height={50}
                className="h-12 w-20 rounded-full"
              />
              {/* <span className="ml-2 text-xl font-bold font-montserrat text-gray-700 dark:text-gray-200">
                Akeenalee
              </span> */}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium font-montserrat tracking-wide text-gray-700 hover:text-akeenalee-green dark:text-gray-200 dark:hover:text-akeenalee-light-green transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <ModeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-akeenalee-green hover:bg-akeenalee-green/90 dark:bg-akeenalee-light-green dark:hover:bg-akeenalee-light-green/90 text-white font-montserrat font-medium"
              >
                <Link href="#contact">Request a Service</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Navigation */}
          <motion.div
            className="flex md:hidden items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-akeenalee-green dark:hover:text-akeenalee-light-green focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-akeenalee-charcoal shadow-lg">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <Link
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-montserrat font-medium text-gray-700 hover:text-akeenalee-green dark:text-gray-200 dark:hover:text-akeenalee-light-green"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Button
                  asChild
                  className="w-full bg-akeenalee-green hover:bg-akeenalee-green/90 dark:bg-akeenalee-light-green dark:hover:bg-akeenalee-light-green/90 text-white font-montserrat font-medium"
                >
                  <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Request a Service
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
