 
import styles from "./ProductCard.module.css";
import { useCart } from "../../../context/CartContext";

export default function ProductCard({ item }) {
  const { products, addProduct, addQuantity, removeQuantity } = useCart();
  const cartItem = products.find((p) => p.product.id === item.id);
  const count = cartItem?.count ?? 0;
 
  return (
    <article className={styles.card}>
      <img src={item.image} alt={item.title} className={styles.image} />

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price}</p>
        {count === 0 ? (
          <button onClick={() => addProduct(item)} className={styles.button}>
            Agregar al carrito
          </button>
        ) : (
          <div>
            <span onClick={() => removeQuantity(item.id)}>-</span>
            <span>{count}</span>
            <span onClick={() => addQuantity(item.id)}>+</span>
          </div>
        )}
      </div>
    </article>
  );
}
