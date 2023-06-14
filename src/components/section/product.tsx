import Image from "next/image"
// import { iProduct } from "@/lib/interfaces"
import { urlFor } from '../../../sanity/lib/client'
import Link from "next/link"


export const Product = ( props:any ) => {
    const { _id, name, image, price, type } = props.allProduct
 
    return (
        <div>
            <div className="w-64">
                <Link href={`/product/${_id}`}>
                    <Image alt="Product Image" src={urlFor(image && image[0]).width(250).height(270).url()} width={250} height={270} />
                    <p className="mt-2 tracking-wide leading-6">{ name }</p>
                    <p className="text-base font-light leading-4 text-gray-600 mt-2">{ type }</p>
                    <p className="mt-4 text-xl leading-6">${ price.toLocaleString(undefined, { minimumFractionDigits: 2 }) }</p>
                </Link>
            </div>
        </div>
    )
}