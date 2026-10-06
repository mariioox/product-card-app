interface ProductCardProps {
  title: string;
  price: number;
  inStock: boolean;
}

function ProductCard({ title, price, inStock }: ProductCardProps) {
  return (
    <article className="product-card">
      <h2>{title}</h2>
      <p className="price">${price}</p>
      {!inStock && <p className="out-of-stock">Out of stock</p>}
    </article>
  );
}

export default ProductCard;
