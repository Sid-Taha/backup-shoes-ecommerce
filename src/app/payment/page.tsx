"use client"

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

function Payment() {
    
  const searchParams =  useSearchParams()
  const totalAmount = searchParams.get("amount")

  return (
    <div className="mt-[99px]">
    <Elements  stripe={stripePromise} options={{mode: "payment", currency: "usd", amount: Number(totalAmount)}} >
      <CheckoutForm amount={Number(totalAmount)}/>
    </Elements>
    </div>
  )
}

export default Payment