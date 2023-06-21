import { Product } from "@/types/product";
import { client } from "../../../sanity/lib/client"
import { ProductCard } from "@/components/product/productCard"

const getAllMaleProducts = async  () => {
  const data = await client.fetch(`*[_type=='product' && categorySet == 'kids']{
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
    
   
    const allMaleProducts:Product[] = await getAllMaleProducts();

    return (
        <div className="mx-32 my-16 grid grid-cols-4 grid-rows-4 gap-16 justify-between justify-items-center">
            {allMaleProducts?.map(prod => (
                <ProductCard key={prod._id} item={ prod } />
            ))}
        </div>
    )
}