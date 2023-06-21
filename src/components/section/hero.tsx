import Image from "next/image"
import { Button } from "../ui/button"
import { BsCart2 } from 'react-icons/bs'
import Link from 'next/link'
import f1image from '../../../public/Featured1.png'
import f2image from '../../../public/Featured2.png'
import f3image from '../../../public/Featured3.png'
import f4image from '../../../public/Featured4.png'


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
                <Link href={'/products'} className="w-2/6 text-lg h-14 mt-2">
                    <Button><BsCart2 className="mr-2 text-xl" /> Start Shopping</Button>
                </Link>


                <div className='flex flex-row justify-between absolute inset-x-0 bottom-0'>
                    <Image src={f1image} width={100}  alt='img' />
                    <Image src={f2image} width={100}  alt='img' />
                    <Image src={f3image} width={100}  alt='img' />
                    <Image src={f4image} width={100}  alt='img' />
                    
                </div>

            </div>


            <div className="bg-[#ffece3] w-[600px] rounded-full">
                <Image className="-top-2" src={'/header.png'} alt="Main Image" width={650} height={650} />
            </div>
        </div>
    )
}