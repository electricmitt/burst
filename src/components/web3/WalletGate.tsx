"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { UserProfile } from "@/components/user-profile"
import { PhantomConnect } from "./PhantomConnect"

export function WalletGate() {
  const { connected } = useWallet()

  return connected ? <UserProfile /> : <PhantomConnect />
} 