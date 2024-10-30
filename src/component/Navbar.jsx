import React, { useState, useEffect } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

// Impor gambar untuk tombol navbar
import openIcon from "../assets/open.png";
import closeIcon from "../assets/close.png";

// Komponen untuk item navigasi
const NavItem = ({ label, href, isActive }) => (
  <a
    href={href}
    className={`transition-colors ${
      isActive ? "text-[#945a23]" : "text-[#FB9333]"
    }`}
  >
    <Typography
      as="li"
      color="blue-gray"
      className={`p-1 text-lg hover:text-[#f3a760] font-medium ${
        isActive ? "text-[#945a23]" : "text-[#FB9333]"
      }`}
    >
      {label}
    </Typography>
  </a>
);

// Komponen untuk daftar navigasi
const NavList = () => {
  const location = useLocation(); // Dapatkan route aktif saat ini

  return (
    <ul className="mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      {[
        { label: "Home", href: "/" },
        { label: "Order", href: "/pesan" },
        { label: "Blog", href: "/blog" },
      ].map((navItem) => (
        <NavItem
          key={navItem.label}
          label={navItem.label}
          href={navItem.href}
          isActive={location.pathname === navItem.href} // Cek apakah ini route yang aktif
        />
      ))}
    </ul>
  );
};

// Komponen Navbar utama
const NavbarWithSimpleLinks = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar fullWidth className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          color="blue-gray"
          className="text-[#FB9333] ml-4 cursor-pointer text-2xl font-bold hover:text-[#ffa654] transition-colors"
        >
          Food <span className="text-green-700">Cycle</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button
          className="bg-[#FB9333] hidden lg:inline-block hover:bg-[#c88342] hover:text-white transition-colors"
        >
         Download App
        </Button>
        <button
          onClick={handleOpen}
          className="ml-auto inline-block text-black lg:hidden"
        >
          <img
            src={open ? closeIcon : openIcon}
            alt={open ? "Close Menu" : "Open Menu"}
            className="h-6 w-6"
          />
        </button>
      </div>
      <Collapse open={open} className="lg:hidden">
        <div className="mt-2 rounded-xl py-2 px-4 bg-white shadow-md">
          <NavList />
          <Button
            className="mt-3 w-full bg-[#FB9333] hover:bg-[#c88342] text-white transition-colors"
          >
            Sign in
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarWithSimpleLinks;
