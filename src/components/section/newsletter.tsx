import { Button } from "../ui/button"
import { HiOutlineMail } from "react-icons/hi";

export const NewsLetter = () => {
    return (
      <section className="mx-32 flex flex-col justify-center items-center">
        <div className="text-[#f2f3f7] text-9xl font-bold absolute -z-1">
          Newsletter
        </div>
        <h1 className="relative text-4xl font-bold mb-4">
          Subscribe Our Newsletter
        </h1>
        <p className="relative text-lg mb-4">
          Get the latest information and promo offers directly
        </p>

        <form className="relative flex gap-2 w-1/2">
          <input
            className="border border-gray-600 rounded-sm bg-[#fcfcfc] px-1 h-10 w-full"
            placeholder="Email Address"
          />
          <Button className="rounded w-60"><HiOutlineMail size={20} className="mr-2" />Send Newsletter</Button>
        </form>
      </section>
    );
}