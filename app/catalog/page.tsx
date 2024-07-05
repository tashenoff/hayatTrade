// pages/index.tsx
"use client";
import React, { useState, useEffect } from 'react';
import productsData from '../../data/products.json';
import SearchBar from '../components/SearchBar';
import PaginationControls from '../components/PaginationControls';
import ProductCard from '../components/ProductCard';
import CategoryButton from '../components/CategoryButton';

interface Product {
  id: number;
  name: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  sku: string;
}

const ITEMS_PER_PAGE = 4;

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    setProducts(productsData as Product[]);
  }, []);

  const filteredProducts = products.filter(product =>
    (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.sku.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedCategory === '' || product.category === selectedCategory)
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
    setSelectedCategory('');
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const categories = [''].concat(Array.from(new Set(products.map(product => product.category))));

  return (
    <div className='container mx-auto'>
      <div className='flex justify-between py-5'>
        <h1>Каталог продуктов</h1>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className='flex space-x-4 mb-4'>
        {categories.map(category => (
          <CategoryButton
            key={category}
            category={category}
            selected={selectedCategory === category}
            onClick={handleCategoryChange}
          />
        ))}
      </div>

      <div className='grid grid-cols-4 gap-4'>
        {paginatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Home;
