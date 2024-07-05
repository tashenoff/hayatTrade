// components/CategoryFilter.tsx

import React from 'react';
import CategoryButton from './CategoryButton';

interface Props {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<Props> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className='flex space-x-4'>
      {categories.map(category => (
        <CategoryButton
          key={category}
          category={category}
          selected={selectedCategory === category}
          onClick={() => onSelectCategory(category)} // Pass category as argument here
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
