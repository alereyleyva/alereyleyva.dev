import Head from "next/head";
import globalStyles from "../styles/Global.module.css";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <main className={globalStyles.main}>
        <h1>Alejandro Rey Leyva</h1>
        <h2>Junior Full-Stack Developer</h2>
      </main>
    </>
  );
}
