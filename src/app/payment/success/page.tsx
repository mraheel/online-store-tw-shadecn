import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TiTick } from 'react-icons/ti'

const PaymentSuccess = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white p-6  md:mx-auto flex flex-col justify-center items-center">
        <TiTick className="mb-10" size={60} />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
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

export default PaymentSuccess