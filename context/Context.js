"use client";

import { createContext, useState } from "react";


export const Global_Context = createContext();



const Context = ({children})=>{
  
  
  const [categories, setCategories] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("electronics");  
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  
  return (
   <Global_Context.Provider value={{
    categories, setCategories, 
    selectedCategory, setSelectedCategory, 
    products, setProducts,
    cartItems, setCartItems,
    totalPrice, setTotalPrice
    }} >
    { children }
   </Global_Context.Provider>
  )
}


export default Context;