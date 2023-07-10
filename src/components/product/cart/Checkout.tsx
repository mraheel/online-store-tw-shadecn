"use client";
import getStripePromise from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Product } from "@/types/product";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

// const products = [
//     {
//       product: 1,
//       name: "Stripe Product",
//       price: 400,
//       quantity: 3,
//     },
//     {
//       product: 2,
//       name: "Stripe Product2",
//       price: 40,
//       quantity: 2,
//     },
//     {
//       product: 3,
//       name: "Stripe Product23",
//       price: 4000,
//       quantity: 1,
//     },
//   ];

interface Props {
  products: Product[];
}
const StripeCheckoutButton: React.FC<Props> = ({ products }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleStripeCheckout = async () => {
    if (!session?.user) {
      toast.error(`Please sign in before checkout.`)
      router.push("/account");
    } else {
      setLoading(true);
      const stripe = await getStripePromise();
      const response = await fetch("/api/stripe-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
        body: JSON.stringify(products),
      });

      const data = await response.json();
      if (data.session) {
        stripe?.redirectToCheckout({ sessionId: data.session.id });
      }
    }
  };

  return (
    <>
      {loading && (
        <Button className="py-3 text-sm text-white uppercase w-full" disabled>
          <Loader2 className="animate-spin mr-4" size={16} />
          Please wait
        </Button>
      )}

      {!loading && (
        <Button
          onClick={() => handleStripeCheckout()}
          className="py-3 text-sm text-white uppercase w-full"
        >
          Checkout
        </Button>
      )}
    </>
  );
};
export default StripeCheckoutButton;
