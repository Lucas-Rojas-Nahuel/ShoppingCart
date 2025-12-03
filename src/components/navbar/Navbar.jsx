import React from "react";
import { Link } from "react-router";
import navbaCss from "./navbar.module.css";

import { CartIcon } from "./CartIcon/CartIcon";
export const Navbar = () => {
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
            <Link className={navbaCss.link} to="/product">
              Products
            </Link>
          </li>
        </ul>
        <CartIcon count={3} />
      </nav>
    </header>
  );
};
