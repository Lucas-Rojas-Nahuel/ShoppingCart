import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.sectionTitle}>Tienda</h3>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href="#">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Carreras
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Prensa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Ayuda</h3>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href="#">
                  Contáctanos
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Envíos y Devoluciones
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Legal</h3>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href="#">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.sectionTitle}>Conecta</h3>
            <ul className={styles.list}>
              <li>
                <a className={styles.link} href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className={styles.link} href="#">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copy}>
            © 2024 Tienda. Todos los derechos reservados.
          </p>

          <div className={styles.logoBox}>
            <svg className={styles.logoIcon} viewBox="0 0 48 48">
              <path
                fill="currentColor"
                clipRule="evenodd"
                fillRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              />
            </svg>
            <span className={styles.logoText}>Tienda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
