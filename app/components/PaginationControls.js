// components/PaginationControls.js
import React from 'react';
import PageButton from './PageButton';

const PaginationControls = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className='flex justify-between py-5'>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Предыдущая
      </PageButton>
      <div className='flex space-x-2'>
        {Array.from({ length: totalPages }, (_, i) => (
          <PageButton
            key={i + 1}
            onClick={() => onPageChange(i + 1)}
            disabled={i + 1 === currentPage}
          >
            {i + 1}
          </PageButton>
        ))}
      </div>
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Следующая
      </PageButton>
    </div>
  );
};

export default PaginationControls;
