import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import FeatureImg from '/public/feature.png'

export const FeatureBanner = () => {
    return (
        <div className="mt-16 mb-16 bg-gradient-to-b from-transparent to-[#fbfcff] from-20% to-10% pb-10">
            <div className='mx-32'>
                <div className='flex justify-end px-32 pb-8'>
                    <h1 className="text-5xl base w-[45%] font-bold leading-[55px]">Unique and Authentic Vintage Designer Jewellery</h1>
                </div>

                <div className='flex flex-row bg-[#fbfcff] gap-1 bg-transparent'>
                    <div className="grid grid-cols-2 gap-2 w-full relative">
                        <div className="text-[#2121210b] text-8xl font-extrabold absolute leading-[110px]">
                            Different from others
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4 w-8/12">Using Good Quality Materials</h3>
                            <p className="text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">100% Handmade Products</h3>
                            <p className="text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Modern Fashion Design</h3>
                            <p className="text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Discount for Bulk Orders</h3>
                            <p className="text-base font-light">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='flex gap-8 w-full'>
                        <Image src={FeatureImg} width={300} alt='img' />
                        <div className="flex flex-col m-auto">
                            <p className="text-lg font-light text-justify leading-7">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                            <Link href={'/products'}>
                                <Button className='mt-3 text-left' type='button'>See All Product</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}