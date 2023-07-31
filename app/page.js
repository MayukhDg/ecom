"use client";

import Navbar from '@/components/Navbar'
import { Global_Context } from '@/context/Context';
import React, { useContext, useEffect } from 'react'
import ProductCard from '@/components/ProductCard';

const Home = () => {
  
  const { products, setProducts, selectedCategory } = useContext(Global_Context);
  
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch (`https://fakestoreapi.com/products/category/${selectedCategory.toLowerCase()}`)
      const data = await response.json();
      return data; 
    }
    
    fetchProducts().then(data=>setProducts(data))
  },[selectedCategory])
  
  return (
    <div>
      <Navbar/>
      <div className=' bg-slate-950 flex flex-wrap gap-3 pt-5 pb-6' >
        { products.map((item, index)=>(
        <ProductCard key={index} 
        id={item.id}
        title={item.title}
        image={item.image}
        description = {item.description}
        rating={item.rating.rate}
        price={item.price}        
        />
        )) }
      </div>
    </div>
  )
}

export default Home