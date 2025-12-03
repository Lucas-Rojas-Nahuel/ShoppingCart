 
import styles from "./HeroSection.module.css";
export const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container480}>
          <div className={styles.hero}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>Descubre Nuestra Nueva Colección</h1>
              <h2 className={styles.subtitle}>
                Estilos frescos para la nueva temporada.
              </h2>
            </div>

            <button className={styles.button}>
              <span className={styles.truncate}>Comprar Ahora</span>
            </button>
          </div>
        </div> 
      </div>
    </section>
  );
};
