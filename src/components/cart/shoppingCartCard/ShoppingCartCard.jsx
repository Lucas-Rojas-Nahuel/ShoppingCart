import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import CartTableStyles from "../../../pages/stylesCart/CartTable.module.css";

export default function ShoppingCartCard({ item }) {
  const { addQuantity, removeQuantity, removeProduct } = useCart();
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <tr> 
      <td>
        <div className={CartTableStyles.product}>
          <div className={CartTableStyles.image}>
            {!imgLoaded && <div className={CartTableStyles.imgSkeleton}></div>}
            <img
              src={item.product.image}
              loading="lazy"
              alt={item.product.title}
              onLoad={() => setImgLoaded(true)}
              style={{ visibility: imgLoaded ? "visible" : "hidden" }}
            />
          </div>

          <div>
            <p className={CartTableStyles.productName}>{item.product.title}</p>
          </div>
        </div>
      </td>

      <td className={CartTableStyles.hideMd}>${item.product.price}</td>

      <td>
        <div className={CartTableStyles.counter}>
          <button onClick={() => removeQuantity(item.product.id)}>-</button>
          <p>{item.count}</p>
          <button onClick={() => addQuantity(item.product.id)}>+</button>
        </div>
      </td>

      <td className={CartTableStyles.hideMdRight}>
        ${(item.count * item.product.price).toFixed(2)}
      </td>

      <td>
        <button
          onClick={() => removeProduct(item.product.id)}
          className={CartTableStyles.delete}
        >
          🗑
        </button>
      </td>
    </tr>
  );
}
