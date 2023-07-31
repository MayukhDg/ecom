"use client";


import { Global_Context } from '@/context/Context';
import React, { useContext } from 'react'

const ProductCard = ({title, image, description, rating, price, id}) => {
  
  const { cartItems, setCartItems, setTotalPrice  } = useContext(Global_Context);
  

  
  const handleAdd = (title, price, id)=>{
   
    const itemExists = cartItems.find((item)=>{
     return item.id===id
    }) 
    
    if(!itemExists){
      setCartItems((prev)=>{
        return [...prev, { title, price, id, quantity:1 }]
      })
    }  else {
      const items = cartItems.map((item)=>{
        if(item.id===id){
          return { ...item, quantity:item.quantity+1 }
        } else{
          return item;
        }
      
      })
      setCartItems(items)
    }
    
   setTotalPrice((prev)=>{
    return prev+price
   })




  }


  const handleRemove = (title, price, id)=>{
      const item = cartItems.find((item)=>{
        return item.id===id;
      })
      
      if(!item){
        return;
      }

    if(item.quantity===1){
      const items = cartItems.filter((product)=>{
          return product.id!==id
      })
      setCartItems(items);
    } else {
      const items = cartItems.map((item)=>{
        if(item.id===id){
          return { ...item, quantity:item.quantity-1 }
        }  else{
          return item;
        }
      })
     setCartItems(items);
    }
    
    setTotalPrice((prev)=>{
    prev-price
    })


  }
  
  return (
    <div className=' w-[350px] px-3 py-3 flex-col text-center bg-zinc-600 mt-5 items-center ml-4 gap-2'  >
    <h3>{title}</h3>
    <img src={image}  alt={title}  height={300} width={300} className='object-contain mt-2'  />
    <p className='mt-2 mb-2' >{description}</p>
    <div className='flex items-center justify-between' >
     <p className='text-white font-semibold text-lg ' > Rating: {rating}</p>
     <p className='text-white font-semibold text-lg ' > Price: {price}</p>
    </div>
    <div className='flex items-center justify-between mt-3' >
     <button onClick={()=>handleAdd(title, price, id)} className='text-white rounded-2xl font-semibold text-lg bg-gray-500 px-3 py-3 ' >+</button>
     <button onClick={()=>handleRemove(title, price, id)}  className='text-white rounded-2xl font-semibold text-lg bg-gray-500 px-3 py-3 ' >-</button>
    </div>
    </div>
  )
}

export default ProductCard;


