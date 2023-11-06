import { AppProps } from 'next/app';
import Script from 'next/script';
import { GA_TRACKING_ID, pageview } from '@/lib/gtag';
import '@/styles/global.sass';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
