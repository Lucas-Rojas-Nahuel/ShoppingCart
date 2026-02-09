import { useEffect, useState } from "react";

export default function useProductRaiting(data) {
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (!data) return null;
    setFiltered(
      [...data].sort((a, b) => b.rating.rate - a.rating.rate).splice(0, 4)
    );
  }, [data]);

  return { filtered };
}
