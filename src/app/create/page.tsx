"use client";

import React, { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CreateCollection() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [collectionName, setCollectionName] = useState("")
  const [description, setDescription] = useState("")
  const [artStyle, setArtStyle] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    startTransition(() => {
      // Here you would typically handle the form submission,
      // like sending the data to an API endpoint.
      console.log({
        collectionName,
        description,
        artStyle,
      })
      // For now, we'll just redirect to the queue page
      // to simulate the creation process.
      router.push("/queue")
    })
  }

  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-card border-border/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Create a New Collection
              </CardTitle>
              <CardDescription>
                Fill in the details below to generate your unique NFT collection.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="collectionName" className="text-sm font-medium">
                    Collection Name
                  </label>
                  <Input
                    id="collectionName"
                    placeholder="e.g., 'Cosmic Robots'"
                    value={collectionName}
                    onChange={(e) => setCollectionName(e.target.value)}
                    required
                    className="bg-background/5 border-border/20 focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    placeholder="e.g., 'A collection of 100 unique robots exploring the cosmos.'"
                    value={description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setDescription(e.target.value)
                    }
                    required
                    className="bg-background/5 border-border/20 focus-visible:ring-offset-0 focus-visible:ring-2 focus-visible:ring-ring/50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="artStyle" className="text-sm font-medium">
                    Art Style
                  </label>
                  <Select
                    onValueChange={setArtStyle}
                    defaultValue={artStyle}
                    required
                  >
                    <SelectTrigger
                      id="artStyle"
                      className="bg-background/5 border-border/20"
                    >
                      <SelectValue placeholder="Select an art style" />
                    </SelectTrigger>
                    <SelectContent className="bg-background-dark border-border/20">
                      <SelectItem value="pixel-art">Pixel Art</SelectItem>
                      <SelectItem value="3d-illustration">
                        3D Illustration
                      </SelectItem>
                      <SelectItem value="fantasy">Fantasy</SelectItem>
                      <SelectItem value="sci-fi">Sci-Fi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-foreground text-background hover:bg-foreground/90"
                >
                  {isPending ? "Generating..." : "Generate Collection"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </section>
    </main>
  )
} 