import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
      <div className="text-center py-12">
        <p className="text-sm tracking-widest text-gray-500 uppercase">
          Contact Us
        </p>
        <h1 className="text-4xl font-bold text-blue-900 mt-2">Get In Touch</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-gray-100">
          <MapPin className="w-8 h-8 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-lg mb-1">Our Address</h3>
          <p className="text-center text-xl text-blue-900">
            Ghazi Road, Defence, Near Total Petrol Pump, Shahid Town, Lahore
            Cantt
          </p>
        </div>

        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-gray-100">
          <Phone className="w-8 h-8 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-lg mb-1">Our Phone</h3>
          <p className="text-xl text-blue-900"> +92 300 4645620</p>
        </div>

        <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg hover:shadow-xl transition bg-gray-100">
          <Mail className="w-8 h-8 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-lg mb-1">Our Email</h3>
          <p className="text-xl text-blue-900">info@artisanfabricators.com</p>
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4">
        <iframe
  src="https://www.google.com/maps?q=Ghazi+Road,+Defence,+Near+Total+Petrol+Pump,+Shahid+Town,+Lahore&output=embed"
          width="100%"
          height="450"
          className="rounded-xl shadow-lg border-0 w-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
