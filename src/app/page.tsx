import { EventBanner } from "@/components/section/EventBanner";
import { FeatureBanner } from "@/components/section/FeatureBanner";
import {RecommendedProducts} from "@/components/section/RecommendedProducts";
import { Hero } from "@/components/section/hero";
import { NewsLetter } from "@/components/section/newsletter";




export default async function  Home() {

  return (
   <>
    <Hero />
    <EventBanner />
    <RecommendedProducts />
    <FeatureBanner />
    <NewsLetter />
   </>
  )
}
