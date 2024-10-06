import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 text-white p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Chiranjeeb Jena</h1>
        <p className="text-2xl mb-8">Full-Stack Developer & UI/UX Enthusiast</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg shadow-lg"
        >
          Explore My Work
        </motion.button>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8"
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
}
