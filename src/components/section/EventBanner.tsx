import Image  from 'next/image'
import event1 from '../../../public/event1.png' 
import event2 from '../../../public/event2.png' 
import event3 from '../../../public/event3.png' 
import { Button } from '../ui/button'
export const EventBanner = () => {
    return (
        
        <section className='flex flex-col py-16 px-32'>
            <div className='flex flex-col gap-4 items-center mb-8'>
                <span className='text-xs font-bold text-blue-600 tracking-wider'>PROMOTIONS</span>
                <h2 className='text-3xl font-bold tracking-wider'>Our Promotions Events</h2>
            </div>
  
            <div className='flex flex-row  gap-6'>
                <div className='flex flex-col gap-4 w-4/5'>
                    <div className='flex flex-row bg-gray-300 justify-between items-center px-8'>
                        <div>
                            <h3 className='text-3xl font-bold'>GET UP TO <span>60%</span></h3>
                            <p className='text-lg font-normal tracking-wider'>For the summer season</p>
                        </div>
                        <Image src={event1} alt='event' />
                    </div>

                    <div className='flex flex-col bg-black text-white justify-between items-center pt-12 pb-8'>
                        <h3 className='text-4xl font-extrabold leading-[45px] tracking-wider mb-4'>GET 30% Off</h3>
                        <p className='text-sm font-normal tracking-wider leading-5'>USE PROMO CODE</p>
                        <Button className='bg-[#474747] py-2 px-8 h-8 mt-2 leading-5 font-bold text-md tracking-[.25em]'>DINEWEEKEND SALE</Button>
                    </div>
                </div>

                <div className='flex flex-row gap-4'>
                    <div className='flex flex-col justify-between bg-[#efe1c7] pt-4'>
                        <div className='ml-6 text-base leading-6 tracking-wider'>
                            <p>Flex Sweatshirt</p>
                            <div>
                                <span className='line-through'>$100.00</span>
                                <span className='font-bold ml-2'>$75.00</span>
                            </div>
                        </div>
                        <Image src={event2} alt='event' />
                    </div>

                    <div className='flex flex-col justify-between bg-[#d7d7d9] pt-4'>
                        <div className='ml-6 text-base leading-6 tracking-wider'>
                            <p>Flex Sweatshirt</p>
                            <div>
                                <span className='line-through'>$225.00</span>
                                <span className='font-bold ml-2'>$190.00</span>
                            </div>
                        </div>
                        <Image src={event3} alt='event' />
                    </div>

                     
                </div>
            </div>  

        </section>
    )
}