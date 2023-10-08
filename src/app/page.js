import Main from "./components/Main";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import About2 from "./components/About2";
import Footer from "./components/Footer";
import Team from "./components/Team";

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
      <Main />
      <About />
      <Team />
      <About2 />
      <Contact />
      <Footer />
    </div>
  );
}
