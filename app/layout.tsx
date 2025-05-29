import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import FloatingWhatsAppButton from "@/components/whatsappme";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/footer";
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
          <SpeedInsights />
          <div className="px-6 sm:px-16 lg:px-24">
            <Footer />
          </div>
        </main>
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
