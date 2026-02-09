import useProductRaiting from "../../../hooks/useProductRaiting";
import ProductCard from "../../products/ProductCard/ProductCard";
import styles from "./NewArrivals.module.css";

export default function NewArrivals({ products }) {
  const { filtered } = useProductRaiting(products);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Novedades</h2>

      <div className={styles.grid}>
        {filtered.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
