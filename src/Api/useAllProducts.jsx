import { useQuery } from '@tanstack/react-query';
import React from 'react'

const useAllProducts = () => {
      const { data ,isError,isLoading} = useQuery({
    queryKey: ["all-products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/all-products");
      return res.json();
    },
  });
  return (
    {
        data,
        isError,
        isLoading
    }
  )
}

export default useAllProducts