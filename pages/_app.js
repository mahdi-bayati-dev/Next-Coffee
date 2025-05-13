import "@/styles/globals.css";
import Navbar from "@/components/modules/navbar/Navbar";
import Footer from "@/components/modules/Footer/footer";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
