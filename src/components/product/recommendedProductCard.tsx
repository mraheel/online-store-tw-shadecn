'use client'
import Image from "next/image"
import { urlFor } from '../../../sanity/lib/client'
import Link from "next/link"
import { Product } from "@/types/product"

interface Props{
    item: Product
}

export const RecommededProductCard:React.FC<Props> = ({ item }) => {
    return (
        // transition ease-in-out delay-150 hover:scale-105 duration-300
        <div className='h-full px-1 relative'>
           
            <Image alt="Product Image" src={urlFor(item.image && item.image[0]).width(320).url()} width={320} height={350} />
            <Link href={`/product/${item._id}`}>
                <p className="mt-2 tracking-wide leading-6">{ item.name }</p>
                <p className="text-base font-light leading-4 text-gray-600 mt-2">{ item.type }</p>
                <p className="mt-4 text-xl leading-6">${ item.price }</p>
            </Link>
        </div>
    )
}