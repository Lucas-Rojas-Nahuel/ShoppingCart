import ProductGrid from "../components/products/ProductGrid/ProductGrid";
import StoreHeader from "../components/products/StoreHeader/StoreHeader";
import useProductFilter from "../hooks/useProductFilter";

import {useProducts} from '../context/ProductsContext'

export const Products = () => {
  const { products, setSearch } = useProducts();
  const { filtered, category, setCategory } = useProductFilter(products);
  return (
    <>
      <StoreHeader category={category} setCategory={setCategory} />
      <ProductGrid products={filtered} />
    </>
  );
};
