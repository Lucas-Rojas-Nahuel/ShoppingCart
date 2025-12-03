import styles from "./ProductGrid.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ products }) {
    
    return (
    
    <section className={styles.grid}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
}
