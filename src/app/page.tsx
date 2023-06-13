import { EventBanner } from "@/components/section/EventBanner";
import { FeatureBanner } from "@/components/section/FeatureBanner";
import { Hero } from "@/components/section/hero";
import { NewsLetter } from "@/components/section/newsletter";
import { groq } from 'next-sanity'

import { client } from "../../sanity/lib/client"
import { FeatureProducts } from "@/components/section/FeatureProducts";

// const getProducts = async  () => {
//   const data = await client.fetch(groq`*[_type=='product']`)
//   return data;
// }

export default async function  Home() {

  // const data =  await getProducts();


  return (
   <>
    <Hero />
    <EventBanner />
    <FeatureProducts />
    <FeatureBanner />
    <NewsLetter />
   </>
  )
}
