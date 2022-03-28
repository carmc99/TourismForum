import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

/*
const Header = () => {
const { user } = useUser();
return (
<header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" fill="none" stroke="currentColor"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1">
                </path>
            </svg>
        </a>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {user ? (
            <div className="flex items-center space-x-5">
                <Link href="/favorites">
                <a
                    className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    My Favorites
                </a>
                </Link>
                <Link href="/api/auth/logout">
                <a
                    className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Logout
                </a>
                </Link>
                <img alt="profile" className="rounded-full w-12 h-12" src={user.image} />
            </div>
            ) : (
            <Link href="/api/auth/login">
            <a
                className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login
            </a>
            </Link>
            )}
        </nav>
    </div>
</header>
);
};

export default Header;

*/

const Header = () => {
const { user } = useUser();
return (
<header className="text-gray-600 body-font">
    <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                <Link href="/">
                <a
                    className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Home</a>
                </Link>
                {user ? (
                <Link href="/api/auth/logout">
                <a
                    className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Logout</a>
                </Link>) : (
                <Link href="/api/auth/login">
                <a
                    className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Login</a>
                </Link>
                )}
                <a href="#"
                    className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Signup</a>
            </div>
        </div>
    </nav>
    </header>
);
};

export default Header;