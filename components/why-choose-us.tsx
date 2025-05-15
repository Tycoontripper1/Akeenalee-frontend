"use client"

import { Award, CheckCircle, Users, Shield } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from "./animations"

const reasons = [
  {
    icon: Award,
    title: "Expertise & Experience",
    description:
      "Our team of certified engineers and technicians brings decades of combined experience in infrastructure development.",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description:
      "We adhere to international standards and best practices, ensuring the highest quality in all our projects.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    description:
      "We work closely with our clients to understand their needs and deliver tailored solutions that exceed expectations.",
  },
  {
    icon: Shield,
    title: "Reliability & Support",
    description:
      "We provide ongoing maintenance and support services to ensure the longevity and optimal performance of our installations.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-akeenalee-green dark:bg-akeenalee-light-green mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Discover what sets Akeenalee Resource Limited apart as a trusted partner for infrastructure and energy
              solutions.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <StaggerItem key={index}>
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-akeenalee-green/10 dark:bg-akeenalee-light-green/10 flex items-center justify-center">
                      <reason.icon className="h-6 w-6 text-akeenalee-green dark:text-akeenalee-light-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{reason.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{reason.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <ScaleIn delay={0.3}>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-akeenalee-green dark:text-akeenalee-light-green mb-2">100+</div>
              <p className="text-gray-700 dark:text-gray-300">Projects Completed</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.4}>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-akeenalee-green dark:text-akeenalee-light-green mb-2">20+</div>
              <p className="text-gray-700 dark:text-gray-300">Government Contracts</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.5}>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-akeenalee-green dark:text-akeenalee-light-green mb-2">50+</div>
              <p className="text-gray-700 dark:text-gray-300">MW Installed</p>
            </div>
          </ScaleIn>
          <ScaleIn delay={0.6}>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-akeenalee-green dark:text-akeenalee-light-green mb-2">10+</div>
              <p className="text-gray-700 dark:text-gray-300">Years of Experience</p>
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
