"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Product: ["Features", "Pricing", "How It Works", "FAQ"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["Help Center", "Contact", "Track Order", "Returns"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-900 text-gray-300 pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-glow/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-1">
                  <Image
                    src="/CleanProLogo.png"
                    alt="CleanPro Logo"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <span className="font-display text-2xl font-bold text-white">
                  CleanPro
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-xs leading-relaxed">
                Premium laundry service that brings professional care right to
                your doorstep.
              </p>
              {/* Social Icons */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-11 h-11 glass-card-light rounded-xl flex items-center justify-center border border-white/5 hover:border-purple-glow/30 transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-glow transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className="font-display text-white font-semibold mb-5">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ),
          )}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-12 mb-10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for exclusive offers and tips
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1 relative group">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-purple-glow transition-colors" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-14 pr-5 py-4 glass-card-light border border-white/5 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-glow/30 transition-all"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-soft-blue via-purple-glow to-purple-600 text-white rounded-2xl font-display font-semibold shadow-lg hover:shadow-purple-glow/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 CleanPro. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
