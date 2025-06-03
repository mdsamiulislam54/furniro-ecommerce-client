import React, { Children, createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || []);
    setCart(existingCart);
  }, []);

  const cartDelete = (id) => {
    Swal.fire({
      title: "Are you sure ",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#B88E2F",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your item has been deleted.", "success");
        const existingCart = cart.filter((item) => item._id !== id);
        localStorage.setItem("cart", JSON.stringify(existingCart));
        setCart(existingCart);
      }
    });
  };

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || []);
    const newCart = [...existingCart, product];

    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const cartInfo = {
    addToCart,
    cartDelete,
    cart,
  };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartContext;
