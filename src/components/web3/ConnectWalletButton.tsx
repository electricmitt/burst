"use client"

import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import { Button } from "@/components/ui/button"

export function ConnectWalletButton() {
  const { setVisible } = useWalletModal()

  return (
    <Button
      onClick={() => setVisible(true)}
      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6"
    >
      Connect
    </Button>
  )
} 