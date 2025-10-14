import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchBox } from './components/SearchBox';
import { SearchResults } from './components/SearchResults';
import { Header } from './components/Header';
import { useSearch } from './hooks/useSearch';

function App() {
  const { results, isLoading, handleSearch } = useSearch();

  return (
    <div className="min-h-screen bg-black gradient-bg">
      <div className="container mx-auto px-4 py-16">
        <Header />
        <SearchBox onSearch={handleSearch} />
        <SearchResults results={results} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;