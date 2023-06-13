import Image from "next/image"
import { urlFor } from "../../sanity/lib/client"

export const ProdcutDetailImages =  ({ image }: { image: any }) => {
    return <>
        <div className='flex flex-col gap-4'>

            {image?.map((items: any, ind: number) => {
                return <Image key={ind} alt='Small Image' src={urlFor(items).width(100).height(100).url()} width={100} height={100} className='hover:cursor-pointer' />
            })}
        </div>
        <div className='w-4/5 h-full'>
            {image &&
                <Image src={urlFor(image[0]).width(750).height(700).url()} alt='Main Image' height={700} width={750} />
            }
        </div>
    </>
}