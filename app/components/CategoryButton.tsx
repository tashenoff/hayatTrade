// components/CategoryButton.tsx
import React from 'react';

interface Props {
  category: string;
  selected: boolean;
  onClick: (category: string) => void;
}

const CategoryButton: React.FC<Props> = ({ category, selected, onClick }) => {
  return (
    <button
      className={`border rounded-full px-4 py-2 ${selected ? 'bg-gray-200' : ''}`}
      onClick={() => onClick(category)}
    >
      {category === '' ? 'Все' : category}
    </button>
  );
}

export default CategoryButton;
