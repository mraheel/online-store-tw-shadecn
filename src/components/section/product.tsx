import Image from "next/image"
import { iProduct } from "@/lib/interfaces"
import { urlFor } from '../../../sanity/lib/client'
import Link from "next/link"

export const Product:iProduct = ({ allProduct:{
    _id, 
    name, 
    image, 
    price
}}) => {
    
    return (
        <div>
            <div className="w-64">
                <Link href={`/product/${_id}`}>
                    <Image alt="Product Image" src={urlFor(image && image[0]).width(250).height(270).url()} width={250} height={270} />
                    <p className="text-lg mt-2 font-semibold tracking-wide leading-6">{ name }</p>
                    <p className="text-base font-semibold leading-4 text-gray-400 mt-2">Sweater</p>
                    <p className="mt-4 text-2xl leading-6 font-bold">${ price }</p>
                </Link>
                
            </div>
        </div>
    )
}