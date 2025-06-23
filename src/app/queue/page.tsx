"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Collection {
  id: string;
  name: string;
  image: string;
  creator: string;
  created_at: string;
  description?: string;
  [key: string]: any;
}

const mockCollections: Collection[] = [
  {
    id: "1",
    name: "Cyberpunk Cats",
    image: "/burst-logo.PNG",
    creator: "0x1234...abcd",
    created_at: "2024-06-01T12:00:00Z",
    description: "A collection of neon cyberpunk cats.",
  },
  {
    id: "2",
    name: "Pixel Punks",
    image: "/burst-logo.PNG",
    creator: "0x5678...efgh",
    created_at: "2024-06-02T15:30:00Z",
    description: "Retro pixel art punks.",
  },
  {
    id: "3",
    name: "Space Warriors",
    image: "/burst-logo.PNG",
    creator: "0x9abc...def0",
    created_at: "2024-06-03T09:15:00Z",
    description: "Intergalactic warriors from distant galaxies.",
  },
  {
    id: "4",
    name: "Forest Spirits",
    image: "/burst-logo.PNG",
    creator: "0x1234...5678",
    created_at: "2024-06-04T14:20:00Z",
    description: "Mystical creatures of the enchanted forest.",
  },
  // Add more mock collections as needed
];

export default function QueuePage() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    setCollections(mockCollections);
  }, []);

  return (
    <main className="min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Recently Created Collections</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Discover the latest AI-generated NFT collections from our community
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {collections.map((col) => (
              <TooltipProvider key={col.id}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="group cursor-pointer transition-transform hover:scale-105 overflow-hidden bg-card border-border/20">
                      <CardHeader className="p-0">
                        <img
                          src={col.image}
                          alt={col.name}
                          className="w-full h-48 object-cover object-center bg-background"
                        />
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="text-lg mb-1 truncate">{col.name}</CardTitle>
                        <CardDescription className="text-xs mb-1">By {col.creator}</CardDescription>
                        <CardDescription className="text-xs">
                          {new Date(col.created_at).toLocaleDateString()}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <div className="space-y-2">
                      <div className="font-bold text-xl mb-2">{col.name}</div>
                      <div>{col.description}</div>
                      <div className="text-xs">Creator: {col.creator}</div>
                      <div className="text-xs">Created: {new Date(col.created_at).toLocaleString()}</div>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 