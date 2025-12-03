import styles from "./ProductCard.module.css";

export default function ProductCard({ item }) {
  return (
    <article className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.image} />

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price}</p>

        <button className={styles.button}>
          Agregar al carrito
        </button>
      </div>
    </article>
  );
}
