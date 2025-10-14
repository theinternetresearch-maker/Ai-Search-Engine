import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center mb-6">
        <Brain className="w-12 h-12 text-[#00ff00]" />
      </div>
      <h1 className="text-4xl md:text-6xl font-rajdhani font-light text-white mb-4">
        AI Search Engine
      </h1>
      <p className="text-xl font-rajdhani font-light text-white/80 max-w-2xl mx-auto">
        Discover insights and knowledge powered by artificial intelligence
      </p>
    </motion.div>
  );
}