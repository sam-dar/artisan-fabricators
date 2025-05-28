import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import Footer from "@/components/footer";
import AboutSection from "@/components/about_section";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialsSection from "@/components/testimonial";
import CoreValuesSection from "@/components/values_section";

const galleryImages = [
  "/gallery/car1.jpg",
  "/gallery/car2.jpg",
  "/gallery/car3.jpg",
  "/gallery/car4.jpg",
  "/gallery/car5.jpg",
  "/gallery/car6.jpg",
  "/gallery/car7.jpg",
  "/gallery/car8.jpg",
];

export default function Home() {
  return (
    <div>
      {/* HERO SECTION WITH BACKGROUND CAROUSEL */}
      <section className="container mx-auto px-4 relative h-[80vh] overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          <Carousel images={galleryImages} />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center px-6 bg-black/50">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Artisan Fabricators
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white italic mb-4">
            Crafting Imagination in Corian
          </h2>
          <p className="max-w-2xl text-white mb-6">
            At Artisan Fabricators, we bring your ideas to life with precision
            and elegance. From luxurious vanities to stunning bathtubs, seamless
            countertops to custom niches — we shape Corian into masterpieces for
            every space.
          </p>
          <Button
            asChild
            variant="default"
            className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition"
          >
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </div>
      </section>
      <div className="py-4">
        <AboutSection />
      </div>
      <div className="container mx-auto px-4 py-4">
        <TestimonialsSection />
      </div>
      <div className="py-4">
        <CoreValuesSection />
      </div>

      <section className=" relative py-5 ">
        <Footer />
      </section>
    </div>
  );
}
