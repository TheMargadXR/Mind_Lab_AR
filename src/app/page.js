import Hero from "./components/Hero";
import Head from "next/head";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MindLab</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Hero />
    </div>
  );
}
