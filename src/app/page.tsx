"use client"

import { useState } from "react"
import { Check, FileText, Zap, CreditCard, ArrowRight, Star, Shield } from "lucide-react"

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<"premium" | "subscription">("premium")

  const pricing = {
    premium: {
      name: "Premium Templates",
      description: "Get all 3 niche-specific contracts",
      price: "Rp 150.000",
      features: [
        "Wedding Photographer Contract",
        "Woodworker Service Contract",
        "SaaS Writer Contract",
        "Editable in Word & PDF",
        "Indonesian Legal Language",
        "24-month legal validity",
      ],
      buttonText: "Buy Now - Rp 150.000",
    },
    subscription: {
      name: "Monthly Subscription",
      description: "Unlimited access + updates",
      price: "Rp 50.000",
      features: [
        "All 3 Niche Contracts",
        "Unlimited Downloads",
        "Monthly Legal Updates",
        "Priority Email Support",
        "New Contracts Added Monthly",
        "Lifetime Updates",
      ],
      buttonText: "Subscribe - Rp 50.000/mo",
    },
  }

  const nicheColors = {
    wedding: "bg-pink-100 text-pink-600",
    woodwork: "bg-amber-100 text-amber-600",
    saas: "bg-blue-100 text-blue-600",
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b bg-gradient-to-br from-pink-50 via-white to-amber-50">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-amber-500 px-4 py-2 text-sm font-medium text-white shadow-md">
              <Zap className="mr-2 h-4 w-4" />
              Niche-Specific Contracts
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-amber-600 to-blue-600">
              Buat Contract Profesional untuk Freelance
            </h1>
            <p className="mb-8 text-xl text-slate-700">
              Wedding photographer, woodworker, SaaS writer — semua butuh contract yang spesifik.
              Hemat Rp Juta untuk lawyer, dapat contract premium dalam hitungan menit.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => setSelectedPlan("premium")}
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-pink-600 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-pink-700 hover:to-amber-600 hover:shadow-xl sm:w-auto"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Mulai Sekarang
              </button>
              <button className="inline-flex w-full items-center justify-center rounded-lg border-2 border-pink-500/30 px-8 py-4 text-lg font-semibold text-pink-600 transition-all hover:bg-pink-50 sm:w-auto">
                Lihat Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <p className="mt-6 flex items-center justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                💳 Payment via Stripe
              </span>
              <span className="text-pink-400">•</span>
              <span className="flex items-center gap-1">
                🔒 Secure SSL
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b bg-gradient-to-br from-pink-50 via-white to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-amber-600 to-blue-600">
                Kenapa Freelance Butuh Contract Ini?
              </h2>
              <p className="text-lg text-slate-700">
                Generic contract itu mahal dan kurang spesifik. Contract kita ini buat khusus untuk niche Anda.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Wedding Photographer */}
              <div className="rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white p-8 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-pink-400 to-pink-600 shadow-md">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-pink-700">Wedding Photographer</h3>
                <p className="mb-4 text-slate-700">
                  Contract khusus untuk jasa fotografi pernikahan: pengambilan gambar, edit foto, tim, termasuk klausula cancel, revision, dan deposit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-pink-500" />
                    Deposit & cancellation clause
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-pink-500" />
                    Unlimited revision limit
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-pink-500" />
                    Project timeline & deliverables
                  </li>
                </ul>
              </div>

              {/* Woodworker */}
              <div className="rounded-2xl border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 shadow-md">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-amber-700">Woodworker</h3>
                <p className="mb-4 text-slate-700">
                  Contract untuk jasa pembuatan furniture, custom woodworking: material cost, timeline, quality guarantee, dan warranty clause.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    Material cost & budget clause
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    Quality inspection points
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-amber-500" />
                    Installation & delivery terms
                  </li>
                </ul>
              </div>

              {/* SaaS Writer */}
              <div className="rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm transition-all hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-400 to-blue-600 shadow-md">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-blue-700">SaaS Writer</h3>
                <p className="mb-4 text-slate-700">
                  Contract khusus untuk jasa copywriting & content writing untuk produk SaaS: word count, revision, rights transfer, and NDA.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    Word count & deliverables
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    Revision policy (unlimited)
                  </li>
                  <li className="flex items-center text-sm text-slate-700">
                    <Check className="mr-2 h-4 w-4 text-blue-500" />
                    Full copyright transfer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="border-b bg-gradient-to-br from-pink-50 via-amber-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-amber-600 to-blue-600">
                Pilih Paket Contract Anda
              </h2>
              <p className="text-lg text-slate-700">
                Investasi satu kali untuk protection maksimal
              </p>
            </div>

            {/* Toggle */}
            <div className="mb-12 flex justify-center">
              <div className="flex rounded-lg border-2 border-pink-500/30 bg-white p-1 shadow-sm">
                <button
                  onClick={() => setSelectedPlan("premium")}
                  className={`relative flex items-center justify-center px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    selectedPlan === "premium"
                      ? "bg-gradient-to-r from-pink-600 to-amber-500 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Premium (Satu Bayar)
                </button>
                <button
                  onClick={() => setSelectedPlan("subscription")}
                  className={`relative flex items-center justify-center px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                    selectedPlan === "subscription"
                      ? "bg-gradient-to-r from-pink-600 to-amber-500 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Subscription (Bulanan)
                </button>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="mx-auto max-w-2xl rounded-2xl border-2 border-pink-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-amber-600 to-blue-600">
                  {pricing[selectedPlan].name}
                </h3>
                <p className="text-slate-700">{pricing[selectedPlan].description}</p>
                <div className="mt-4 flex items-center justify-center gap-1">
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div className="mb-6 text-center">
                <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-amber-600 to-blue-600">
                  {pricing[selectedPlan].price}
                </span>
              </div>

              <button
                className="w-full rounded-lg bg-gradient-to-r from-pink-600 to-amber-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:from-pink-700 hover:to-amber-600 hover:shadow-xl"
                onClick={() => handleCheckout(selectedPlan)}
              >
                {pricing[selectedPlan].buttonText}
              </button>

              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-600">
                <Shield className="h-4 w-4 text-green-500" />
                100% Secure Payment via Stripe
              </p>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-pink-500" />
                <span className="text-sm">SSL Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-amber-500" />
                <span className="text-sm">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-500" />
                <span className="text-sm">Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-b bg-gradient-to-br from-slate-50 to-white py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-slate-600">
              © 2026 Freelance Contract Generator. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

function handleCheckout(plan: "premium" | "subscription") {
  // TODO: Integrate Stripe Checkout
  alert(`Redirecting to Stripe Checkout for ${plan} plan...`)
}
