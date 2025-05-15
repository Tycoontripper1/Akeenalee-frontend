"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"

const faqs = [
  {
    question: "What is included in an ICT infrastructure project?",
    answer:
      "Our ICT infrastructure projects typically include network design and implementation, server infrastructure setup, data center design, cabling, hardware installation, and system configuration. We also provide ongoing maintenance and support services to ensure optimal performance.",
  },
  {
    question: "How long does a typical solar installation project take?",
    answer:
      "The timeline for solar installations varies depending on the scale and complexity of the project. Small residential installations may take 1-2 weeks, while larger commercial or government projects can take 4-8 weeks. We provide detailed timelines during the consultation phase.",
  },
  {
    question: "Do you provide maintenance services after installation?",
    answer:
      "Yes, we offer comprehensive maintenance packages for all our installations. These include regular inspections, preventive maintenance, emergency repairs, and system optimization to ensure longevity and optimal performance of your infrastructure.",
  },
  {
    question: "What areas in Nigeria do you service?",
    answer:
      "We provide our services throughout Nigeria, with a primary focus on Lagos, Abuja, Port Harcourt, and other major cities. For projects in remote locations, we have specialized teams that can be deployed as needed.",
  },
  {
    question: "What payment terms do you offer for government contracts?",
    answer:
      "For government contracts, we typically work with standard government payment terms, including milestone-based payments. We're flexible and can adapt to specific requirements outlined in the contract. We ensure all our payment processes comply with government procurement regulations.",
  },
  {
    question: "Can you handle both small and large-scale projects?",
    answer:
      "Absolutely. We have the expertise and resources to handle projects of all sizes, from small residential installations to large-scale infrastructure projects for government agencies and corporate clients. Our team scales according to project requirements.",
  },
]

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-akeenalee-green dark:bg-akeenalee-light-green mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Find answers to common questions about our services and processes.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <StaggerContainer>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 dark:text-gray-300">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </StaggerItem>
              ))}
            </Accordion>
          </StaggerContainer>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
