"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-950 overflow-hidden">
      {/* Animated Background Glows */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-accent-pink to-accent-brown rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-purple-600 to-pink-500 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative inline-block mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-accent-pink via-accent-brown to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl glow-accent">
              <ArrowRight className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Headline */}
          <h2 className="font-display text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 cinematic-text tracking-tight leading-tight">
            Experience Laundry Care
            <br />
            <span className="bg-gradient-to-r from-accent-pink via-accent-brown to-orange-400 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust CleanPro with their
            wardrobe
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center px-12 py-6 bg-white text-gray-900 rounded-full font-display font-bold text-xl shadow-2xl hover:shadow-accent-pink/50 transition-all group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Get the App
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
            {/* Button Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-pink/20 via-accent-brown/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-xl" />
          </motion.button>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-10 text-gray-400 text-base"
          >
            <motion.div
              whileHover={{ scale: 1.05, color: "rgb(209, 213, 219)" }}
              className="flex items-center glass-card-light px-6 py-3 rounded-2xl border border-white/5"
            >
              <svg
                className="w-5 h-5 mr-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-semibold">4.9/5 Rating</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "rgb(209, 213, 219)" }}
              className="flex items-center glass-card-light px-6 py-3 rounded-2xl border border-white/5"
            >
              <svg
                className="w-5 h-5 mr-2 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="font-semibold">No Commitment</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "rgb(209, 213, 219)" }}
              className="flex items-center glass-card-light px-6 py-3 rounded-2xl border border-white/5"
            >
              <svg
                className="w-5 h-5 mr-2 text-accent-pink"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-semibold">Same Day Service</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
