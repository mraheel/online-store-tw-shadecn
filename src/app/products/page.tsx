import { Product } from "@/components/section/product"
import { client } from "../../../sanity/lib/client"
import { iProduct } from "@/lib/interfaces"

const getAllProducts = async  () => {
  const data = await client.fetch(`*[_type=='product']{
    _id,
    name,
    price,
    description,
    image
  } | order(_createdAt desc)`)
  return data;
}

export default async function Home() {
    
   
    const allProducts:iProduct[] = await getAllProducts();

    return (
        <div className="mx-32 my-16 grid grid-cols-4 grid-rows-4 gap-16 justify-between justify-items-center">
            {allProducts?.map(prod => (
                <Product key={prod._id} allProduct={ prod } />
            ))}
        </div>
    )
}