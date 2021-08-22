import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/tailwind.css';
import '../styles/index.css';
import Head from 'next/head';
import Header from '../components/Header';
import ThemeStatusProvider from '../theme/ThemeStatusProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeStatusProvider>
      <div className="app-container min-h-screen">
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
    </ThemeStatusProvider>
  );
}

export default MyApp;
