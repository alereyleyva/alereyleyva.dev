import "../styles/globals.css";
import globalStyles from "../styles/Global.module.css";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className={globalStyles.container}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
