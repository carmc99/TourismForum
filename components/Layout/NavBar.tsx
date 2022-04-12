import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function Nav() {
  const user: any = useSession().data;
  return (
    <nav className="bg-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  className="h-8 w-8 cursor-pointer"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href={"/users/" + user?.user?.id}>
                  <a className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Mi perfil
                  </a>
                </Link>
                <a
                  onClick={() => {
                    localStorage.removeItem("current-post");
                    signOut();
                  }}
                  className="text-white hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  Cerrar sesión
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
