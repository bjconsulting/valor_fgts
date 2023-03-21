import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

declare module "react" {
  interface ScriptHTMLAttributes<T> extends HTMLAttributes<T> {
    fetchpriority?: 'high' | 'low' | 'auto';
  }
}

export default function Document() {
  return (
    <Html lang='pt-BR'>
      <Head>
        <meta name="description" content="Adiante até 10 parcelas do seu Saque Aniversário. Clique em fale conosco, nos chame no Whatsapp, e receba seu adiantamento hoje mesmo." key="desc"/>
        {/* <!-- Google tag (gtag.js) --> */}
        <script fetchpriority="high" async src="https://www.googletagmanager.com/gtag/js?id=G-X6Q5PEXLMR"></script>
        <script fetchpriority="high" dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-X6Q5PEXLMR');`
        }}></script>
        {/* <!-- Event snippet for Contato - FGTS aniversario conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. --> */}
        <script fetchpriority="high" dangerouslySetInnerHTML={{
          __html: `function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-10829773968/QqGOCI650ocYEJD5hKwo', 'event_callback': callback }); return false; }`
        }}></script>
        {/* <!-- Meta Pixel Code --> */}
        <script fetchpriority="high" dangerouslySetInnerHTML={{
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
        </script>
        <noscript fetchpriority="high" dangerouslySetInnerHTML={{
          __html: `<img fetchpriority="high" height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=918522248742557&ev=PageView&noscript=1"/>`
        }}></noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}