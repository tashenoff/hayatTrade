// components/ProductCard.js
import Link from 'next/link';

const ProductCard = ({ product }) => {
    return (
        <div className='shadow-lg border border-primary border-opacity-20 p-5'>
            <div className='relative overflow-hidden' style={{ aspectRatio: '1/1' }}>
                <img
                    src={product.image}
                    alt={product.name}
                    className='object-cover w-full h-full'
                />
            </div>
            <h2 className='py-2'>{product.name}</h2>
            <p className='py-2'>{product.shortDescription}</p>
            <p className='text-gray-500 text-sm py-2'>Артикул: {product.sku}</p>
            <Link className='block border border-primary border-opacity-20 hover:bg-primary w-full py-3 uppercase text-[12px] font-bold hover:text-white text-center' href={`/product/${product.id}`}>
              
                    Подробнее
                
            </Link>
        </div>
    );
};

export default ProductCard;
