"use client";

import { Global_Context } from '@/context/Context';
import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
 
    const { categories, setCategories,selectedCategory, setSelectedCategory } = useContext(Global_Context);    
    const { data: session, status } = useSession()
     const userEmail = session?.user?.email
    
    useEffect(()=>{
        const fetchCategories = async()=>{
          const response = await fetch("https://fakestoreapi.com/products/categories");
          const data = await response.json();
          return data; 
        }
     
fetchCategories().then(data=>setCategories(data)); 

    })
  
    return (
    <nav className="w-full justify-between flex items-center h-[3rem] px-3 py-2 bg-slate-400  " >
     <ul className=' hidden md:flex gap-3 items-center ' >
      { categories.map((item, index)=>(
       <li  onClick={()=>setSelectedCategory(item)} className={` ${item.toLowerCase()===selectedCategory?"text-white": "text-black"} uppercase font-bold cursor-pointer`} key={index} >{item}</li>
      )) }   
     </ul>
     <h3 className='text-zinc-200' >
     { status==="authenticated"? <button onClick={() => signOut()}>Sign out</button>:<button onClick={() => signIn("github")}>Sign in</button>}
      <Link href="/cart" >Cart</Link>
     </h3>
    </nav>
  )
}

export default Navbar