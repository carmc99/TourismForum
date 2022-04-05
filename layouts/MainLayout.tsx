import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { ToastContainer } from "react-toastify";

const MainLayout = ({ children }) => {
  const { data: session, status }: any = useSession();

  useEffect(() => {}, [session]);

  if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    signIn("auth0");
  } else {
    if (session.user.estado === "Pendiente") {
      return <div>Usted no ha sido autorizado para ingresar aun</div>;
    }
    return (
      <main>
        {children}
        <ToastContainer />
      </main>
    );
  }
};

export default MainLayout;
