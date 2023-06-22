'use client'
import { Product } from "@/types/product"
import Image from "next/image"
import { urlFor } from "../../../../sanity/lib/client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {GoArrowLeft} from 'react-icons/go'

interface Props{
    products: Product[],
    amount: number
}

const CartHoverCard:React.FC<Props> = ({ products, amount }) =>{
    return (
        <>
        { products.map((item)=>(
                <div key={item._id} className="flex items-center py-5">
                    <div className="flex w-full">
                        <div className="">
                            <Image className="max-w-none rounded-lg" alt="Product Image" src={urlFor(item.image && item.image[0]).width(50).height(66).url()} width={50} height={66} />
                        </div>
                        <div className="flex flex-col ml-4">
                            <span className="font-light text-sm">{item.quantity} x { item.name }</span>
                            <span className="text-red-500 text-xs">{ item.type }</span>
                        </div>
                        <div className="text-sm font-medium">${ item.totalPrice }</div>
                    </div>
                </div> 
            )) }

            { (Number(products.length) > 0)? (
                    <div className="flex justify-between">
                        <Link href={'/cart'}>
                            <Button className="tracking-widest">Checkout</Button>
                        </Link>
                        <h3 className="font-semibold leading-10">${amount.toLocaleString(undefined, { minimumFractionDigits: 2})}</h3>
                    </div>
                 ) : (
                <div className="flex flex-col gap-4 justify-between">
                    <p>Looks like you haven&apos;t added any items yet.</p>
                    <Link href={'/products'} className="flex text-blue-400 hover:underline-offset-4"><GoArrowLeft className="mt-1" />Continue Shopping</Link>
                </div>
                )
            }
        </>
    )
}
export default CartHoverCard