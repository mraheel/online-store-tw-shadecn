'use client'
import { Product } from "@/types/product"
import Image from "next/image"
import { urlFor } from "../../../../sanity/lib/client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
interface Props{
    products: Product[]
}

const CartHoverCard:React.FC<Props> = ({ products }) =>{
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
            <div className="flex justify-between">
            <Link href={'/cart'}>
                <Button>Checkout</Button>
            </Link>
            
            <h3 className="font-semibold leading-10">$14.00</h3>
            </div>
            
        </>
    )
}
export default CartHoverCard