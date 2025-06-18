import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WalletAutoConnect from '@/components/web3/WalletAutoConnect';
import { ThemeToggle } from '@/components/theme-toggle';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--color-white)]">
      <nav>
        <div className="flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/burst-logo.PNG" alt="Burst Logo" width={40} height={40} priority />
              <span className="text-2xl font-bold text-[var(--color-white)] whitespace-nowrap">
                Burst.art
              </span>
            </Link>
          </div>
          <div className="flex-1" />
          <div className="flex items-center space-x-4 flex-shrink-0">
            <Link href="/create" className="text-[var(--color-white)] hover:text-[var(--color-light-yellow)] px-3 py-2 rounded-md text-sm font-medium">
              Mold
            </Link>
            <Link href="/queue" className="text-[var(--color-white)] hover:text-[var(--color-light-yellow)] px-3 py-2 rounded-md text-sm font-medium">
              Wick
            </Link>
            <ThemeToggle />
            <WalletAutoConnect />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="border-t border-[var(--color-white)]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-[var(--color-white)]/80 text-sm">
            © {new Date().getFullYear()} Burst.art. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 