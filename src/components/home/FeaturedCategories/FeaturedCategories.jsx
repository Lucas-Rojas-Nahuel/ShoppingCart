import { Link } from "react-router";
import styles from "./FeaturedCategories.module.css";

export default function FeaturedCategories({ setCategory }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Categorías Destacadas</h2>

      <div className={styles.grid}>
        {/* CARD 1 */}
        <Link
          className={styles.card}
          onClick={() => setCategory("men's clothing")}
          to="/products"
        >
          <div
            className={`${styles.image}`}
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGl1HIKqMnFgfC3URxRs2aoWnQUhR-5ojEWh0h3HS_0BfxsmEI3X1Jd9pmXUMkLl_P5V6TZNHggXtZYIXG0WcClXXRlI_O65kxdICyLTLSHcgt2NAL7QlXFhcEf3MhiUIGNicVXy626J_oM7tQrXvGtsBqyqGC5-E8s3V0Kz6fSJXzqtll2fyBkz3gZHbz3ijTWpijP0-jNuHu1sExUfRN3XqLaGaDM0U5E-tNt27OZ563RMdStEn4cc47ASaxxDerI2SVu9SW4MMZ')`,
            }}
          >
             
          </div>

          <div className={styles.gradient}></div>

          <div className={styles.textContainer}>
            <p className={styles.cardTitle}>Ropa de Hombre</p>
          </div>
        </Link>
        {/* CARD 2 */}
        <Link
          className={styles.card}
          onClick={() => setCategory("jewelery")}
          to="/products"
        >
          <div
            className={`${styles.image}`}
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAna2cFTV15lWaw-3ytnGEEBc2IIBM2sNd6Be7p74t6Vg7dn7-yj9G79-gQKRlvOwX7IBAYyl8YyrBYSKTB5s9l2LqBsPn1ZGMGlFSI2SxnbnP-vRYurXPWInwKn67gSiDmbAMx8D9QRljLqWf4SYoN0hunv_epxFrpI8EY0MK-dfQdbNMBOuIa-BtRcpto46a6CQ7AmCAPm8C_qvVdZPgcmU3whd-eX2pdtAZPMe9y3ihtTH_D5S4AqvJ-sDwfb8GgD9zEYQDmegej')`,
            }}
          ></div>

          <div className={styles.gradient}></div>

          <div className={styles.textContainer}>
            <p className={styles.cardTitle}>Accesorios de Mujer</p>
          </div>
        </Link>
        {/* CARD 3 */}
        <Link
          className={styles.card}
          onClick={() => setCategory("women's clothing")}
          to="/products"
        >
          <div
            className={`${styles.image}`}
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2021/11/15/05/25/boutique-6796399_1280.jpg')`,
            }}
          ></div>

          <div className={styles.gradient}></div>

          <div className={styles.textContainer}>
            <p className={styles.cardTitle}>Ropa de Mujer</p>
          </div>
        </Link>
        {/* CARD 4 */}
        <Link
          className={styles.card}
          onClick={() => setCategory("electronics")}
          to="/products"
        >
          <div
            className={`${styles.image}`}
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/29/05/08/apple-1867461_1280.jpg')`,
            }}
          ></div>

          <div className={styles.gradient}></div>

          <div className={styles.textContainer}>
            <p className={styles.cardTitle}>Electronica</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
