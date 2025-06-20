'use client'

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-hero bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/50" />

      <motion.div
        className="relative z-10 text-center px-4 max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Build Something Amazing
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Crafting high-tech web experiences with Next.js & Tailwind.
        </p>
        <a
          href="#features"
          className="inline-block bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition"
        >
          Get Started
        </a>
      </motion.div>
    </section>
  );
}
