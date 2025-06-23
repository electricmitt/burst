"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { UserProfile } from "@/components/user-profile"
import { ConnectWalletButton } from "./ConnectWalletButton"

export function WalletGate() {
  const { connected } = useWallet()

  return connected ? <UserProfile /> : <ConnectWalletButton />
} 