"use client"

import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"

export function ConnectWalletButton() {
  const { setVisible } = useWalletModal()

  return (
    <Button
      onClick={() => setVisible(true)}
      className="bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      <Wallet className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  )
} 