import "@/styles/globals.css";
import "@/styles/table.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactGA from "react-ga";
import { Exo_2 } from "next/font/google";
const exo2 = Exo_2({ subsets: ["latin"], adjustFontFallback: false });
export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("1101350224207637"); // facebookPixelId
        ReactPixel.pageView();

        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      ReactGA.initialize("G-2XBK94JCJQ");
      window.GA_INITIALIZED = true;
    }

    router.events.on("routeChangeComplete", () => {
      ReactGA.set({ page: window.location.pathname });
      ReactGA.pageview(window.location.pathname);
    });
  }, [router.events]);
  return (
    <div className={exo2.className}>
      <ToastContainer />
      <Component {...pageProps} />
    </div>
  );
}
