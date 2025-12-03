import React from "react";
import StoreHeader from "./StoreHeader/StoreHeader";
import ProductGrid from "./ProductGrid/ProductGrid";

const product = [
  {
    title: "Portátil Moderno",
    price: "€1200.00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB-DH2yhQa5BsWweq98IqX3mOE1b0DkuZ84budH5NJgqoiqCmZv7ZgoUc-418RZRPiDkExssKji2iSpjGdW5sqlw8RL-Yx-2hdbWvw674AuSwAEeD46B3Q3E8ngweqG_UFINy8CicxdnGafK7P3zov-Vpc5xSN2gn51CmCXwcX9XsOmA2zWui-vDlRok53VJQm7NSyGQHUo-Un4H3L2S53UP0AOAkGryfVBrIVWOflGtCD647g--xddI1DfCCJEThhH6yFNeEoUvHzw",
  },
];

export const MainProducts = () => {
  return (
    <main>
      <StoreHeader />
      <ProductGrid products={product} />
    </main>
  );
};
