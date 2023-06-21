'use client'
import { client } from '../../../sanity/lib/client'
import { RecommededProductCard } from '../product/recommendedProductCard'
import { Product } from '@/types/product'

import { Navigation, A11y, Lazy, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/app/home.page.css'
import React from 'react';
// const getFeaturedProducts = async  () => {

//     const data = await client.fetch(`*[_type=='product' && featured=='yes']{
//       _id,
//       name,
//       price,
//       image,
//       type,
//       description,
//       materials
//     } | order(_createdAt desc) [0..7]`)
//     return data;
//   }

interface Props{
    items: Product[]
}
export const RecommendedProducts:React.FC<Props> =  ( { items }) => {

    // const feature_items:Product[] = await client.fetch(`*[_type=='product' && featured=='yes']{
    //     _id,
    //     name,
    //     price,
    //     image,
    //     type,
    //     description,
    //     materials
    //   } | order(_createdAt desc) [0..7]`)

    // const feature_items:Product[] = await getFeaturedProducts();

    return (
        
        <section className='flex flex-col py-16 px-32'>
            <div className='flex flex-col gap-4 items-center mb-8'>
                <span className='text-xs font-bold text-blue-600 tracking-wider'>Recommended For You</span>
                <h2 className='text-3xl font-bold tracking-wider'>Check What We Have</h2>
            </div>
  
            <div className='flex flex-row relative justify-between'>
             <Swiper
                breakpoints={{
                    // width >= 300
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 100
                    },
                    // width >= 1000
                    1000: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    // width >= 1260
                    1260: {
                        slidesPerView: 4,
                        spaceBetween: 0
                    }
                }}
                modules={[Navigation, A11y, Autoplay, Pagination]}
                spaceBetween={10}
                slidesPerView={4}
                navigation
               
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
          }}
                > 


                {items && items.map(prod => (
                    <SwiperSlide  key={prod._id}>
                        <RecommededProductCard key={prod._id} item={ prod } />
                    </SwiperSlide>
                ))}


            </Swiper>
            </div>  

        </section>
    )
}