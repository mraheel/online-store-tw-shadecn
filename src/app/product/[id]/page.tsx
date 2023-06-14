import ProductDetails from '@/components/productDetails'
import { client } from '../../../../sanity/lib/client'

 
const fetchData = async (_id: string) => {
    const result =  await client.fetch(`*[_type == 'product' && _id == '${_id}'][0]`)
    return result
}

const ProdcutDetails = async ({ params }: { params: { id: string } }) => {
    const data = await fetchData(params.id)
     return (
        <main className='bg-[#fcfcfc] pb-10'>
            <div className='mx-32'>
                <ProductDetails product={data} />
            </div>
        </main>  
    )
}
export default ProdcutDetails