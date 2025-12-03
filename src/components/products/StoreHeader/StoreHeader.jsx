import styles from "./StoreHeader.module.css";

export default function StoreHeader() {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Tienda</h2>
      <p className={styles.subtitle}>Selecciona tus productos favoritos</p>

      <div className={styles.chipsWrapper}>
        <button className={styles.chip}>Todos</button>
        <button className={`${styles.chip} ${styles.active}`}>Ropa</button>
        <button className={styles.chip}>Accesorios</button>
        <button className={styles.chip}>Promos</button>
        <button className={styles.chip}>Edición limitada</button>
      </div>
    </div>
  );
}
