import { useCart } from "../../../context/CartContext";
import CartTableStyles from "../../../pages/stylesCart/CartTable.module.css";

export default function ShoppingCartCard({ item }) {
  const { addQuantity, removeQuantity, clearCart } = useCart();

  return (
    <tr>
      <td>
        <div className={CartTableStyles.product}>
          <div
            className={CartTableStyles.image}
            style={{
              backgroundImage: `url('${item.product.image}')`,
            }}
          ></div>

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
        ${item.count * item.product.price}
      </td>

      <td>
        <button onClick={() => clearCart()} className={CartTableStyles.delete}>
          🗑
        </button>
      </td>
    </tr>
  );
}
