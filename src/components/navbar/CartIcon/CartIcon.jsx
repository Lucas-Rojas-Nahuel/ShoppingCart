import { Link } from "react-router";
import styles from "./CartIcon.module.css";
import { IoCartOutline } from "react-icons/io5";
export function CartIcon({ count = 0 }) {
  return (
    <Link to="/cart" className={styles.cart}>
      <span className={`${styles.icon} material-symbols-outlined`}>
        <IoCartOutline />
      </span>

      {count > 0 && <span className={styles.badge}>{count}</span>}
    </Link>
  );
}
 