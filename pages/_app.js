import Layout from "../components/layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Adrian Li | React Front-End Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <meta
          property="og:title"
          content="Adrian Li | React Front-End Developer"
        />
        <meta
          property="og:image"
          content="https://adrian-li.vercel.app/images/brand/home.png"
        />
        <meta property="og:description" content="Adrian Li's portfolio." />
        <meta property="og:url" content="https://adrian-li.vercel.app/" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
