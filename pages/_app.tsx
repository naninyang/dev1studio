import { AppProps } from 'next/app';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Popover from '@/components/Popover';
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
      <a href="#header" className="sr-only">
        메뉴영역 바로가기
      </a>
      <a href="#content" className="sr-only">
        본문영역 바로가기
      </a>
      <hr id="header" />
      <Header />
      <hr id="content" />
      <Component {...pageProps} />
      <Footer />
      <Popover />
    </>
  );
}
