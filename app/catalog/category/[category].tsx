// pages/catalog/category/[category].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import productsData from '../../../data/products.json';

interface Product {
    id: number;
    name: string;
    description: string;
    image: string;
    whatsapp: string;
    category: string;
}

interface CategoryPageProps {
    products: Product[];
    category: string;
}

const CategoryPage = ({ products, category }: CategoryPageProps) => {
    return (
        <>
            <h1>Товары категории: {category}</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <img src={product.image} alt={product.name} />
                        <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">
                            Связаться в WhatsApp
                        </a>
                        {/* Добавляем ссылку на подробную информацию о продукте */}
                        <Link href={`/catalog/category/${encodeURIComponent(category)}/${product.id}`}>
                            <a>Подробнее</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const categories = Array.from(new Set(productsData.map(product => product.category)));

    const paths = categories.map(category => ({
        params: { category },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const category = params?.category as string;

    const filteredProducts = productsData.filter(product => product.category === category);

    return {
        props: {
            products: filteredProducts,
            category,
        },
    };
};

export default CategoryPage;
