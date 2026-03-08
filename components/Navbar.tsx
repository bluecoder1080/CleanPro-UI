"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#features" },
    { name: "Help", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Recyclers", href: "#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 group-hover:border-white/20 transition-all p-1">
              <Image
                src="/CleanProLogo.png"
                alt="CleanPro Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="text-2xl font-bold text-white hidden sm:inline">
              CleanPro
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.2 }}
                whileHover={{ y: -2 }}
                className="text-gray-300 hover:text-white font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-pink to-accent-brown group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-brown text-white rounded-full font-semibold shadow-lg hover:shadow-accent-pink/50 transition-all"
          >
            Get the App
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-card text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-6 pb-6 space-y-4 glass-card rounded-2xl p-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-300 hover:text-white font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full px-6 py-3 bg-gradient-to-r from-accent-pink to-accent-brown text-white rounded-full font-semibold shadow-lg mt-4">
              Get the App
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
