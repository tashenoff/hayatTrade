"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import productsData from '../../../data/products.json';

export default function ProductDetail({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === parseInt(id, 10));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.fullDescription}</p>
      <Link href="/">
        Назад к каталогу
      </Link>
    </div>
  );
}
