import styles from "./StoreHeader.module.css";

export default function StoreHeader({ category, setCategory }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Tienda</h2>
      <p className={styles.subtitle}>Selecciona tus productos favoritos</p>

      <div className={styles.chipsWrapper}>
        <button
          className={`${styles.chip} ${ 
            category === "all" ? styles.active : ""
          } `}
          onClick={() => setCategory("all")}
        >
          Todos
        </button>
        <button
          className={`${styles.chip} ${
            category === "men's clothing" ? styles.active : ""
          } `}
          onClick={() => setCategory("men's clothing")}
        >
          Ropa de Hombre
        </button>
        <button
          className={`${styles.chip} ${
            category === "jewelery" ? styles.active : ""
          } `}
          onClick={() => setCategory("jewelery")}
        >
          Joyería
        </button>
        <button
          className={`${styles.chip} ${
            category === "electronics" ? styles.active : ""
          } `}
          onClick={() => setCategory("electronics")}
        >
          Electronica
        </button>
        <button
          className={`${styles.chip} ${
            category === "women's clothing" ? styles.active : ""
          } `}
          onClick={() => setCategory("women's clothing")}
        >
          Ropa de Mujer
        </button>
      </div>
    </div>
  );
}
