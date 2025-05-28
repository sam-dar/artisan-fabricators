// app/products/page.tsx

"use client";

import { ProductList } from "@/components/product-list";

// Example image URLs (replace with Vercel Blob or Supabase later)
const bathVanities = [
  "/gallery/vanity1.jpg",
  "/gallery/vanity2.jpg",
  "/gallery/vanity1.jpg",
];

const kitchenCountertops = [
  "/gallery/KT1.jpg",
  "/gallery/KT2.jpg",
  "/gallery/KT1.jpg",
];

const niches = [
  "/gallery/NSH1.jpg",
  "/gallery/NSH2.jpg",
  "/gallery/NSH1.jpg",
];

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-5 relative overflow-hidden bg-gray-200 py-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Our Corian Projects
      </h1>

      <ProductList title="Bath Vanities" images={bathVanities} />
      <ProductList title="Kitchen Countertops" images={kitchenCountertops} />
      <ProductList title="Niches & Custom Work" images={niches} />
    </main>
  );
}
