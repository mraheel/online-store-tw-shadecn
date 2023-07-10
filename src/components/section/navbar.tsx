'use client'
import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react"
import Link from 'next/link'
import Logo from '/public/Logo.webp'
import { usePathname } from 'next/navigation';
import { VscAccount } from 'react-icons/vsc'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

import { useSelector } from "react-redux";
import { TotalCartQuantity, CartProducts, TotalCartAmount } from '@/store'
import CartHoverCard from "../product/cart/CartHoverCard"
import React, { useState } from "react"
import { Product } from "@/types/product"
import { urlFor } from "../../../sanity/lib/client"
import { getSearchProducts } from "@/lib/product.utils"
import { signOut, useSession } from "next-auth/react"
import { Button } from "../ui/button"

export const NavBar = () => {
    const { data:session } = useSession()
    const [search, setSearch] = useState<Product[]>([])
    
    const pathname = usePathname();
    const totalItemsInCart = useSelector(
        TotalCartQuantity
    );
    const products = useSelector(
        CartProducts
    );

    const cartAmount = useSelector(
        TotalCartAmount
    );

    
    const handleOnChange = async (e:React.ChangeEvent<HTMLInputElement>) => {
       const search_words = e.currentTarget.value
        if(search_words.length > 3){
            const data:Product[] = await getSearchProducts(`${search_words}`)
            setSearch(data)
        }else{
            setSearch([])
        }
    }

    return (
        <header className="flex mx-32 my-8 items-center justify-between">
            <Link href={'/'}>
                <Image src={Logo} priority={true} alt="Site Logo" width="150" />
            </Link>
            <nav className="flex items-center justify-center space-x-8">
                <Link href={'/male'} className={ pathname.startsWith('/male')? 'cursor-pointer font-medium border-solid border-b-4': 'cursor-pointer font-medium hover:border-b-4' }>Male</Link>
                <Link href={'/female'} className={ pathname.startsWith('/female')? 'cursor-pointer font-medium border-solid border-b-4': 'cursor-pointer font-medium hover:border-b-4' }>Female</Link>
                <Link href={'/kids'} className={ pathname.startsWith('/kids')? 'cursor-pointer font-medium border-solid border-b-4': 'cursor-pointer font-medium hover:border-b-4' }>Kids</Link>
                <Link href={'/products'} className={ pathname.startsWith('/products')? 'cursor-pointer font-medium border-solid border-b-4': 'cursor-pointer font-medium hover:border-b-4' }>All Products</Link>
            </nav>

            <div className="relative">
                <div className="flex text-gray-600 border-2 border-gray-300 bg-white rounded-lg w-96">
                    <Search className="m-2" />
                    <input autoComplete="off" onChange={handleOnChange} className="h-10 mx-2 w-full focus:outline-none" type="search" placeholder="Search" />
                </div>
                <div className="absolute bg-white z-10 shadow-lg rounded-md">
                    {
                        search.map((item)=>(
                            
                        <div key={item._id} className="flex items-center px-4 my-4"> 
                            <a href={`/product/${item._id}`}>
                                <div className="flex w-full">
                                    <div className="">
                                        <Image className="max-w-none rounded-lg" alt="Product Image" src={urlFor(item.image && item.image[0]).width(50).height(66).url()} width={50} height={66} />
                                    </div>
                                    <div className="flex flex-col ml-4">
                                        <span className="font-light text-sm">{item.quantity} x { item.name }</span>
                                        <span className="text-red-500 text-xs">{ item.type }</span>
                                        <div className="text-sm font-medium">${ Number(item.price).toLocaleString(undefined, {minimumFractionDigits: 2}) }</div>
                                    </div>
                                </div>  
                            </a>
                        </div> 
                        
                        ))
                    }
                </div>
            </div>
            
            <div className="relative flex gap-8">
                <HoverCard>
                    <HoverCardTrigger>
                    
                    <button className="relative -top-2">
                        <span className="relative inline-block text-xs leading-6 top-[12px] -right-[10px] h-6 w-6 z-10 text-center rounded-full bg-[#f02d34] text-white">{ totalItemsInCart }</span>
                        <ShoppingCart className="relative" />
                    </button>   
                        
                    </HoverCardTrigger>
                    <HoverCardContent className="w-60">
                        <CartHoverCard products={ products } amount={cartAmount} />
                    </HoverCardContent>
                </HoverCard>



                {
                    session?.user? (
                        <HoverCard>
                            <HoverCardTrigger>
                                <div className="flex gap-3">
                                    <label className="tracking-wider leading-[47px]">Hi,</label>
                                    <VscAccount size={25} className="relative top-3 cursor-pointer" />
                                </div>
                            </HoverCardTrigger>
                            <HoverCardContent className="w-60">
                                <ul className="flex flex-col gap-3">
                                    <li> {`Welcome ${session.user.name}`} </li>
                                    <li><button onClick={ ()=> signOut() }>Sign Out </button></li>
                                   
                                </ul>
                            </HoverCardContent>
                        </HoverCard>
                    ):(
                        <Link title="My Account" href={'/account'}>
                            <VscAccount size={25} className="relative top-3" />
                        </Link>
                    )
                }
                

                
            </div>     
            


        </header>
    )
}