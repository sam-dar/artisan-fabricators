"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#ECEFF4] text-[#2E3440] px-6 sm:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-xl overflow-hidden shadow-lg"
        >
                <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/gallery/about.jpg"
            alt="About Us"
            width={400}
            height={600}
            className="rounded-xl w-auto h-[600px] object-cover"
          />
          {/* Shine Overlay */}
          <div
            className="absolute top-0 left-[-75%] w-1/2 h-full pointer-events-none rounded-xl bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 animate-shine"
          />
        </div>

        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[#454d6b] text-5xl font-bold mb-6 leading-tight">Who We Are</h2>
          <p className="text-lg mb-6 leading-relaxed">
            At Artisian Corian Fabricators, we specialize in the expert crafting
            and installation of Corian solid surfaces. Our portfolio spans a
            wide range of high-quality projects, including kitchen countertops,
            bathroom vanities, niches, bank counters, restaurant worktops,
            pharmacy counters, reception desks, and decorative wall designs.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            With an unwavering focus on craftsmanship, precision, and design
            excellence, we are committed to delivering results that exceed our
            clients’ expectations. Our team brings years of experience, using
            modern fabrication techniques to turn your vision into reality with
            flawless execution.
          </p>
          <p className="text-lg mb-6 leading-relaxed">
            Customer satisfaction and quality are at the heart of everything we
            do. From concept to completion, we ensure that every project
            reflects our passion for innovation and detail.
          </p>
          {/* Founder Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="italic border-l-4 border-[#4C566A] pl-4 text-xl text-[#4C566A] mb-6"
          >
            Every surface tells a story. At Artisan, we shape beauty and
            durability into every project.
            <br />—{" "}
            <span className="not-italic font-semibold">
              Asad Shahzad, Founder
            </span>
          </motion.blockquote>

          {/* Timeline */}
          <div className="mt-10 space-y-4 font-semibold">
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#4C566A] before:rounded-full ">
              <p>
                <strong>2018:</strong> Founded Artisan Corian Fabricators.
              </p>
            </div>
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#4C566A] before:rounded-full">
              <p>
                <strong>2019:</strong> Completed our 100th custom Corian
                project.
              </p>
            </div>
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#4C566A] before:rounded-full">
              <p>
                <strong>2021:</strong> Expanded our workshop and services.
              </p>
            </div>
            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-[#4C566A] before:rounded-full">
              <p>
                <strong>2024:</strong> Launched full-service design consultancy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
