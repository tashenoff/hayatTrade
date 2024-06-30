import { useRouter } from 'next/router';
import products from '../../data/products.json';
import contacts from '../../data/contacts.json';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find(p => p.id.toString() === id);

  if (!product) {
    return <div>Продукт не найден</div>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} width={300} height={300} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Категория: {product.category}</p>
      <a href={product.whatsapp}>Связаться в WhatsApp</a>
      <div>
        <h2>Контактная информация</h2>
        <p>Телефон: {contacts.phone}</p>
        <p>Адрес: {contacts.address}</p>
        <a href={contacts.whatsapp}>Связаться с нами</a>
      </div>
    </div>
  );
}
