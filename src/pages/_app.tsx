import Head from "next/head";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>DeDoctor</title>
        <meta name="description" content="DeDoctor are web3 based Doctor appointment app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_2.ico" />
        <meta
          name="keywords"
          content="doctor,safe,medicine,blockchain"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://dedoctor.netlify.app/"
        />
        <meta
          property="og:title"
          content="DeDoctor are web3 based Doctor appointment app."
        />
        <meta
          property="og:description"
          content="DeDoctor can help you online consultation and payment with shardeum network so patient data are safe"
        />
        <meta
          property="og:image"
          content="/logo-no-background.svg"
        />

        <meta name="language" content="ES" />
        <meta
          name="author"
          content="Nayan Radadiya, nayanrdeveloper@gmail.com"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://dedoctor.netlify.app/"
        />
        <meta
          property="twitter:title"
          content="DeDoctor are web3 based Doctor appointment app."
        />
        <meta
          property="twitter:description"
          content="DeDoctor can help you online consultation and payment with shardeum network so patient data are safe."
        />
        <meta
          property="twitter:image"
          content="/logo-no-background.svg"
        />

        <meta
          name="url"
          content="https://dedoctor.netlify.app/"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="DeDoctor can help you online consultation and payment with shardeum network so patient data are safe."
        />
        <link
          rel="apple-touch-icon"
          href="/logo-no-background.svg"
        />
      </Head>
      <Navbar />
    
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
