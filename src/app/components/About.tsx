'use client';
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full max-w-4xl px-6 py-16 text-center">
      <motion.h2 
        className="text-3xl font-bold text-purple-800 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I am a third-year doctoral student in the Department of Recreation, Sport, and Tourism (RST) at UIUC. 
        My work focuses on Environmental Justice, LGBTQ+ issues in leisure and recreation, DEI, and Queer Pedagogies. 
        I aim to foster inclusive and equitable environments within leisure spaces, advocating for marginalized communities.
      </motion.p>
    </section>
  );
}
