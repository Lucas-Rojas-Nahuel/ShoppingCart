import App from "../App";
import { Cart } from "../components/pages/Cart";
import { Products } from "../components/pages/Products";
import ScrollToTop from "../components/ScrollToTop";

const routes = [
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
  },
  {
    path: "/product",
    element: (
      <>
        <ScrollToTop />
        <Products />
      </>
    ),
  },
  {
    path: "/shoppingCart",
    element: (
      <>
        <ScrollToTop />
        <Cart />
      </>
    ),
  },
];

export default routes;
