"use client";

import { useState } from "react";
import { Menu, X, MapPin, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="text-[#2E3440] font-medium">
      {/* Top Bar */}
      <div className="bg-[#2E3440] text-white text-sm px-6 py-2 flex flex-col sm:flex-row sm:justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>
            Ghazi Road, Defence, Near Total Petrol Pump, Shahid Town, Lahore
            Cantt
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span> +92 300 4645620</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-gray-200 shadow-md px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/gallery/logo.jpg"
            alt="Al-Ahmad Logo"
            width={160}
            height={100}
            className="rounded-md"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10 text-3xl">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Portfolio", href: "/products" },
            { label: "FAQs", href: "/FAQ" },
          ].map((item, idx) => (
            <li key={idx} className="group relative">
              <Link href={item.href}>
                <span className="group-hover:text-[#B49B5E] transition">
                  {item.label}
                </span>
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#B49B5E] group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
        <div
          className="hidden md:flex bg-[#2E3440] hover:bg-[#A48D53] text-white mt-20 mr-20 px-4 py-2 text-base font-semibold items-center gap-2 cursor-pointer transition"
          onClick={() => router.push("/contactus")}
        >
          MAKE AN ORDER
          <ArrowRight className="w-4 h-4" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-gray-200 px-6 py-4 space-y-4 text-lg">
          {[
            { label: "Home", href: "/" },
            { label: "About Us", href: "/about" },
            { label: "Portfolio", href: "/products" },
            { label: "FAQs", href: "/FAQ" },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="block hover:text-[#B49B5E] transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <button
            className="w-full flex justify-center bg-[#B49B5E] hover:bg-[#A48D53] text-white py-2 rounded font-semibold transition"
            onClick={() => router.push("/contactus")}
          >
            MAKE AN ORDER
          </button>
        </div>
      )}
    </header>
  );
}
