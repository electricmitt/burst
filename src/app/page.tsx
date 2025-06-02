"use client";

import WalletAutoConnect from '@/components/web3/WalletAutoConnect';
import React from 'react';

function FloatingShapes() {
  // Simple floating shapes using absolute positioning and CSS animation
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[var(--color-orange)] opacity-70 rounded-full animate-bounce-slow blur-2xl" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-[var(--color-gold)] opacity-60 rounded-full animate-float" />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[var(--color-light-yellow)] opacity-50 rounded-full animate-bounce-fast blur-xl" />
        <div className="absolute bottom-10 right-1/4 w-28 h-28 bg-[var(--color-gray)] opacity-40 rounded-full animate-float" />
        <div className="absolute top-1/3 left-1/2 w-16 h-16 bg-[var(--color-dark-brown)] opacity-30 rounded-full animate-bounce-slow" />
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <WalletAutoConnect />
      <FloatingShapes />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-8 relative z-10">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-gold)] bg-clip-text text-transparent drop-shadow-md animate-wiggle">
          Burst.art
        </h1>
        <div className="w-full flex justify-center">
          <div className="relative w-64 h-6 bg-[var(--color-light-beige)] rounded-full overflow-hidden shadow-inner border-2 border-[var(--color-gold)]">
            <div className="absolute left-0 top-0 h-full bg-[var(--color-orange)] rounded-full animate-progress-bar" style={{ width: '40%' }} />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-[var(--color-dark-brown)]">Queue Hype: 40%</span>
          </div>
        </div>
        <p className="max-w-xl text-lg text-[var(--color-dark-brown)]">
          <span className="font-semibold text-[var(--color-orange)]">Conviction Queue</span> minting for fairness, hype, and FOMO.<br />
          Create, queue, and mint with a new kind of launch experience.<br />
          <span className="italic text-[var(--color-gold)]">AI-powered NFT collections.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="/create"
            className="px-8 py-3 rounded-lg font-semibold bg-[var(--color-orange)] hover:bg-[var(--color-gold)] text-[var(--color-white)] shadow-md transition-transform hover:scale-105 hover:rotate-1 animate-bounce-fast"
          >
            Create Collection
          </a>
          <a
            href="/queue"
            className="px-8 py-3 rounded-lg font-semibold border-2 border-[var(--color-orange)] text-[var(--color-orange)] hover:bg-[var(--color-light-beige)] transition-transform hover:scale-105 animate-float"
          >
            View Conviction Queue
          </a>
        </div>
        <div className="mt-10 max-w-2xl text-[var(--color-gray)] text-sm">
          <p>
            <span className="font-bold text-[var(--color-gold)]">How it works:</span> <br />
            1. Generate or upload your NFT collection with AI.<br />
            2. Enter the Conviction Queue to build hype.<br />
            3. When the threshold is met, a private mint window opens for queued users.<br />
            4. Public mint and secondary trading follow.
          </p>
        </div>
      </div>
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        @keyframes bounce-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-fast {
          animation: bounce-fast 2s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(20px) scale(1.05); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-wiggle {
          animation: wiggle 2s infinite;
        }
        @keyframes progress-bar {
          0% { width: 0; }
          100% { width: 40%; }
        }
        .animate-progress-bar {
          animation: progress-bar 2s cubic-bezier(0.4,0,0.2,1) forwards;
        }
      `}</style>
    </>
  );
}
