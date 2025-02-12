// src\app\api\create-payment-intent\route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: NextRequest){
  
  try {
    const {amount} = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    })

    console.log("✅",paymentIntent);
    
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentId: paymentIntent.id,
      amount: paymentIntent.amount,
      created: paymentIntent.created
    });
    
  } 
  catch (error) {
    console.error("❌", error);
    return NextResponse.json({error},{status: 500})
  }
}