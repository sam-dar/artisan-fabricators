import type { Metadata } from "next";
import "./globals.css";
import Navbar  from "@/components/navbar";
import FloatingWhatsAppButton from "@/components/whatsappme";
export const metadata: Metadata = {
  title: "Artisan",
  description: "corian fabricators",
    icons: {
    icon: "/favicon.png", // or "/favicon.png" if using PNG
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col bg-[#2E3440] text-white">
        <Navbar />
        <main className="flex-grow py-8">
          {children}
        </main>
        <FloatingWhatsAppButton />

      </body>
    </html>
  );
}
