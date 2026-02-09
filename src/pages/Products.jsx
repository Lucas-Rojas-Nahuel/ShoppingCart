import ProductGrid from "../components/products/ProductGrid/ProductGrid";
import StoreHeader from "../components/products/StoreHeader/StoreHeader";

export const Products = ({ filtered, category, setCategory }) => {
  return (
    <>
      <StoreHeader category={category} setCategory={setCategory} />
      <ProductGrid products={filtered} />
    </>
  );
};
