"use client";

import { motion } from "framer-motion";
import { Star, Sparkles, Zap, Shield, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const floatingCards = [
    {
      icon: Shield,
      title: "Premium Care",
      desc: "Expert fabric handling",
      position: "top-24 right-16",
      delay: 0.3,
    },
    {
      icon: Zap,
      title: "Same Day",
      desc: "Lightning fast service",
      position: "top-1/2 -translate-y-1/2 right-24",
      delay: 0.5,
    },
    {
      icon: Clock,
      title: "24/7 Available",
      desc: "Always here for you",
      position: "bottom-36 right-20",
      delay: 0.7,
    },
    {
      icon: Star,
      title: "5.0 Rating",
      desc: "Trusted by thousands",
      position: "top-40 right-72",
      delay: 0.9,
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-25 scale-105"
          poster="/assets/soft-gradient.jpeg"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Floating Shirt Animation Layer - Using CSS animation instead of video */}
        <div className="absolute inset-0 flex items-center justify-end pr-32 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [-4, 4, -4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-4xl opacity-10"
          >
            <div className="w-[800px] h-[800px] bg-gradient-to-br from-purple-glow/20 via-soft-blue/20 to-pink-500/20 rounded-full blur-[80px]" />
          </motion.div>
        </div>

        {/* Layered Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/98 via-navy-900/92 to-navy-900/96" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/70 to-navy-900/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-transparent to-purple-glow/5" />

        {/* Enhanced Ambient Glow Effects */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-glow/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-soft-blue/8 rounded-full blur-[100px]" />

        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139, 92, 246, 0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Cinematic Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 glass-card px-5 py-2.5 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-purple-glow" />
              <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                Premium Laundry Service
              </span>
            </motion.div>

            {/* Massive Headline */}
            <h1 className="font-display font-bold leading-[0.9] tracking-tight cinematic-text glow-text">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl block text-white"
              >
                The New
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl block bg-gradient-to-r from-soft-blue via-purple-glow to-purple-400 bg-clip-text text-transparent"
              >
                Level of Care
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl block text-white/90 mt-4"
              >
                for Your Wardrobe
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl lg:text-2xl text-gray-400 font-light max-w-xl leading-relaxed"
            >
              Tough stains? We&apos;ll make your clothes{" "}
              <span className="font-semibold text-white">flawless</span>.
              <br />
              Experience luxury care delivered to your door.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-8"
            >
              {/* Stars */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-400">5.0 Rating</span>
              </div>
              <div className="h-6 w-px bg-gray-700" />
              <div className="text-sm text-gray-400">
                <span className="font-semibold text-white">5,000+</span> Happy
                Customers
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 60px rgba(139, 92, 246, 0.6)",
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-10 py-5 bg-gradient-to-r from-soft-blue via-purple-glow to-purple-600 text-white rounded-full font-semibold text-lg overflow-hidden glow-purple"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 glass-card text-white rounded-full font-semibold text-lg border border-gray-700 hover:border-gray-500 transition-all"
              >
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Floating Cards & Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center h-[600px]"
          >
            {/* Main Product Showcase */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Ambient Glow Layers - Simplified */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-glow/30 to-soft-blue/30 rounded-full blur-[100px]" />

              <div className="relative glass-card rounded-[3.5rem] p-8 w-96 h-96 border-2 border-white/15 flex items-center justify-center">
                {/* Image Container */}
                <div className="relative z-10 overflow-hidden rounded-3xl w-72 h-72">
                  <Image
                    src="/assets/hero-shirt.jpeg"
                    alt="Premium Laundry Service"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-3xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* Floating Service Cards */}
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  delay: card.delay,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className={`absolute ${card.position} hidden xl:block z-20`}
              >
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.15, rotate: 5, z: 50 }}
                  className="glass-card-light p-6 rounded-2xl cursor-pointer group hover:glow-purple transition-all hover-lift backdrop-blur-3xl border-2 border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative p-4 bg-gradient-to-br from-purple-glow/30 to-soft-blue/30 rounded-xl group-hover:scale-110 transition-transform">
                      <card.icon className="w-7 h-7 text-purple-400 group-hover:text-purple-300" />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-glow/50 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base mb-1">
                        {card.title}
                      </p>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-glow/0 to-soft-blue/0 group-hover:from-purple-glow/20 group-hover:to-soft-blue/20 rounded-2xl transition-all duration-500 -z-10 blur-xl" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-900 to-transparent z-[5]" />
    </section>
  );
}
