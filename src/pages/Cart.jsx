import CartTableStyles from "./stylesCart/CartTable.module.css";
import SummaryStyles from "./stylesCart/CartSummary.module.css";
import { useCart } from "../context/CartContext";
import ShoppingCartCard from "../components/cart/shoppingCartCard/ShoppingCartCard";

export const Cart = () => {
  const { products, totalPrice } = useCart();

  const shipment = 10;
  return (
    <div className={CartTableStyles.wrapper}>
      {/* ➤ Título */}
      <div className={CartTableStyles.titleBox}>
        <p className={CartTableStyles.title}>Mi Carrito de Compras</p>
      </div>

      <div className={CartTableStyles.layout}>
        {/* ------------------- TABLA DE PRODUCTOS ------------------- */}
        <div className={CartTableStyles.tableContainer}>
          <table className={CartTableStyles.table}>
            <thead>
              <tr>
                <th>Producto</th>
                <th className={CartTableStyles.hideMd}>Precio</th>
                <th>Cantidad</th>
                <th className={CartTableStyles.hideMdRight}>Total</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {products.map((item) => (
                <ShoppingCartCard key={item.id} item={item} />
              ))}
            </tbody>
          </table>
        </div>

        {/* ------------------- RESUMEN DE COMPRA ------------------- */}
        <aside className={SummaryStyles.box}>
          <p className={SummaryStyles.title}>Resumen</p>

          <div className={SummaryStyles.row}>
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>

          <div className={SummaryStyles.row}>
            <span>Envío</span>
            <span>${shipment}</span>
          </div>

          <div className={SummaryStyles.total}>
            <strong>Total</strong>
            <strong>${totalPrice + shipment}</strong>
          </div>

          <button className={SummaryStyles.pay}>Proceder al pago</button>
        </aside>
      </div>
    </div>
  );
};
