import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import WalletProvider from "@/components/web3/WalletProvider";

export const metadata: Metadata = {
  title: "Burst.art - AI NFT Platform",
  description: "AI-powered NFT collections with conviction-based minting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <WalletProvider>
          <MainLayout>{children}</MainLayout>
        </WalletProvider>
      </body>
    </html>
  );
}
