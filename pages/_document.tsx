import Document, { Head, Main, NextScript, DocumentContext, DocumentInitialProps, Html } from 'next/document';
import { GA_TRACKING_ID } from '@/lib/gtag';
import { extractCritical } from '@emotion/server';

interface DocumentProps extends DocumentInitialProps {
  css: string;
  ids: string[];
}

const AppDocument: React.FC<DocumentProps> & {
  getInitialProps: (ctx: DocumentContext) => Promise<DocumentProps>;
} = ({ css, ids }) => {
  return (
    <Html lang="ko-KR">
      <Head>
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="Black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#141414" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#141414" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });`,
          }}
        />
        <style data-emotion-css={ids.join(' ')} dangerouslySetInnerHTML={{ __html: css }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

AppDocument.getInitialProps = async (ctx) => {
  const page = await ctx.renderPage({
    enhanceApp: (App) => {
      const EnhancedApp = (props: React.ComponentProps<typeof App>) => <App {...props} />;
      EnhancedApp.displayName = 'Dev1StudioApp';
      return EnhancedApp;
    },
  });

  const { css, ids } = extractCritical(page.html);
  const initialProps = await Document.getInitialProps(ctx);

  return { ...initialProps, ...page, css, ids };
};

export default AppDocument;
