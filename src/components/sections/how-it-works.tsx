"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, Users, Rocket, Coins } from "lucide-react"

const steps = [
  {
    icon: Wand2,
    title: "Create with AI",
    description: "Generate unique NFT collections using advanced AI technology. Describe your vision and let our AI bring it to life.",
    step: "01"
  },
  {
    icon: Users,
    title: "Join the Queue",
    description: "Enter the conviction queue to build hype and community engagement. The more conviction, the higher your priority.",
    step: "02"
  },
  {
    icon: Rocket,
    title: "Launch Fairly",
    description: "When the threshold is met, a private mint window opens for queued users, ensuring fair distribution.",
    step: "03"
  },
  {
    icon: Coins,
    title: "Trade & Earn",
    description: "After the private mint, collections open for public trading on secondary markets.",
    step: "04"
  }
]

export function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-[var(--color-white)]/70 max-w-3xl mx-auto">
            A revolutionary approach to NFT creation and launch that puts community first
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative bg-[var(--color-white)]/10 border-[var(--color-white)]/20 hover:bg-[var(--color-white)]/15 transition-colors">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <step.icon className="h-12 w-12 text-[var(--color-light-yellow)]" />
                    <div className="absolute -top-2 -right-2 bg-[var(--color-orange)] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[var(--color-white)]/70 text-center">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 