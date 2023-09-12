import Footer from "@/Components/Footer";
import NavBar from "@/Components/NavBar";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { store, persistor } from "../redux/store";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";
import AudioPlayerComponent from "@/assests/Musicplayer";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NavBar />
            <AnimatePresence mode="wait">
              
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            <Footer />
          </PersistGate>
        </Provider>
      </main>
    </>
  );
}
