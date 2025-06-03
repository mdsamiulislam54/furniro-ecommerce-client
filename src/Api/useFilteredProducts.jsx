import { useQuery } from "@tanstack/react-query";
import React from "react";

const useFilteredProducts = (filters = {}) => {
  const { category, minPrice, maxPrice, rating } = filters;

  const queryString = new URLSearchParams({
    ...(category && { category }),
    ...(minPrice && { minPrice }),
    ...(maxPrice && { maxPrice }),
    ...(rating && { rating }),
  }).toString();
  console.log(queryString);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["filtered-products",queryString],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/products?${queryString}`);
      const data= await res.json();
      return data
    },
  });

  return { data, isError, isLoading };
};

export default useFilteredProducts;
