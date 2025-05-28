'"use client";'
import Footer from "@/components/footer";
import AboutSection from "@/components/about_section";
export const metadata = {
  title: "About Us | Artisan Corian Fabricators",
  description: "Learn more about Artisan Corian Fabricators and our mission.",
};

export default function About() {
  return (
    <>
        <AboutSection />
        <div className="px-6 sm:px-16 lg:px-24 py-20">
      <Footer />
      </div>
    </>
  );
}
