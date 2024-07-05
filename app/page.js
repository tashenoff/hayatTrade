"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import productsData from '../data/products.json';
import SearchBar from './components/SearchBar';

const ITEMS_PER_PAGE = 5;

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <h1>Каталог продуктов</h1>
      <div className='container mx-auto'>
        <SearchBar onSearch={handleSearch} />
        <div className='grid grid-cols-4 gap-4'>
          {paginatedProducts.map(product => (
            <div className='border-white border' key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <p>{product.shortDescription}</p>
              <Link href={`/product/${product.id}`}>
                Просмотр продукта
              </Link>
            </div>
          ))}
        </div>
        <div className='flex justify-between py-5'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Предыдущая
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Следующая
          </button>
        </div>
      </div>
    </div>
  );
}
