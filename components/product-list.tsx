// components/ProductList.tsx

import { ProductCard } from "./product-card";

interface ProductListProps {
  title: string;
  images: string[];
}

export const ProductList = ({ title, images }: ProductListProps) => {
  return (
    <section className="py-12 px-6 sm:px-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((url, index) => (
          <ProductCard key={index} imageUrl={url} altText={`${title} ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};
