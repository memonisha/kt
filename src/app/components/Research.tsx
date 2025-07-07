'use client';
import { motion } from "framer-motion";

const tags = [
  "Environmental Justice", "LGBTQ+ Inclusion", "Queer Pedagogies",
  "Leisure Studies", "Social Justice", "DEI in Recreation",
];

export default function Research() {
  return (
    <section className="w-full px-6 py-16 bg-gradient-to-r from-white to-purple-50 text-center">
      <motion.h2 
        className="text-3xl font-bold text-purple-800 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Research Interests
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {tags.map((tag, idx) => (
          <motion.span 
            key={idx}
            className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full shadow-md text-sm font-medium"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
