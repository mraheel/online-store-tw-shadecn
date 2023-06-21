'use client'
import Image from "next/image"
import { Search, ShoppingCart } from "lucide-react"
import Link from 'next/link'
import Logo from '/public/Logo.webp'
import { usePathname } from 'next/navigation';


import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

import { useSelector } from "react-redux";
import { TotalCartQuantity, CartProducts } from '@/store'
import CartHoverCard from "../product/cart/CartHoverCard"
import { Button } from "../ui/button"

export const NavBar = () => {
    const pathname = usePathname();
    const totalItemsInCart = useSelector(
        TotalCartQuantity
    );
    const products = useSelector(
        CartProducts
    );


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

            <div className="flex text-gray-600 border-2 border-gray-300 bg-white rounded-lg w-96">
                <Search className="m-2" />
                <input className="h-10 mx-2 w-full focus:outline-none" type="search" name="search" placeholder="Search" />
            </div>

            
                    
            <HoverCard>
                <HoverCardTrigger>
                
                <button>
                    <span className="relative inline-block text-xs leading-6 top-[12px] -right-[10px] h-6 w-6 z-10 text-center rounded-full bg-[#f02d34] text-white">{ totalItemsInCart }</span>
                    <ShoppingCart className="relative" />
                </button>   
                    
                </HoverCardTrigger>
                <HoverCardContent className="w-60">
                    <CartHoverCard products={ products} />
                </HoverCardContent>
            </HoverCard>
        </header>
    )
}