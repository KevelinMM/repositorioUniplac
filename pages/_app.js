import "../styles/globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
