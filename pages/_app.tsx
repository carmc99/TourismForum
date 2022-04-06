import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "react-toastify/dist/ReactToastify.css";
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
        <div className="main-container">
          <NavBar />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <Footer />
        </div>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
