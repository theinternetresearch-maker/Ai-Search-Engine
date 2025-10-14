import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  className?: string;
}

export function SearchBox({ onSearch, className }: SearchBoxProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn(
        "relative w-full max-w-3xl mx-auto",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything..."
          className="w-full px-6 py-4 text-lg bg-black/50 border border-[#00ff00]/20 rounded-2xl text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#00ff00]/30 transition-all duration-300 search-gradient"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 hover:bg-[#00ff00]/10 rounded-xl transition-colors duration-200"
        >
          <Search className="w-6 h-6 text-[#00ff00]" />
        </button>
      </motion.div>
    </form>
  );
}