"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { SearchBar } from '@/components/search-bar';
import { WalletGate } from '@/components/web3/WalletGate';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--color-white)]">
      <nav className="relative">
        <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/burst-logo.PNG" alt="Burst Logo" width={40} height={40} priority />
              <span className="text-2xl font-bold text-foreground whitespace-nowrap">
                Burst.art
              </span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center px-4">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <Link href="/create" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Mold
            </Link>
            <Link href="/queue" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Wick
            </Link>
            <ThemeToggle />
            <WalletGate />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <WalletGate />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-4">
          <SearchBar />
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border/20 z-50">
            <div className="px-4 py-2 space-y-1">
              <Link
                href="/create"
                className="block text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mold
              </Link>
              <Link
                href="/queue"
                className="block text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wick
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        {children}
      </main>

      <footer className="border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-foreground/80 text-sm">
            © {new Date().getFullYear()} Burst.art. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 