import styles from "./FeaturedCategories.module.css";

export default function FeaturedCategories() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Categorías Destacadas</h2>

      <div className={styles.grid}>
        {/* CARD 1 */}
        <a className={styles.card} href="#">
          <div
            className={`${styles.image}`}
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGl1HIKqMnFgfC3URxRs2aoWnQUhR-5ojEWh0h3HS_0BfxsmEI3X1Jd9pmXUMkLl_P5V6TZNHggXtZYIXG0WcClXXRlI_O65kxdICyLTLSHcgt2NAL7QlXFhcEf3MhiUIGNicVXy626J_oM7tQrXvGtsBqyqGC5-E8s3V0Kz6fSJXzqtll2fyBkz3gZHbz3ijTWpijP0-jNuHu1sExUfRN3XqLaGaDM0U5E-tNt27OZ563RMdStEn4cc47ASaxxDerI2SVu9SW4MMZ')`,
            }}
          ></div>

          <div className={styles.gradient}></div>

          <div className={styles.textContainer}>
            <p className={styles.cardTitle}>Ropa de Hombre</p>
          </div>
        </a>
        {/* CARD 2 */}
        <a className={styles.card} href="#">
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
        </a>
        {/* CARD 3 */}
        <a className={styles.card} href="#">
          <div
            className={`${styles.image}`}
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJoM3mJQvnRxFL3rTCHshhM0EOdITfYkDr0aOhhL759DrCu2UcZkPFGKpP085TBAIVwRFDaqku6yeCb9gCHTfNFFfiVpV-gDZeUEDVg8o5glHtGsmyKwKd2Vu7CYJjpAz8dH4xupe1HrGBkFk8RP_XMJVVuEmcFCBrihhEE2Z4UawhvoFaRrOAeegynRbZu0wfaL2VsIBh9ytByxQ9tx-dAGf8TmQ0n1BzZpd0JU86MVNIFWhEJVV-1kBKlGqD9Jcfslq6OfAHIzYh')`,
            }}
          ></div>

          <div className={styles.gradient}></div>

          <div className={styles.textContainer}>
            <p className={styles.cardTitle}>Decoración del Hogar</p>
          </div>
        </a>
        {/* CARD 4 */}
        <a className={styles.card} href="#">
          <div
            className={`${styles.image}`}
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdgXR4R258Ede7lPjMunMjnB00B9NZNBxOhwQZNWOP5tEa2ON4-_qJYFQne33iVP-Ald-rzr7IpwKb-ASeMTj74sqQLAIcmHKevDzYlZo5aWikBTxh10nFyH6Fh4xwbfIHyjAvge5cBJSk9h3uc-w6merIqoSp8ZBlKCEADt9BMAW8Jx1ciM_EJG1L05KjDTaIDbnB9KvFe4gzo_2ooj4oX8PIwjxdKmXOJFuBCEDe0VAntfQk5ximYbhqNS0fnSNP81577LqN_-PH')`,
            }}
          ></div>

          <div className={styles.gradient}></div>

          <div className={styles.textContainer}>
            <p className={styles.cardTitle}>Juguetes y Niños</p>
          </div>
        </a>
      </div>
    </section>
  );
}
