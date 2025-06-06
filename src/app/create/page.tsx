"use client";

import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';

export default function CreateCollection() {
  const { connected } = useWallet();
  const { setVisible } = useWalletModal();
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleGenerate = async () => {
    if (!connected) {
      setVisible(true);
      return;
    }
    
    if (!prompt.trim()) return;
    setIsGenerating(true);
    // TODO: Implement AI generation
    setIsGenerating(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-gold)] bg-clip-text text-transparent">
        Create Your Collection
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-[var(--color-dark-brown)] mb-2">
              Collection Description
            </label>
            <textarea
              id="prompt"
              rows={4}
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent"
              placeholder="Describe your NFT collection... (e.g., 'A collection of cyberpunk cats with neon accessories')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full px-6 py-3 bg-[var(--color-orange)] hover:bg-[var(--color-gold)] text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? 'Generating...' : 'Generate Collection'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-[var(--color-dark-brown)] mb-4">Collection Settings</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-dark-brown)] mb-2">
              Collection Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent"
              placeholder="Enter collection name"
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-[var(--color-dark-brown)] mb-2">
              Collection Size
            </label>
            <input
              type="number"
              id="size"
              min="1"
              max="10000"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent"
              placeholder="Number of NFTs (1-10,000)"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-[var(--color-dark-brown)] mb-2">
              Mint Price (SOL)
            </label>
            <input
              type="number"
              id="price"
              min="0"
              step="0.01"
              className="w-full px-4 py-2 border border-[var(--color-gray)] rounded-lg focus:ring-2 focus:ring-[var(--color-orange)] focus:border-transparent"
              placeholder="Enter mint price in SOL"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 