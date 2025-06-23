"use client"

import { useWallet } from "@solana/wallet-adapter-react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import { useCallback } from "react"

export function PhantomConnect() {
  const { wallets, select, connect } = useWallet()

  const onConnect = useCallback(async () => {
    const phantom = wallets.find(
      (wallet) => wallet.adapter.name === "Phantom"
    )
    if (!phantom) {
      alert("Phantom wallet not found. Please install it.");
      return;
    }

    try {
      await select(phantom.adapter.name)
      await connect()
    } catch (error) {
      console.error("Failed to connect to Phantom wallet", error)
      alert("Failed to connect to Phantom. Check the console for more details.")
    }
  }, [wallets, select, connect])

  return (
    <Button
      onClick={onConnect}
      className="bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      <Wallet className="mr-2 h-4 w-4" />
      Connect Phantom Directly
    </Button>
  )
} 