import Image from "next/image"
import { Button } from "../ui/button"
import { BsCart2 } from 'react-icons/bs'
export const Hero = () => {
    return (
        <div className="mx-32 grid grid-cols-2 gap-8 mt-16">
            <div className="flex flex-col gap-5 pt-12 relative">
                <div className="bg-[#e1edff] text-center text-blue-600 h-11 w-32 font-bold rounded-md flex items-center justify-center">
                    <p>Sale 70%</p>
                </div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">An Industrial Take on Streetwear</h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
                </p>
                <Button className="w-2/6 text-lg h-14 mt-2">
                    <BsCart2 className="mr-2 text-xl" /> Start Shopping
                </Button>


                <div className='flex flex-row justify-between absolute inset-x-0 bottom-0'>
                    <img src={'/Featured1.png'} width={100} height={35} alt='img' />
                    <img src={'/Featured2.png'} width={100} height={35} alt='img' />
                    <img src={'/Featured3.png'} width={100} height={35} alt='img' />
                    <img src={'/Featured4.png'} width={100} height={35} alt='img' />
                </div>

            </div>


            <div className="bg-[#ffece3] w-[600px] rounded-full">
                <img className="-top-2" src={'/header.png'} alt="Main Image" width={650} height={650} />
            </div>
        </div>
    )
}