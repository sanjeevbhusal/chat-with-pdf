"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
// import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/server';

const NavBar = ({ kindeControls }: { kindeControls: React.ReactNode }) => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const openMobileNavbar = () => {
    setOpenMobileNav(true);
  };

  const closeMobileNavbar = () => {
    setOpenMobileNav(false);
  };

  return (
    <nav className="flex items-center justify-between py-4 relative">
      <Link href="/" className="text-sm md:text-base lg:text-lg font-semibold">
        PDF-Chat
      </Link>
      <ul className="hidden md:flex items-center gap-8 text-sm">
        <li className="text-gray-600">
          <Link href="/pricing">Pricing</Link>
        </li>
        {/* <li className="text-gray-600">
          <Link href="/signin">Signin</Link>
        </li>
        <li>
          <Link href="/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </li> */}
        {kindeControls}
        {/* <LoginLink>Sign in</LoginLink>

        <RegisterLink>Sign up</RegisterLink> */}
      </ul>

      {/* Small Screen NavBar */}
      {!openMobileNav && (
        <div
          className="md:hidden bg-gray-100 px-4 py-2 rounded-lg cursor-pointer"
          onClick={openMobileNavbar}
        >
          <RxHamburgerMenu />
        </div>
      )}

      {openMobileNav && (
        <div className="h-screen w-64 absolute right-0 top-2 border bg-white rounded-lg z-[100]">
          <div className="relative">
            <AiOutlineClose
              className="absolute right-4 top-4 cursor-pointer"
              onClick={closeMobileNavbar}
            />
          </div>

          <ul className="flex px-4 py-12 gap-4 text-sm flex-col">
            <li className="text-gray-600 ">
              <Link href="/pricing">
                <Button variant="link" size="sm" className="px-0">
                  Pricing
                </Button>
              </Link>
            </li>
            <li className="text-gray-600">
              <Link href="/signin">
                <Button variant="link" size="sm" className="px-0">
                  Signin
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <Button size="sm">Get Started</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
