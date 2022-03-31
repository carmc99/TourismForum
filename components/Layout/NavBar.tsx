import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function Nav() {
  const user = useSession().data;
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
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href={"/users/" + user?.user?.id}>
                  <a className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Mi perfil
                  </a>
                </Link>
                <a
                  onClick={() => {
                    signOut();
                  }}
                  className="text-white hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                >
                  Cerrar sesion
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            onClick={() => {
              signOut();
            }}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Cerrar sesion
          </a>
          <Link href={"/users/" + user?.user?.id}>
            <a className="text-white hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              Mi perfil
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
