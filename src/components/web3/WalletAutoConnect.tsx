"use client";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect } from "react";

export default function WalletAutoConnect() {
  const { setVisible } = useWalletModal();
  const { connected } = useWallet();

  useEffect(() => {
    if (!connected) {
      setVisible(true);
    }
  }, [connected, setVisible]);

  return null;
} 