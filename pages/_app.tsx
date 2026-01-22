import type { AppProps } from 'next/app';
import Head from 'next/head';

// Global styles (Tailwind + app CSS)
import '@/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Raster Bros</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
