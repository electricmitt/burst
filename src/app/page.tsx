"use client";

import React from "react";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";
import { HowItWorks } from "@/components/sections/how-it-works";
import { NewsletterSignup } from "@/components/sections/newsletter-signup";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Statistics Section */}
      <StatsSection />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* Newsletter Signup Section */}
      <NewsletterSignup />
    </main>
  );
}
