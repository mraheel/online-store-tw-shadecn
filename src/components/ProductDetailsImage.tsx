'use client'
import React, { useState } from "react"
import { urlFor } from "../../sanity/lib/client"

interface Props {
    image: any
}

export const ProdcutDetailImages: React.FC<Props>  =  ({ image }) => {
    
    const [imagIndex, setImagIndex] = useState<number>(0);
    const handleChangeImage = (i:number) => {
        setImagIndex(i)
    }
    
    return <>
        <div className='flex flex-col gap-4'>

            {image?.map((items: any, ind: number) => {
                return <img onClick={()=> handleChangeImage(ind)} key={ind} alt='Small Image' src={urlFor(items).width(100).height(100).url()} width={100} height={100} className='hover:cursor-pointer' />
            })}
        </div>
        <div className='w-4/5 h-full'>
            {image &&
                <img src={urlFor(image[imagIndex]).width(750).height(700).url()} alt='Main Image' height={700} width={750} />
            }
        </div>
    </>
}