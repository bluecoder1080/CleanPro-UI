"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp } from "lucide-react";

export default function ShowcaseCard() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-soft-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-glow/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Floating Glass Card */}
          <motion.div
            whileHover={{ y: -15, scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-[3rem] overflow-hidden glow-purple border-2 border-white/10"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/assets/folded-stack.jpeg"
                    alt="Folded Clothes Stack"
                    fill
                    className="object-cover"
                  />
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-glow/20 to-transparent" />
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-navy-900/50 to-navy-800/50 backdrop-blur-xl">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="inline-flex items-center px-5 py-2.5 glass-card-light rounded-full mb-8 border border-green-500/20">
                    <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                    <span className="text-sm font-semibold text-green-300 uppercase tracking-wide">
                      This Month
                    </span>
                  </div>

                  <h3 className="font-display text-6xl lg:text-7xl font-bold text-white mb-4 cinematic-text">
                    2.7k+
                  </h3>

                  <p className="text-xl lg:text-2xl text-gray-300">
                    Clothes cleaned to{" "}
                    <span className="font-semibold bg-gradient-to-r from-purple-glow to-soft-blue bg-clip-text text-transparent">
                      perfection
                    </span>
                  </p>

                  <div className="mt-10 flex items-center space-x-4">
                    <div className="flex-1 bg-navy-700/50 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "78%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5,
                          ease: "easeOut",
                        }}
                        className="bg-gradient-to-r from-soft-blue via-purple-glow to-pink-500 h-3 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-soft-blue via-purple-glow to-pink-500 blur-md" />
                      </motion.div>
                    </div>
                    <span className="text-lg font-bold text-white">78%</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Decorative Elements */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-glow/30 to-soft-blue/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-pink-500/30 to-orange-500/30 rounded-full blur-3xl"
          />

          {/* Minimal Icons Decoration */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            whileInView={{ opacity: 0.1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute top-16 -left-12 w-24 h-24 hidden lg:block"
          >
            <Image
              src="/assets/minimal-icons.jpeg"
              alt=""
              width={96}
              height={96}
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
