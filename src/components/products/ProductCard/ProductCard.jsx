import styles from "./ProductCard.module.css";
import { useCart } from "../../../context/CartContext";
import { useState } from "react";

export default function ProductCard({ item }) {
  const { products, addProduct, addQuantity, removeQuantity } = useCart();
  const cartItem = products.find((p) => p.product.id === item.id);
  const count = cartItem?.count ?? 0;
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.contentImg}>
        {!imgLoaded && <div className={styles.imgSkeleton}></div>}
        <img
          src={item.image} 
          alt={item.title}
          loading="lazy"
          className={styles.image}
          onLoad={() => setImgLoaded(true)}
          style={{ visibility: imgLoaded ? "visible" : "hidden" }}
        />
      </div>
 
      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.price}>${item.price}</p>
        {count === 0 ? (
          <button onClick={() => addProduct(item)} className={styles.button}>
            Agregar al carrito
          </button>
        ) : (
          <div className={styles.containCounter}>
          <p>Cantidad:</p>
            <div className={styles.counter}>
              <button className={styles.btnRemove} onClick={() => removeQuantity(item.id)}>-</button>
              <p>{count}</p>
              <button className={styles.btnAdd} onClick={() => addQuantity(item.id)}>+</button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
