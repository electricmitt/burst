# Burst.art - AI-Powered NFT Platform

A revolutionary NFT platform that combines AI-generated art with a unique conviction-based minting mechanism.

## 🌟 Features

- **AI Art Generation**: Create unique NFT collections using AI
- **Conviction Queue**: Join the queue to participate in private minting
- **Fair Launch**: Randomized selection for private minting window
- **Real-time Queue**: Watch your position and conviction power
- **Secondary Market Integration**: Seamless trading experience

## 🚀 Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Web3**: Web3Modal + Wagmi (Ethereum) / Solana Wallet Adapter
- **Backend**: Node.js, Redis for queue management
- **AI**: Replicate API for Stable Diffusion
- **Storage**: IPFS via Pinata/NFT.storage

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   ├── layout/         # Layout components
│   └── web3/           # Web3-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
│   ├── web3/          # Web3 configurations
│   ├── ai/            # AI generation logic
│   └── queue/         # Queue management
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

## 🛠️ Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_WEB3_PROVIDER=
NEXT_PUBLIC_REPLICATE_API_KEY=
NEXT_PUBLIC_PINATA_API_KEY=
NEXT_PUBLIC_PINATA_SECRET_KEY=
```

## 📝 License

MIT License - see LICENSE file for details
