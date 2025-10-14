import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface SearchResult {
  title: string;
  description: string;
  url: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
}

export function SearchResults({ results, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-3xl mx-auto mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-black/40 border border-[#00ff00]/10 rounded-xl p-6 animate-pulse">
              <div className="h-6 bg-[#00ff00]/5 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-[#00ff00]/5 rounded w-full mb-2"></div>
              <div className="h-4 bg-[#00ff00]/5 rounded w-2/3"></div>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-4"
      >
        {results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black/40 border border-[#00ff00]/10 rounded-xl p-6 hover:bg-[#00ff00]/5 transition-colors duration-300"
          >
            <h3 className="text-xl font-medium text-white mb-2">{result.title}</h3>
            <p className="text-white/70 mb-4">{result.description}</p>
            <a
              href={result.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#00ff00] hover:text-[#00ff00]/80 transition-colors duration-200"
            >
              Learn more
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}