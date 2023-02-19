import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthModal from "../auth/AuthModal";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

const Navbar = () => {
  return (
    <nav className=" w-full flex px-8 py-4 text-2xl justify-around">
      <Link href="/" className="flex gap-2 font-bold">
        {/* <Image src="" alt="logo" /> */}
        <p>Bidster</p>
      </Link>
      <AuthModal />
    </nav>
  );
};

export default Navbar;
