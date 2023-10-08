import Navbar from "./components/Navbar";
import "./page.module.css";

function MyApp({ Component, PageProps }) {
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default MyApp;
