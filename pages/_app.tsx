import '../styles/globals.css'
import MainLayout from '../layouts/MainLayout'
import { SessionProvider } from 'next-auth/react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";
import {client} from "../lib/apollo"


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

/*
function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;
*/

