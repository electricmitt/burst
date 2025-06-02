import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)] text-[var(--color-dark-brown)]">
      <nav className="border-b border-[var(--color-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/burst-logo.PNG" alt="Burst Logo" width={40} height={40} priority />
                <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-gold)] bg-clip-text text-transparent">
                  Burst.art
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/create" className="text-[var(--color-dark-brown)] hover:text-[var(--color-orange)] px-3 py-2 rounded-md text-sm font-medium">
                Create
              </Link>
              <Link href="/queue" className="text-[var(--color-dark-brown)] hover:text-[var(--color-orange)] px-3 py-2 rounded-md text-sm font-medium">
                Queue
              </Link>
              <button className="bg-[var(--color-orange)] hover:bg-[var(--color-gold)] text-[var(--color-white)] px-4 py-2 rounded-md text-sm font-medium">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="border-t border-[var(--color-gray)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-[var(--color-gray)] text-sm">
            © {new Date().getFullYear()} Burst.art. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 