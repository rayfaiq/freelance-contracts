import Stripe from "stripe"

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "", {
  apiVersion: "2024-06-20",
  typescript: true,
})

export const getStripeSession = async (plan: "premium" | "subscription") => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: plan === "premium" ? process.env.STRIPE_PREMIUM_PRICE_ID : process.env.STRIPE_SUBSCRIPTION_PRICE_ID,
        quantity: 1,
      },
    ],
    mode: plan === "subscription" ? "subscription" : "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    customer_email: "user@example.com", // Will be filled from form
    payment_method_types: ["card"],
    billing_address_collection: "required",
    allow_promotion_codes: true,
    metadata: {
      plan: plan,
    },
  })

  return session
}
