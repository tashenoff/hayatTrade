import products from '../../data/products.json';

export default function Catalog() {
  return (
    <div>
      <h1>Каталог</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width={150} height={150} />
            <h2><a href={`/product/${product.id}`}>{product.name}</a></h2>
            <p>{product.description}</p>
            <a href={product.whatsapp}>Связаться в WhatsApp</a>
          </div>
        ))}
      </div>
    </div>
  );
}
