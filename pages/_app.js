import "../styles/globals.css";
import globalStyles from "../styles/Global.module.css";
import Head from "next/head";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className={globalStyles.container}>
      <Head>
        <title>Ale Rey Leyva | Personal Portfolio</title>
        <meta
          name="description"
          content="Alejandro Rey Leyva - Personal Portfolio"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
