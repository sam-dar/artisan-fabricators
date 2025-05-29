import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2E3440] text-white py-12 px-6 sm:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-15">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Artisan CORIAN FABRICATORS
          </h2>
          <p className="text-xl leading-relaxed text-white">
            We specialise in solid surface work such as counter tops, reception
            counters, vanity counters, lift flooring sinks, and other similar
            projects.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contacts</h3>
          <ul className="space-y-4 text-xl text-white">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              Ghazi Road, Defence, Near Total Petrol Pump, Shahid Town, Lahore
              Cantt
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              +92 300 4645620
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="px-15">
          <h3 className="text-2xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-3 text-xl text-white">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Portfolio", href: "/products" },
              { label: "FAQs", href: "/FAQ" },
            ].map((link) => (
              <li
                key={link.label}
                className="cursor-pointer hover:text-gray-300 transition-colors duration-200 ease-in-out"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-600 pt-6 text-center text-sm text-gray-400">
        © 2025 Artisan Corian Fabricators. All Rights Reserved.
      </div>
    </footer>
  );
}
