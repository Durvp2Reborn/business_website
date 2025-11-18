
import { useOutletContext } from 'react-router-dom';

const products = [
  {
    id: 101,
    name: 'The Sweet Garden Signature Wedding Cake',
    price: 1200.0,
    description:
      'Custom multi-tier wedding cake available in flavors like vanilla bean, chocolate ganache, lemon lavender, red velvet, and champagne sponge. Hand-piped finishes, edible flowers, gold leaf accents, and custom sugar work available.',
    image: 'https://via.placeholder.com/400x300?text=Signature+Wedding+Cake',
  },
  {
    id: 102,
    name: 'Everlasting Garden Centerpiece Collection',
    price: 250.0,
    description:
      'Luxurious centerpieces in signature styles: Romantic Garden, Modern Minimalist, and Vintage Elegance. Seasonally-sourced sustainable blooms arranged in premium vessels.',
    image: 'https://via.placeholder.com/400x300?text=Garden+Centerpiece',
  },
  {
    id: 103,
    name: 'Artisan Charcuterie & Grazing Table',
    price: 450.0,
    description:
      'Gourmet grazing table with artisanal cheeses, cured meats, seasonal fruits, honeycomb, nuts, olives, and crackers. Available in multiple sizes for events.',
    image: 'https://via.placeholder.com/400x300?text=Charcuterie+Table',
  },
];

function Products() {
  const { addItemToCart } = useOutletContext<any>();

  function handleAddToCart(product: any) {
    addItemToCart(product);
  }

  return (
    <div className="products-container">
      <h1>Our Products</h1>

      <div className="products-grid">
        {products.map(function(product: any) {
          return (
            <div className="product-card" key={product.id}>
              <img className="product-media" src={product.image} alt={product.name} />
              <div className="product-content">
                <h2>{product.name}</h2>
                <p className="product-desc">{product.description}</p>
                <div className="product-price">${product.price.toFixed(2)}</div>
              </div>
              <div className="product-action">
                <button onClick={function() { handleAddToCart(product); }} className="btn-primary">Add to cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;