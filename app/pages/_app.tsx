import '../src/index.css';
import React from 'react'
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Valor Serviços</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}