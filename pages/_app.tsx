import '../styles/globals.css'
import MainLayout from '../layouts/MainLayout'
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps: { session, ...pageProps } }:AppProps) {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  );
}

export default MyApp
