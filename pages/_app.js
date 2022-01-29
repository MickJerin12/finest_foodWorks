import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Finest Food works</title>
        <meta name="description" content="Finest Food Works"></meta>
        <meta name="robots" content="index, follow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
