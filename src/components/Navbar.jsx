'use client'
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/Lite" className="text-2xl font-bold">
          Litepaper
        </Link>

        {/* Mobile Menu Button */}
        {/* <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button> */}

        {/* Desktop Menu */}
        {/* <ul className="hidden md:flex space-x-6">
          <li><Link href="/lite" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul> */}
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && (
        // <ul className="md:hidden bg-gray-800 p-4 flex flex-col space-y-3">
        //   <li><Link href="/lite" className="block" onClick={() => setIsOpen(false)}>Home</Link></li>
        //   <li><Link href="/about" className="block" onClick={() => setIsOpen(false)}>About</Link></li>
        //   <li><Link href="/services" className="block" onClick={() => setIsOpen(false)}>Services</Link></li>
        //   <li><Link href="/contact" className="block" onClick={() => setIsOpen(false)}>Contact</Link></li>
        // </ul>
      )} */}
    </nav>
  );
}
