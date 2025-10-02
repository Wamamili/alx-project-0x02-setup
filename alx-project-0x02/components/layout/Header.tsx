"use client";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <nav className="flex space-x-6">
        <Link href="/home" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link href="/posts" className="hover:text-blue-400">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
