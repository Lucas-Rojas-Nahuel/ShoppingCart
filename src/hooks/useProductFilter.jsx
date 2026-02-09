import { useEffect, useState } from "react";

export default function useProductFilter(data) {
   
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    if (!data) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFiltered(
      category === "all"
        ? data
        : data.filter((product) => product.category === category)
    ); 
  }, [data, category]);

  return { filtered, category, setCategory };
}
