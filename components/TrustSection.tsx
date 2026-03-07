"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-pastel-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          {/* Text */}
          <p className="text-lg font-medium text-gray-700">
            Trusted by{" "}
            <span className="font-bold text-gray-900">
              5,000+ happy customers
            </span>
          </p>

          {/* Overlapping Avatars */}
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="/assets/avatars.jpeg"
                alt="Happy Customers"
                width={200}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="ml-4 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-100"
            >
              <span className="text-sm font-semibold text-gray-900">+5k</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
