import "../styles/globals.css";
import MainLayout from "../layouts/MainLayout";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import NavBar from "../components/Layout/NavBar";
import Footer from "../components/Layout/Footer";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div>
        <NavBar />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <Footer></Footer>
      </div>
    </SessionProvider>
  );
}

export default MyApp;
