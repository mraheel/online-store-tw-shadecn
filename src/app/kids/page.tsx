import { Product } from "@/components/section/product"
import { client } from "../../../sanity/lib/client"
import { iProduct } from "@/lib/interfaces"

const getAllMaleProducts = async  () => {
  const data = await client.fetch(`*[_type=='product' && categorySet == 'kids']{
    _id,
    name,
    price,
    description,
    image
  } | order(_createdAt desc)`)
  return data;
}

export default async function Home() {
    
   
    const allMaleProducts:iProduct[] = await getAllMaleProducts();

    return (
        <div className="mx-32 my-16 grid grid-cols-4 grid-rows-4 gap-16 justify-between justify-items-center">
            {allMaleProducts?.map(prod => (
                <Product key={prod._id} allProduct={ prod } />
            ))}
        </div>
    )
}