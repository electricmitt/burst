"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 text-primary mr-2" />
          <span className="text-sm font-medium text-primary">
            AI-Powered NFT Creation
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Create. Queue. Launch.
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Build, queue, and launch your NFT collection with unprecedented fairness. 
          Where AI meets community-driven minting.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/create" className="flex items-center cursor-pointer">
              Start Creating
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-accent hover:text-accent-foreground">
            <Link href="/queue">
              View Queue
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 