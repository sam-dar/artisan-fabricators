import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['artisan-fabricators-store.vercel-storage.com',
            'asekennujuh1tygo.public.blob.vercel-storage.com' // <-- add this line

    ],
  },
};

export default nextConfig;
