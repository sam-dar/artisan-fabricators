import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";

export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800 py-12 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-sm tracking-widest text-gray-500 uppercase">FAQs</p>
        <h1 className="text-4xl font-bold text-blue-900 mt-2">Frequently Asked Questions</h1>
      </div>

      <Accordion type="multiple" className="space-y-4">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium text-left w-full py-3 px-4 bg-gray-100 rounded-xl">
            What services does your artisan fabrication business offer?
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 pb-4 text-gray-600">
            We specialize in custom corian solid surface designs, fabrication, and installation for both residential and commercial spaces. This includes countertops, vanities, reception desks, and decorative elements.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium text-left w-full py-3 px-4 bg-gray-100 rounded-xl">
            Do you work with designers, architects, or contractors?
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 pb-4 text-gray-600">
            Absolutely! We frequently collaborate with industry professionals to bring their custom designs to life. We&apos;re happy to work with sketches, blueprints, or CAD files.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium text-left w-full py-3 px-4 bg-gray-100 rounded-xl">
            What materials do you use?
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 pb-4 text-gray-600">
            We primarily use high-quality Corian solid surface materials, but we also work with other premium brands based on client needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium text-left w-full py-3 px-4 bg-gray-100 rounded-xl">
            How long does a typical project take?
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 pb-4 text-gray-600">
            Project timelines vary based on complexity and scale. Small jobs may take a few days, while larger custom installations can take a few weeks. We always aim to deliver on time without compromising quality.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium text-left w-full py-3 px-4 bg-gray-100 rounded-xl">
            Do you provide design consultations?
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 pb-4 text-gray-600">
            Yes, we offer consultations to help clients visualize their projects. We can provide 3D models, samples, and professional guidance to ensure the best outcome.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-medium text-left w-full py-3 px-4 bg-gray-100 rounded-xl">
            What areas do you serve?
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 pb-4 text-gray-600">
            We are based in Lahore and primarily serve clients throughout Punjab, Pakistan. For larger projects, we can discuss logistics beyond this region.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
