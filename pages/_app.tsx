import "../styles/globals.css";
import MainLayout from "../layouts/MainLayout";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import NavBar from "../components/Layout/NavBar";
import Footer from "../components/Layout/Footer";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
 

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
          <NavBar />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <Footer></Footer>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
