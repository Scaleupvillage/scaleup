import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11461800534"
        ></Script>
        <Script id="google-analytics">
          {` window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'AW-11461800534');`}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />

        <script
          defer
          src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"
        ></script>
      </body>
    </Html>
  );
}
