import React, { Children, createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const existingCart = JSON.parse(localStorage.getItem('cart')||[])
    setCart(existingCart)
  },[])

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") ||[]);
    const newCart = [...existingCart, product];
  
    localStorage.setItem("cart", JSON.stringify(newCart));
     setCart(newCart);
  };

  const cartInfo = {
    addToCart,
    cart
  }

  return <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>;
};

export default CartContext;
