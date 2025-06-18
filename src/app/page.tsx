"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { supabase } from "@/utils/supabaseClient"; // Uncomment when ready

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
  // Add more mock collections as needed
];

export default function Home() {
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    // TODO: Replace with Supabase fetch
    setCollections(mockCollections);
  }, []);

  return (
    <main className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Recently Created Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {collections.map((col) => (
            <TooltipProvider key={col.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Card className="group cursor-pointer transition-transform hover:scale-105 overflow-hidden">
                    <CardHeader className="p-0">
                      <img
                        src={col.image}
                        alt={col.name}
                        className="w-full h-48 object-cover object-center bg-[var(--color-white)]"
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
                    <div className="font-bold">{col.name}</div>
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
    </main>
  );
}
