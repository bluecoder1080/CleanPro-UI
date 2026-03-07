"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    content:
      "CleanPro transformed my wardrobe care routine. The attention to detail is remarkable, and my clothes have never looked better.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content:
      "The convenience and quality are unmatched. Same-day delivery saved me countless times before important meetings.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Fashion Designer",
    content:
      "As someone who works with delicate fabrics daily, I trust CleanPro completely. Their eco-friendly approach is a bonus!",
    rating: 5,
    avatar: "ER",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-soft-blue/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-1/3 w-[600px] h-[600px] bg-purple-glow/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative inline-block mb-6"
          >
            <Image
              src="/assets/minimal-icons.jpeg"
              alt=""
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-2xl opacity-60 mx-auto"
              loading="lazy"
            />
          </motion.div>
          <h2 className="font-display text-5xl lg:text-7xl font-bold text-white mb-6 cinematic-text tracking-tight">
            What Our{" "}
            <span className="bg-gradient-to-r from-soft-blue via-purple-glow to-purple-600 bg-clip-text text-transparent">
              Customers
            </span>{" "}
            Say
          </h2>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join thousands of happy customers who trust CleanPro
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass-card rounded-[2.5rem] p-10 border border-white/5 hover:border-white/10 transition-all duration-500 h-full flex flex-col">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-purple-glow/30 mb-6 group-hover:text-purple-glow/50 transition-colors" />

                {/* Rating Stars */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.2 + i * 0.1,
                        type: "spring",
                      }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-8 leading-relaxed text-lg flex-grow group-hover:text-gray-200 transition-colors">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center pt-6 border-t border-white/5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 bg-gradient-to-br from-soft-blue via-purple-glow to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-purple-glow/50 transition-shadow"
                  >
                    <span className="font-display text-white font-bold text-lg">
                      {testimonial.avatar}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-display font-semibold text-white text-lg group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-soft-blue group-hover:to-purple-glow group-hover:bg-clip-text transition-all">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-glow/0 to-soft-blue/0 group-hover:from-purple-glow/5 group-hover:to-soft-blue/5 rounded-[2.5rem] transition-all duration-500 -z-10 blur-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
