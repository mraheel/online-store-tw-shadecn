import Image  from 'next/image'
import event1 from '../../../public/event1.png' 
import event2 from '../../../public/event2.png' 
import event3 from '../../../public/event3.png' 
import { Button } from '../ui/button'
import Link from 'next/link'

export const FeatureProducts = () => {
    return (
        
        <section className='flex flex-col py-16 px-32'>
            <div className='flex flex-col gap-4 items-center mb-8'>
                <span className='text-xs font-bold text-blue-600 tracking-wider'>PROMOTIONS</span>
                <h2 className='text-3xl font-bold tracking-wider'>Check What We Have</h2>
            </div>
  
            <div className='flex flex-row relative gap-6 justify-between'>

                <div className='shrink-0 h-full relative transition ease-in-out delay-150 hover:scale-105 duration-300'>
                    <Link href={`/`}>
                        <Image alt="Product Image" src={'/001.png'} width={380} height={400} />
                        <p className="text-lg mt-2 font-semibold tracking-wide leading-6">AIRism Cotton Frill Short-Sleeve T-Shirt</p>
                        <p className="text-base font-semibold leading-4 text-gray-400 mt-2">Sweater</p>
                        <p className="mt-4 text-2xl leading-6 font-bold">$19.99</p>
                    </Link>
                    
                </div>
                
                <div className='shrink-0 h-full relative transition ease-in-out delay-150 hover:scale-105 duration-300'>
                    <Link href={`/`}>
                        <Image alt="Product Image" src={'/001.png'} width={380} height={400} />
                        <p className="text-lg mt-2 font-semibold tracking-wide leading-6">AIRism Cotton Frill Short-Sleeve T-Shirt</p>
                        <p className="text-base font-semibold leading-4 text-gray-400 mt-2">Sweater</p>
                        <p className="mt-4 text-2xl leading-6 font-bold">$19.99</p>
                    </Link>
                    
                </div>
                
                <div className='shrink-0 h-full relative transition ease-in-out delay-150 hover:scale-105 duration-300'>
                    <Link href={`/`}>
                        <Image alt="Product Image" src={'/001.png'} width={380} height={400} />
                        <p className="text-lg mt-2 font-semibold tracking-wide leading-6">AIRism Cotton Frill Short-Sleeve T-Shirt</p>
                        <p className="text-base font-semibold leading-4 text-gray-400 mt-2">Sweater</p>
                        <p className="mt-4 text-2xl leading-6 font-bold">$19.99</p>
                    </Link>
                    
                </div>

           



            </div>  

        </section>
    )
}