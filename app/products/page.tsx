"use client";

import { useEffect, useState } from "react";

const categories = [
  { label: "Counters", folder: "counters" },
  { label: "Bath Vanities", folder: "baths" },
  { label: "Custom Work", folder: "custom" },
  { label: "All", folder: "" },
  { label: "Colors", folder: "sample" },
];

const fallbackImages = [
  "/gallery/car1.jpg",
  "/gallery/car2.jpg",
  "/gallery/car3.jpg",
  "/gallery/car4.jpg",
  "/gallery/car5.jpg",
  "/gallery/car6.jpg",
  "/gallery/car7.jpg",
  "/gallery/car8.jpg",
  "/gallery/car9.jpg",
  "/gallery/car10.jpg",
  "/gallery/car11.jpg",
  "/gallery/value.jpg",
  "/gallery/about.jpg",
];

const handleImageError = (event: React.SyntheticEvent<HTMLImageElement>) => {
  event.currentTarget.src = "/gallery/car1.jpg";
};

export default function ProductsPage() {
  const [allImages, setAllImages] = useState<string[]>([]);
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const [folder, setFolder] = useState("counters");
  const [loading, setLoading] = useState(true);
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const pageSize = 30;
  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 200);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // Load all images on folder change
  useEffect(() => {
    setLoading(true);
    setModalImage(null);
    setPage(1);

    fetch(`/api/images?folder=${folder}`)
      .then((res) => res.json())
      .then((data) => {
        setAllImages(data);
        setVisibleImages(data.slice(0, pageSize));
        setLoading(false);
      })
      .catch(() => {
        setAllImages(fallbackImages);
        setVisibleImages(fallbackImages.slice(0, pageSize));
        setLoading(false);
      });
  }, [folder]);

  const loadMore = () => {
    const nextPage = page + 1;
    const nextImages = allImages.slice(0, nextPage * pageSize);
    setVisibleImages(nextImages);
    setPage(nextPage);
  };

  return (
    <div className="p-6 py-20 min-h-screen flex flex-col">
      <h1 className="text-4xl font-bold mb-4 text-center">Our Projects</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setFolder(cat.folder)}
            className={`px-8 py-4 rounded text-white bg-[#2E3440] hover:bg-[#4C566A] transition ${
              folder === cat.folder ? "bg-[#4C566A]" : ""
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-lg text-gray-300">
          Loading projects...
        </div>
      ) : (
        <>
          <div className=" py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {visibleImages.map((src, i) => (
              <div
                key={i}
                onClick={() => setModalImage(src)}
                className="cursor-pointer group overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Product ${i + 1}`}
                  onError={handleImageError}
                  className="w-full h-98 object-cover rounded transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {visibleImages.length < allImages.length && (
            <div className="text-center">
              <button
                onClick={loadMore}
                className="mt-4 px-6 py-3 bg-[#2E3440] text-white rounded hover:bg-[#4C566A] transition"
              >
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="relative max-w-4xl mx-auto">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold"
            >
              ×
            </button>
            <img
              src={modalImage}
              alt="Product preview"
              width={800}
              height={600}
              className="max-h-[80vh] rounded object-contain"
              onError={handleImageError}
            />
          </div>
        </div>
      )}
{showScrollTop && (
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="fixed bottom-6 right-6 px-4 py-2 bg-[#2E3440] text-white rounded-full shadow-md hover:bg-[#4C566A] transition"
  >
    ↑ Top
  </button>
)}
    </div>
  );
}
