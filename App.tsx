import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SearchBox } from './SearchBox';
import { SearchResults } from './SearchResults';
import { Header } from './Header';
import { useSearch } from './useSearch';

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