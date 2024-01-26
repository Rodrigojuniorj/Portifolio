'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "Sobre",
    },
    {
      id: 3,
      link: "Trabalhos",
    },
    {
      id: 4,
      link: "Contato",
    },
  ];

  return (
    <div className="bg-background pt-5 flex justify-between items-center w-full h-20 text-white  nav">
      <div>
        <h1 className="text-3xl font-signature">
          <a
            className="link-underline link-underline-black"
            href=""
            rel="noreferrer"
          >
            <span className="text-primary">{'</'}</span> Rodrigo Dev
          </a>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="nav-links text-lg px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-primary duration-200 link-underline"
          >
            <Link href={link === 'home' ? "" : `#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link === 'home' ? "" : `#${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};