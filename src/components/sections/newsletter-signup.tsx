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
    <section className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="bg-card border-border">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-primary p-3 rounded-full">
                <Bell className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Stay Updated</CardTitle>
            <CardDescription className="text-card-foreground/70 text-lg">
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
                    className="pl-10 bg-background/50 backdrop-blur-sm border-border"
                    required
                  />
                </div>
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-success p-3 rounded-full">
                    <Zap className="h-8 w-8 text-success-foreground" />
                  </div>
                </div>
                <p className="text-lg font-medium text-card-foreground mb-2">
                  Successfully Subscribed!
                </p>
                <p className="text-card-foreground/70">
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