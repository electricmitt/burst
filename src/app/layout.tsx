import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";
import WalletProvider from "@/components/web3/WalletProvider";
import { ThemeProvider } from "@/components/theme-provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <WalletProvider>
            <MainLayout>{children}</MainLayout>
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
