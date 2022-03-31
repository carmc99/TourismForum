import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center text-white bg-blue-700">
      <div className="pt-8">
        © 2022 Copyright
        <Link href="/">
          <a className="pl-1 text-white font-bold">Tourism forum</a>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
