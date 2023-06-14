import Image  from 'next/image'
import Link from 'next/link'
import b1 from '/public/001.png' 

export const RecommendedProducts = () => {
    return (
        
        <section className='flex flex-col py-16 px-32'>
            <div className='flex flex-col gap-4 items-center mb-8'>
                <span className='text-xs font-bold text-blue-600 tracking-wider'>Recommended For You</span>
                <h2 className='text-3xl font-bold tracking-wider'>Check What We Have</h2>
            </div>
  
            <div className='flex flex-row relative gap-6 justify-between'>
                <div className='h-full relative transition ease-in-out delay-150 hover:scale-105 duration-300'>
                    <Link href={`/`}>
                    <Image alt="Product Image" src={b1} height={300} />
                        <p className="mt-2 tracking-wide leading-6">AIRism Cotton Frill Short-Sleeve T-Shirt</p>
                        <p className="text-base font-light leading-4 text-gray-600 mt-2">Sweater</p>
                        <p className="mt-4 text-xl leading-6">$19.99</p>
                    </Link>
                    
                </div>
                <div className='h-full relative transition ease-in-out delay-150 hover:scale-105 duration-300'>
                    <Link href={`/`}>
                    <Image alt="Product Image" src={b1} height={300} />
                        <p className="mt-2 tracking-wide leading-6">AIRism Cotton Frill Short-Sleeve T-Shirt</p>
                        <p className="text-base font-light leading-4 text-gray-600 mt-2">Sweater</p>
                        <p className="mt-4 text-xl leading-6">$19.99</p>
                    </Link>
                    
                </div>
                <div className='h-full relative transition ease-in-out delay-150 hover:scale-105 duration-300'>
                    <Link href={`/`}>
                    <Image alt="Product Image" src={b1} height={300} />
                        <p className="mt-2 tracking-wide leading-6">AIRism Cotton Frill Short-Sleeve T-Shirt</p>
                        <p className="text-base font-light leading-4 text-gray-600 mt-2">Sweater</p>
                        <p className="mt-4 text-xl leading-6">$19.99</p>
                    </Link>
                    
                </div>
                <div className='h-full relative transition ease-in-out delay-150 hover:scale-105 duration-300'>
                    <Link href={`/`}>
                    <Image alt="Product Image" src={b1} height={300} />
                        <p className="mt-2 tracking-wide leading-6">AIRism Cotton Frill Short-Sleeve T-Shirt</p>
                        <p className="text-base font-light leading-4 text-gray-600 mt-2">Sweater</p>
                        <p className="mt-4 text-xl leading-6">$19.99</p>
                    </Link>
                    
                </div>
            </div>  

        </section>
    )
}