import { Product } from "@/types/product";
import { client } from "../../../sanity/lib/client"
import { ProductCard } from "@/components/product/productCard";
const getAllProducts = async  () => {
  const data = await client.fetch(`*[_type=='product']{
    _id,
    name,
    price,
    image,
    type,
    description,
    materials
  } | order(_createdAt desc)`)
  return data;
}

export default async function Home() {
    
   
    const allProducts:Product[] = await getAllProducts();

    return (
        <div className="mx-32 my-16 grid grid-cols-4 grid-rows-2 gap-16 justify-between justify-items-center">
            {allProducts?.map(prod => (
                <ProductCard key={prod._id} item={ prod } />
            ))}
        </div>
    )
}