import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";

const MainLayout = ({ children }) => {
  const { data: session, status }: any = useSession();

  useEffect(() => {}, [session]);

  if (status === "loading")
    return (
      <main>
        <div className="flex items-center justify-center">
          <ReactLoading type="cylon" color="black" height={"7%"} width={"7%"} />
        </div>
      </main>
    );

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
