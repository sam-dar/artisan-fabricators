import {  MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar() {
  return (
    <header className="px-4 sm:px-8 md:px-16 lg:px-24 py-4 bg-[#2E3440] text-white">
      <nav className="flex items-center justify-between bg-gray-200 text-[#2E3440] px-6 sm:px-12 py-4 rounded-md shadow-md">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/gallery/logo.jpg"
            alt="Logo"
            width={160}
            height={160}
            priority
            className="rounded-md"
          />
        </div>

        {/* Address */}
        <div className="flex flex-col justify-center text-sm sm:text-base font-medium px-6 border-l border-gray-400 mx-4">
          <div className="flex items-start gap-2 bg-[#4C566A] text-white px-3 py-2 rounded-md">
            <MapPin className="w-5 h-5 text-white" />
            <span className="max-w-[300px] leading-tight">
              Ghazi Road, Defence, Near Total Petrol Pump, Shahid Town, Lahore Cantt
            </span>
          </div>
        </div>

        {/* Navigation Links & Button */}
            <ul className="hidden md:flex items-center gap-8 font-medium text-xl">
      {[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Portfolio", href: "/products" },
        { label: "Contact Us", href: "/contact" },
      ].map((item, idx) => (
        <li
          key={idx}
          className="relative group cursor-pointer transition duration-300 ease-in-out"
        >
          <Link href={item.href}>
            <span className="group-hover:text-[#4C566A] transition duration-300">
              {item.label}
            </span>
          </Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#4C566A] group-hover:w-full transition-all duration-300"></span>
        </li>
      ))}

      {/* Make an Order Button */}
      <li>
        <button className="flex items-center gap-2 bg-[#4C566A] hover:bg-[#434C5E] transition duration-300 px-4 py-2 rounded text-white font-semibold text-sm sm:text-base cursor-pointer">
          MAKE AN ORDER
          <ArrowRight className="w-4 h-4" />
        </button>
      </li>
    </ul>

      </nav>
    </header>
  );
}
