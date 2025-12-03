import styles from "./NewArrivals.module.css";
import { MdAddShoppingCart } from "react-icons/md";
export default function NewArrivals() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Novedades</h2>

      <div className={styles.grid}>
        {/* CARD 1 */}
        <div className={styles.card}>
          <a href="#">
            <img
              className={styles.productImg}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCarrstg2fesKguAky03VMj33dhdsf4B_37A4V00JbGlc3-3-1X78kMD7z1EpWUKoi6jPh4LGqIPZQZBng3PphIyk4tkYvm-BIjW1qkyS-yMUs_N2JiKSca67NjIu-GRVe0lCmZjm1pJ52ZEPHceV6lkpD0SPel55z3bS2YZJQrSXxtamOrB9ZtIkOfOt1KS-7_ZBJbeyjEcCCjAxik02bKsq4evC7wQLfjuczlkOLx91dcmkJ_N_9xUOKHlU1WXz4oc2CaHFKiu_3Y"
            />
          </a>

          <div className={styles.info}>
            <h3 className={styles.productTitle}>Reloj Moderno</h3>
            <p className={styles.productDesc}>Accesorio Elegante</p>

            <div className={styles.priceRow}>
              <p className={styles.price}>$199.99</p>

              <button className={styles.addBtn}>
                <span className="material-symbols-outlined">
                  <MdAddShoppingCart />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/*  CARD 2 */}
        <div className={styles.card}>
          <a href="#">
            <img
              className={styles.productImg}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCarrstg2fesKguAky03VMj33dhdsf4B_37A4V00JbGlc3-3-1X78kMD7z1EpWUKoi6jPh4LGqIPZQZBng3PphIyk4tkYvm-BIjW1qkyS-yMUs_N2JiKSca67NjIu-GRVe0lCmZjm1pJ52ZEPHceV6lkpD0SPel55z3bS2YZJQrSXxtamOrB9ZtIkOfOt1KS-7_ZBJbeyjEcCCjAxik02bKsq4evC7wQLfjuczlkOLx91dcmkJ_N_9xUOKHlU1WXz4oc2CaHFKiu_3Y"
            />
          </a>

          <div className={styles.info}>
            <h3 className={styles.productTitle}>Reloj Moderno</h3>
            <p className={styles.productDesc}>Accesorio Elegante</p>

            <div className={styles.priceRow}>
              <p className={styles.price}>$199.99</p>

              <button className={styles.addBtn}>
                <span className="material-symbols-outlined">
                  <MdAddShoppingCart />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/*  CARD 3 */}
        <div className={styles.card}>
          <a href="#">
            <img
              className={styles.productImg}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCarrstg2fesKguAky03VMj33dhdsf4B_37A4V00JbGlc3-3-1X78kMD7z1EpWUKoi6jPh4LGqIPZQZBng3PphIyk4tkYvm-BIjW1qkyS-yMUs_N2JiKSca67NjIu-GRVe0lCmZjm1pJ52ZEPHceV6lkpD0SPel55z3bS2YZJQrSXxtamOrB9ZtIkOfOt1KS-7_ZBJbeyjEcCCjAxik02bKsq4evC7wQLfjuczlkOLx91dcmkJ_N_9xUOKHlU1WXz4oc2CaHFKiu_3Y"
            />
          </a>

          <div className={styles.info}>
            <h3 className={styles.productTitle}>Reloj Moderno</h3>
            <p className={styles.productDesc}>Accesorio Elegante</p>

            <div className={styles.priceRow}>
              <p className={styles.price}>$199.99</p>

              <button className={styles.addBtn}>
                <span className="material-symbols-outlined">
                  <MdAddShoppingCart />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* CARD 4 */}
        <div className={styles.card}>
          <a href="#">
            <img
              className={styles.productImg}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCarrstg2fesKguAky03VMj33dhdsf4B_37A4V00JbGlc3-3-1X78kMD7z1EpWUKoi6jPh4LGqIPZQZBng3PphIyk4tkYvm-BIjW1qkyS-yMUs_N2JiKSca67NjIu-GRVe0lCmZjm1pJ52ZEPHceV6lkpD0SPel55z3bS2YZJQrSXxtamOrB9ZtIkOfOt1KS-7_ZBJbeyjEcCCjAxik02bKsq4evC7wQLfjuczlkOLx91dcmkJ_N_9xUOKHlU1WXz4oc2CaHFKiu_3Y"
            />
          </a>

          <div className={styles.info}>
            <h3 className={styles.productTitle}>Reloj Moderno</h3>
            <p className={styles.productDesc}>Accesorio Elegante</p>

            <div className={styles.priceRow}>
              <p className={styles.price}>$199.99</p>

              <button className={styles.addBtn}>
                <span className="material-symbols-outlined">
                  <MdAddShoppingCart />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
