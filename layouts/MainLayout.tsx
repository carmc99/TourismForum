import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";

const MainLayout = ({ children }) => {
  const { data: session, status }: any = useSession();

  useEffect(() => {
  }, [session]);

  if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    signIn("auth0");
  } else {
    if (session.user.estado === "Pendiente") {
      return <div>Usted no ha sido autorizado para ingresar aun</div>;
    }
    return (
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    );
  }
};

export default MainLayout;
