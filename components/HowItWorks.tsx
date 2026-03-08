"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles, Package } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Calendar,
    title: "Schedule Pickup",
    description:
      "Choose a convenient time through our app or website. We come to you.",
    number: "01",
  },
  {
    icon: Sparkles,
    title: "We Clean Your Clothes",
    description:
      "Expert care with premium detergents and advanced cleaning technology.",
    number: "02",
  },
  {
    icon: Package,
    title: "Delivered Fresh",
    description:
      "Perfectly cleaned, folded, and delivered right to your doorstep.",
    number: "03",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Layered Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-accent-brown/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-20 left-1/3 w-[600px] h-[600px] bg-accent-pink/12 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          {/* Decorative Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 0.08, scale: 1, rotate: 12 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute -top-16 right-20 w-28 h-28 hidden xl:block"
          >
            <Image
              src="/assets/minimal-icons.jpeg"
              alt=""
              width={112}
              height={112}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </motion.div>

          <h2 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 cinematic-text tracking-tight">
            How It{" "}
            <span className="bg-gradient-to-r from-accent-pink via-accent-brown to-orange-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            Three simple steps to pristine clothes
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Connecting Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-full h-px bg-gradient-to-r from-accent-pink/30 via-accent-brown/30 to-transparent" />
              )}

              {/* Card Container */}
              <div className="relative text-center glass-card rounded-[2.5rem] p-10 border border-white/5 hover:border-white/10 transition-all duration-500 hover:glow-accent">
                {/* Number Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-accent-pink via-accent-brown to-orange-500 rounded-2xl shadow-lg glow-accent relative"
                >
                  <span className="font-display text-3xl font-bold text-white">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/50 to-transparent rounded-2xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-24 h-24 mb-8 glass-card-light rounded-3xl border border-white/10"
                >
                  <step.icon className="w-12 h-12 text-accent-pink group-hover:text-accent-pink/80 transition-colors" />
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-5 tracking-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-accent-pink group-hover:to-accent-brown group-hover:bg-clip-text transition-all duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-lg group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/0 to-accent-brown/0 group-hover:from-accent-pink/10 group-hover:to-accent-brown/10 rounded-[2.5rem] transition-all duration-500 -z-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
