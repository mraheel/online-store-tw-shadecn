'use client'
import Image from "next/image"
import { urlFor } from '../../../sanity/lib/client'
import Link from "next/link"
import { Button } from "../ui/button"
import { Product } from "@/types/product"

import { useDispatch } from "react-redux";
import { CartActions } from '@/store/slice/cart.slice'
import { toast } from 'react-hot-toast'

interface Props{
    item: Product
}

export const ProductCard:React.FC<Props> = ( {item} ) => {
   
    const dispath = useDispatch()

    const handleAddItemInCart = (item:Product) => {
        dispath(CartActions.addItemToCart({product:item, quantity:1}))
        toast.success(`1 x ${item.name} successfully added in cart.`)
    }

    return (
        <div className="">
            <div className="w-64">
                    <Link href={`/product/${item._id}`} className="flex justify-center">
                        <Image className="drop-shadow-lg rounded-lg" alt="Product Image" src={urlFor(item.image && item.image[0]).width(250).height(270).url()} width={250} height={270} />
                    </Link>
                    <div className="flex flex-col px-1">
                        <p className="mt-2 tracking-wide leading-6 h-12 overflow-hidden">{ item.name }</p>
                        <p className="text-base font-light leading-4 text-gray-600 mt-2">{ item.type }</p>
                        <div className="flex justify-between">
                            <p className="text-xl leading-10">${ item.price }</p> 
                            <Button onClick={() => handleAddItemInCart(item) }>Add To Cart</Button>
                        </div>
                    </div>
                    
                
            </div>
        </div>
    )
}