"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Bell, Zap } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter signup
    setIsSubscribed(true)
    setEmail("")
  }

  return (
    <section className="py-20 bg-[var(--color-white)]/5">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="bg-[var(--color-white)]/10 border-[var(--color-white)]/20">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[var(--color-orange)] p-3 rounded-full">
                <Bell className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Stay Updated</CardTitle>
            <CardDescription className="text-[var(--color-white)]/70 text-lg">
              Get notified about new collections, platform updates, and exclusive drops
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background/50 backdrop-blur-sm border-border/50"
                    required
                  />
                </div>
                <Button type="submit" className="bg-[var(--color-orange)] hover:bg-[var(--color-gold)] text-white">
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-lg font-medium text-[var(--color-white)] mb-2">
                  Successfully Subscribed!
                </p>
                <p className="text-[var(--color-white)]/70">
                  You'll receive updates about new collections and platform features.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 