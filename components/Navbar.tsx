'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MySite
        </Link>

        <div className="hidden md:flex space-x-6">
          {["features","about","contact"].map((id) => (
            <Link key={id} href={`#${id}`} className="text-gray-600 hover:text-gray-900">
              {id[0].toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-gray-600 text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/90 backdrop-blur-md"
          >
            <div className="flex flex-col px-4 py-2 space-y-2">
              {["features","about","contact"].map((id) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  className="text-gray-600 hover:text-gray-900"
                  onClick={() => setOpen(false)}
                >
                  {id[0].toUpperCase() + id.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
