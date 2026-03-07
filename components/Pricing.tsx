"use client";

import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import Image from "next/image";

const plans = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for individuals",
    features: [
      "Up to 10 items per month",
      "Standard cleaning",
      "48-hour turnaround",
      "Free pickup & delivery",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "59",
    description: "Most popular choice",
    features: [
      "Up to 30 items per month",
      "Premium cleaning",
      "24-hour turnaround",
      "Priority pickup & delivery",
      "Fabric protection treatment",
      "24/7 support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "99",
    description: "For demanding wardrobes",
    features: [
      "Unlimited items",
      "Luxury care treatment",
      "Same-day delivery",
      "On-demand pickup",
      "Stain removal guarantee",
      "Dedicated account manager",
      "Storage options",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Layered Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-glow/15 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-soft-blue/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-glow/10 to-transparent rounded-full blur-3xl" />
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
            initial={{ opacity: 0, scale: 0, rotate: -45 }}
            whileInView={{ opacity: 0.08, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="absolute -top-16 left-1/3 w-24 h-24 hidden lg:block"
          >
            <Image
              src="/assets/minimal-icons.jpeg"
              alt=""
              width={96}
              height={96}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </motion.div>

          <h2 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 cinematic-text tracking-tight">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-soft-blue via-purple-glow to-pink-500 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
            Choose the perfect plan for your lifestyle
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className={`relative glass-card rounded-[2.5rem] p-10 transition-all duration-500 group ${
                plan.highlighted
                  ? "md:scale-105 glow-purple border-2 border-purple-glow/40"
                  : "border-2 border-white/5"
              }`}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-soft-blue via-purple-glow to-purple-600 text-white rounded-full text-sm font-bold shadow-lg flex items-center glow-purple"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Most Popular
                </motion.div>
              )}

              {/* Glow Effect for Highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-glow/20 to-soft-blue/20 rounded-[2.5rem] blur-xl -z-10 group-hover:blur-2xl transition-all duration-500" />
              )}

              {/* Plan Name */}
              <h3 className="font-display text-3xl font-bold text-white mb-3 tracking-tight">
                {plan.name}
              </h3>
              <p className="text-gray-400 mb-8">{plan.description}</p>

              {/* Price */}
              <div className="mb-10">
                <span className="font-display text-6xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="text-gray-500 text-lg">/month</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-start group/item"
                  >
                    <div className="p-1 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-300 group-hover/item:text-white transition-colors">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: plan.highlighted
                    ? "0 0 60px rgba(139, 92, 246, 0.6)"
                    : "0 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all smooth-transition ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-soft-blue via-purple-glow to-purple-600 text-white glow-purple"
                    : "glass-card-light text-white hover:border-white/20 border border-white/10"
                }`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-400 mt-16 text-lg"
        >
          All plans include free pickup and delivery • Cancel anytime • No
          hidden fees
        </motion.p>
      </div>
    </section>
  );
}
