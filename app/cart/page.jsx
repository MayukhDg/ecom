"use client";

import { Global_Context } from '@/context/Context';
import React, { useContext } from 'react'

const Cart = () => {
  
  const { cartItems } = useContext(Global_Context);
  
  return (
    <div>
      { cartItems.map((item, idx)=>(
       <div key={idx} >
        <p>{item.title}</p>
        <p>{item.quantity}</p>
       </div>       
      )) }
    </div>
  )
}

export default Cart