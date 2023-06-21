import { EventBanner } from "@/components/section/EventBanner";
import { FeatureBanner } from "@/components/section/FeatureBanner";
import {RecommendedProducts} from "@/components/section/RecommendedProducts";
import { Hero } from "@/components/section/hero";
import { NewsLetter } from "@/components/section/newsletter";
import { Product } from "@/types/product";
import { client } from "../../sanity/lib/client";

const getFeaturedProducts = async () => {
  const feature_items:Product[] = await client.fetch(`*[_type=='product' && featured=='yes']{
    _id,
    name,
    price,
    image,
    type,
    description,
    materials
  } | order(_createdAt desc) [0..7]`)
  return feature_items
}


export default async function  Home() {

  const featureItems = await getFeaturedProducts();
  return (
   <>
    <Hero />
    <EventBanner />
    <RecommendedProducts items={ featureItems } />
    <FeatureBanner />
    <NewsLetter />
   </>
  )
}
