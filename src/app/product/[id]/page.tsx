'use client'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { CgShoppingCart } from 'react-icons/cg'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { client, urlFor } from '../../../../sanity/lib/client'
// import { iProduct } from '@/lib/interfaces'
import { ProdcutDetailImages } from '@/components/ProductDetailsImage'
import { Loading } from '@/components/loading'
import { PortableText } from '@portabletext/react'
 
const ProdcutDetails = ({ params }: { params: { id: string } }) => {
    type MyType = { 
        _id: string,
        name: string,
        price: number,
        description: any,
        image:  any,
        type: string
    };
    const [itemQty, setItemQty] = useState<number>(0);
    const [imagIndex, setImagIndex] = useState<number>(0);
    const [data, setData] = useState({} as MyType);
    const [loading, setLoading] = useState(true as boolean);

    function derceamentQty () {
         setItemQty(itemQty+1)
    }

    const increamentQty = () => {
        const current_qty = itemQty-1;
        (current_qty < 1)? setItemQty(1): setItemQty(current_qty)
     }

    useEffect(()=>{
        
        const fetchData = async () => {
            const data = await client.fetch(`*[_type == 'product' && _id == '${params.id}']`)
            setData(data[0])
            setLoading(false)
        }
        fetchData();
        
        
       },[params.id])


     if(loading){
        return <Loading />
     } 
 
     return (
        <main className='bg-[#fcfcfc] pb-10'>
            <div className='mx-32'>
                <div className='flex justify-center py-16 gap-4'>
                    <div className='flex flex-2 gap-4'>
                        <ProdcutDetailImages image={data.image} />
                    </div>

                    <div className='flex flex-col flex-1 gap-10 mt-16'>
                        <div className='name-and-category'>
                            <h3 className='text-2xl font-normal leading-8 tracking-wider text-black'>{data.name}</h3>
                            <span className='text-xl font-semibold opacity-30'>{data.type}</span>
                        </div>
                        <div>
                            <p className='text-base font-bold basis-4 tracking-wider'>SELECT SIZE</p>
                            <ul className='flex gap-4 mt-4'>
                                <li className='flex w-10 h-10 justify-center items-center rounded-full cursor-pointer text-base text-black font-bold leading-4 tracking-wider hover:shadow-md'>XS</li>
                                <li className='flex w-10 h-10 justify-center items-center rounded-full cursor-pointer text-base text-black font-bold leading-4 tracking-wider hover:shadow-md'>S</li>
                                <li className='flex w-10 h-10 justify-center items-center rounded-full cursor-pointer text-base text-black font-bold leading-4 tracking-wider hover:shadow-md'>M</li>
                                <li className='flex w-10 h-10 justify-center items-center rounded-full cursor-pointer text-base text-black font-bold leading-4 tracking-wider hover:shadow-md'>L</li>
                                <li className='flex w-10 h-10 justify-center items-center rounded-full cursor-pointer text-base text-black font-bold leading-4 tracking-wider hover:shadow-md'>XL</li>
                            </ul>
                        </div>
                        <div className='flex gap-8'>
                            <h4 className='text-lg font-bold basis-4 tracking-wider'>Quantity: </h4>
                            <div className='flex gap-4'>
                            <span className='flex border-2 border-black p-2 justify-center items-center rounded-full bg-white hover:bg-gray-100' onClick={ increamentQty } ><AiOutlineMinus /></span>
                                <span className='text-lg leading-8 w-7 text-center'>{ itemQty }</span>
                                <span className='flex border-2 border-black p-2 justify-center items-center rounded-full bg-white hover:bg-gray-100' onClick={ derceamentQty } ><AiOutlinePlus /></span>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <Button className='px-8'><CgShoppingCart className='mr-2' size={20} />Add to Cart</Button>
                            <p className='text-4xl font-light leading-10'>${data.price}</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-8 pt-8 px-16 py-16 bg-white border-gray-300 border-1'>
                    <div className='flex relative border-b-2 border-[#c4c4c4]'>
                        <div className="font-extrabold text-9xl leading-[151px] text-[#f2f3f7] opacity-70">Overview</div>
                        <h2 className='absolute font-bold text-2xl tracking-wider text-[#212121] pb-8 top-[45%] opacity-100'>Product Information</h2>
                    </div>
                    <div className='flex justify-center'>
                        <h4 className='flex-[1_1_0%] font-bold leading-5 tracking-wider text-[#666]'>PRODUCT DETAILS</h4>
                        <div className='flex-[2_1_0%] leading-7 font-light tracking-widest'>  
                            <PortableText value={data.description} />
                         </div>
                    </div>
                    <div className='flex justify-center'>
                        <h4 className='flex-[1_1_0%] font-bold leading-5 tracking-wider text-[#666]'>PRODUCT CARE</h4>
                        <ul className='flex-[2_1_0%] leading-7 font-light tracking-widest'>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>consectetur adipiscing elit</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>  
    )
}
export default ProdcutDetails