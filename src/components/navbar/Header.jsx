import React from "react";
import { Link } from "react-router";
import navbaCss from "./navbar.module.css";

import { CartIcon } from "./CartIcon/CartIcon";
import { useCart } from "../../context/CartContext";
export const Header = () => {
  const { totalItems } = useCart();
  return (
    <header className={navbaCss.header}>
      <nav className={navbaCss.navContainer}>
        <h1>Shopping</h1>
        <ul className={navbaCss.ul}>
          <li>
            <Link className={navbaCss.link} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={navbaCss.link} to="/products">
              Products
            </Link>
          </li>
        </ul>
        <CartIcon count={totalItems} />
      </nav>
    </header>
  );
};
