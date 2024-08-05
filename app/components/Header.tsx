"use client";

import Image from "next/image";
import React from "react";
import Logo from "../public/logo.jpg";
import Link from "next/link";
import { content } from "../content";
import { usePathname } from "next/navigation";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  // const { isAuthenticated } = getKindeServerSession();

  return (
    <header className="flex justify-between py-4 px-7 border-b items-center">
      <Link href="/">
        <Image
          className="rounded"
          width="35"
          height="35"
          alt="Logo"
          src={Logo}
        />
      </Link>
      <nav className="flex">
        <ul className="flex gap-4 text-[14px]">
          {content.header.navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  pathname === link.href ? "text-zinc-800" : "text-zinc-400"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
  <LogoutLink className="text-[14px] ml-4 text-zinc-400">
            Logout
          </LogoutLink>
         
   
      </nav>
    </header>
  );
};

export default Header;
