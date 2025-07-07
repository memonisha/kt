'use client';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-purple-100 to-blue-50">
      <motion.h1 
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-serif font-bold text-purple-700"
      >
        Kshitij Tewari
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.6 }}
        className="mt-4 text-lg md:text-2xl font-light text-gray-700"
      >
        Doctoral Scholar • Environmental Justice • Queer Pedagogies
      </motion.p>
    </section>
  );
}
