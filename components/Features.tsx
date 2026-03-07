"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Zap } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Shield,
    title: "Premium Fabric Care",
    description:
      "Expert handling of delicate materials with specialized treatments for lasting quality and perfection.",
    color: "from-blue-500 to-cyan-400",
    glow: "glow-blue",
  },
  {
    icon: Leaf,
    title: "Eco Friendly Cleaning",
    description:
      "Sustainable practices using biodegradable detergents and energy-efficient processes that care for the planet.",
    color: "from-green-500 to-emerald-400",
    glow: "",
  },
  {
    icon: Zap,
    title: "Same Day Delivery",
    description:
      "Fast turnaround without compromising quality. Your clothes ready when you need them, guaranteed.",
    color: "from-purple-500 to-pink-400",
    glow: "glow-purple",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-glow/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-soft-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          {/* Decorative Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32"
          >
            <Image
              src="/assets/minimal-icons.jpeg"
              alt=""
              width={128}
              height={128}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </motion.div>

          <h2 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 cinematic-text">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-soft-blue to-purple-glow bg-clip-text text-transparent">
              CleanPro
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the perfect blend of premium care, sustainability, and
            speed
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`group relative glass-card rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 hover:${feature.glow}`}
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 p-[1px]`}
              >
                <div className="w-full h-full rounded-[2.5rem] bg-navy-900" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                  className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.color} mb-8 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-5 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div
                  className={`mt-8 h-1 w-0 group-hover:w-full bg-gradient-to-r ${feature.color} rounded-full transition-all duration-700`}
                />
              </div>

              {/* Floating Glow Effect */}
              <div
                className={`absolute -inset-2 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 60px rgba(139, 92, 246, 0.5)",
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 glass-card-light text-white rounded-full font-semibold text-lg hover:glow-purple transition-all"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
