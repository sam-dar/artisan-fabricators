// components/ProductCard.tsx

import Image from "next/image";

interface ProductCardProps {
  imageUrl: string;
  altText?: string;
}

export const ProductCard = ({ imageUrl, altText = "Product Image" }: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>
  );
};
