import { useState } from 'react';
import { SearchResult } from '../types';
import { mockSearchResults } from '../data/mockData';

export function useSearch() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setIsLoading(true);
    // Simulated search results
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResults(mockSearchResults);
    setIsLoading(false);
  };

  return {
    results,
    isLoading,
    handleSearch
  };
}