"use client";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";

export default function WalletAutoConnect() {
  const { setVisible } = useWalletModal();
  const { connected, connecting, disconnect } = useWallet();
  const [error, setError] = useState<string | null>(null);

  const handleConnect = () => {
    setError(null);
    setVisible(true);
  };

  if (connected) {
    return (
      <button
        onClick={() => disconnect()}
        className="bg-[var(--color-orange)] hover:bg-[var(--color-gold)] text-[var(--color-white)] px-4 py-2 rounded-md text-sm font-medium"
      >
        Disconnect
      </button>
    );
  }

  return (
    <>
      <button
        onClick={handleConnect}
        disabled={connecting}
        className="bg-[var(--color-orange)] hover:bg-[var(--color-gold)] text-[var(--color-white)] px-4 py-2 rounded-md text-sm font-medium disabled:opacity-50"
      >
        {connecting ? "Connecting..." : "Connect"}
      </button>
      {error && (
        <div className="absolute top-16 right-4 text-red-500 text-sm">
          {error}
        </div>
      )}
    </>
  );
} 