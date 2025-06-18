"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Image, TrendingUp, Zap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Active Users",
    description: "Community members"
  },
  {
    icon: Image,
    value: "500+",
    label: "Collections",
    description: "Successfully launched"
  },
  {
    icon: TrendingUp,
    value: "$2.5M",
    label: "Total Volume",
    description: "Trading volume"
  },
  {
    icon: Zap,
    value: "99.9%",
    label: "Uptime",
    description: "Platform reliability"
  }
]

export function StatsSection() {
  return (
    <section className="py-16 bg-[var(--color-white)]/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Platform Statistics</h2>
          <p className="text-[var(--color-white)]/70 max-w-2xl mx-auto">
            Join thousands of creators and collectors in the most innovative NFT platform
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-[var(--color-white)]/10 border-[var(--color-white)]/20 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-[var(--color-light-yellow)]" />
                </div>
                <div className="text-3xl font-bold mb-2 text-[var(--color-white)]">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[var(--color-white)] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[var(--color-white)]/60">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 