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
            ©2025 Lucas Rojas {"{Dev}"} Shopping. Todos los derechos reservados.
          </p>

          <div className={styles.logoBox}>
            <span className={styles.logoText}>Shopping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
