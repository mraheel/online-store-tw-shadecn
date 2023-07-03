import { ProductCard } from "@/components/product/productCard"
import { Product } from "@/types/product"
import { getProducts } from "@/lib/product.utils";

export default async function Home() {
       
    const allMaleProducts:Product[] = await getProducts('female');
    return (
        <div className="mx-32 my-16 grid grid-cols-4 grid-rows-2 gap-16 justify-between justify-items-center">
            {allMaleProducts?.map(prod => (
                <ProductCard key={prod._id} item={ prod } />
            ))}
           
        </div>
    )
}