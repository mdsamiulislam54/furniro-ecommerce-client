import { useQuery } from "@tanstack/react-query";
import React from "react";

const useFilteredProducts = (filters ) => {
  const { category, minPrice, maxPrice, rating } = filters;
  console.log(filters)

  const queryString = new URLSearchParams({
    ...(category && { category }),
    ...(minPrice && { minPrice  } ||0),
    ...(maxPrice && { maxPrice } ||0),
    ...(rating && { rating }),
  }).toString();
  console.log(queryString);
  const { data =[], isError, isLoading } = useQuery({
    queryKey: ["filtered-products",queryString],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/shop/products?${queryString}`);
      const data= await res.json();
      return data
    },
  });


  return { data, isError, isLoading };
};

export default useFilteredProducts;
