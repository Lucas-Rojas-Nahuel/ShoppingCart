import CartTableStyles from "./CartTable.module.css";
import SummaryStyles from "./CartSummary.module.css";

export default function CartPage() {
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
              {/* -------- Producto #1 -------- */}
              <tr>
                <td>
                  <div className={CartTableStyles.product}>
                    <div
                      className={CartTableStyles.image}
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGtI0-nTUpVynHrDKdZM4J-xgP9auSTRSaffwyr0zBa0rdOUwfOTGUPWg_ZGH1a-927g3LWNBG3MAEXkHO-96oodLRYw6fAxiO_aX8XjQwpKf8TtL2Keldb02-MVfOiYdEJu7C--8-QeuSRZIFul7-g3VkskcGVFma9mFPhBBuUmGO1XY3k6hSBBQ1HH903mb-3blhEAmqcnauozkPaehYPRMJUkZn1ydS2mQgb3hxQCIA9t1uA6lWv9yu6DUVbGN4evfWrcVvwb74')",
                      }}
                    ></div>

                    <div>
                      <p className={CartTableStyles.productName}>
                        Zapatillas Deportivas Clásicas
                      </p>
                      <p className={CartTableStyles.productDesc}>
                        Talla 42, Negro
                      </p>
                    </div>
                  </div>
                </td>

                <td className={CartTableStyles.hideMd}>$85.00</td>

                <td>
                  <div className={CartTableStyles.counter}>
                    <button>-</button>
                    <input type="text" defaultValue="1" />
                    <button>+</button>
                  </div>
                </td>

                <td className={CartTableStyles.hideMdRight}>$85.00</td>
                
                <td>
                  <button className={CartTableStyles.delete}>🗑</button>
                </td>
              </tr>

              {/* -------- Producto #2 -------- */}
              <tr>
                <td>
                  <div className={CartTableStyles.product}>
                    <div
                      className={CartTableStyles.image}
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f')",
                      }}
                    ></div>

                    <div>
                      <p className={CartTableStyles.productName}>
                        Auriculares Bluetooth Bass+
                      </p>
                      <p className={CartTableStyles.productDesc}>
                        Con cancelación activa de ruido
                      </p>
                    </div>
                  </div>
                </td>

                <td className={CartTableStyles.hideMd}>$120.00</td>

                <td>
                  <div className={CartTableStyles.counter}>
                    <button>-</button>
                    <input type="text" defaultValue="2" />
                    <button>+</button>
                  </div>
                </td>

                <td className={CartTableStyles.hideMdRight}>$240.00</td>

                <td>
                  <button className={CartTableStyles.delete}>🗑</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ------------------- RESUMEN DE COMPRA ------------------- */}
        <aside className={SummaryStyles.box}>
          <p className={SummaryStyles.title}>Resumen</p>

          <div className={SummaryStyles.row}>
            <span>Subtotal</span>
            <span>$325.00</span>
          </div>

          <div className={SummaryStyles.row}>
            <span>Envío</span>
            <span>$10.00</span>
          </div>

          <div className={SummaryStyles.total}>
            <strong>Total</strong>
            <strong>$335.00</strong>
          </div>

          <button className={SummaryStyles.pay}>Proceder al pago</button>
        </aside>
      </div>
    </div>
  );
}
