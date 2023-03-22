import '../src/index.css'
import React from 'react'
import Head from 'next/head'
import { Partytown } from '@builder.io/partytown/react'
import Script from 'next/script'
import NextImgSrc from '../src/NextImgSrc'

export default function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Valor Serviços</title>
        <meta name="description" content="Adiante até 10 parcelas do seu Saque Aniversário. Clique em fale conosco, nos chame no Whatsapp, e receba seu adiantamento hoje mesmo." key="desc"/>

        <Partytown debug={true} lib={NextImgSrc('~partytown/')} forward={['dataLayer.push','fbq']} />

        {/* <!-- Google tag (gtag.js) --> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-X6Q5PEXLMR"></script> */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-X6Q5PEXLMR" strategy='worker' />
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-X6Q5PEXLMR');`
        }}></script>
        {/* <Script strategy='afterInteractive'>
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-X6Q5PEXLMR');`}
        </Script> */}
        {/* <!-- Event snippet for Contato - FGTS aniversario conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. --> */}
        <script dangerouslySetInnerHTML={{
          __html: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-10829773968/QqGOCI650ocYEJD5hKwo', 'event_callback': callback }); return false; }`
        }}></script>
        {/* <Script strategy='afterInteractive'>
          {`console.log('gtag_report_conversion started'); function gtag_report_conversion(url) { console.log('gtag_report_conversion called in worker', gtag); var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-10829773968/QqGOCI650ocYEJD5hKwo', 'event_callback': callback }); return false; }`}
        </Script> */}
        {/* <!-- Meta Pixel Code --> */}
        {/* <script dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '918522248742557');
        fbq('track', 'PageView');`}}>
        </script> */}
        <Script strategy='worker'>
          {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '918522248742557');
        fbq('track', 'PageView');`}
        </Script>
        <noscript dangerouslySetInnerHTML={{
          __html: `<img fetchpriority="high" height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=918522248742557&ev=PageView&noscript=1"/>`
        }}></noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}