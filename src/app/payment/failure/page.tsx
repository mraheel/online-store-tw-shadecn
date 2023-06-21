import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImCross } from 'react-icons/im'

const PaymentFailure = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white p-6  md:mx-auto flex flex-col justify-center items-center">
        
        
        <ImCross className="mb-10" size={30} />
        
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Failed!
          </h3>
          <p className="text-gray-600 my-2">
            There is something wrong with your secure online payment.
          </p>
          <p> Please try again later! </p>
          <div className="py-10 text-center">
            <Link href={'/'}>
                <Button >Continue Shopping</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentFailure