import { useEffect, useState } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "@/components/Banner";
import FindSection from "@/components/FindSection";
import Categories from "@/components/Categories";
import BookDoctor from "@/components/BookDoctor";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    const connectMetaMask = async () => {
      if (window.ethereum) {
        try {
          // Request account access
          const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          setAccount(accounts[0]);

          // Add the custom network
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: '0x1F91', // 8081 in hexadecimal
              chainName: 'Shardeum Liberty 2.X',
              nativeCurrency: {
                name: 'Shardeum',
                symbol: 'SHM',
                decimals: 18
              },
              rpcUrls: ['https://liberty20.shardeum.org/'],
              blockExplorerUrls: ['https://explorer.shardeum.org/'] // Add a block explorer URL if available
            }]
          });
        } catch (error) {
          console.error("Error connecting to MetaMask:", error);
        }
      } else {
        console.error("MetaMask not detected. Please install MetaMask.");
      }
    };

    connectMetaMask();
  }, []);

  return (
    <>
      <Head>
        <title>My App</title>
      </Head>
      <main>
        <Banner />
        <FindSection />
        <Categories />
        <BookDoctor />
        {account ? (
          <p>Connected account: {account}</p>
        ) : (
          <p>Not connected to MetaMask</p>
        )}
      </main>
    </>
  );
}
