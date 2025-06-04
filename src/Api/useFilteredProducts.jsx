import axios from "axios";
import { useState, useEffect } from "react";
import useAuth from "../Hooks/UserAuth/UserAuth";

const useFilteredProducts = (filters) => {
  const { category, minPrice, maxPrice, rating } = filters;
  const { user } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const queryString = new URLSearchParams({
          ...(category && { category }),
          ...(minPrice && { minPrice }),
          ...(maxPrice && { maxPrice }),
          ...(rating && { rating }),
          ...(user?.email && { email: user.email }),
        }).toString();

        const response = await axios.get(
          `http://localhost:5000/shop/products?${queryString}`,
          {
            withCredentials: true, // cookie পাঠানোর জন্য
          }
        );
        console.log(response.data)
        setData(response.data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchFilteredProducts();
    }
  }, [category, minPrice, maxPrice, rating, user]);

  return { data, loading, error };
};

export default useFilteredProducts;
