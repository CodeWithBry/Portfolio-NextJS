import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // ONLY FOR GITHUB PAGES ONLY!
  
  // output: "export",
  // basePath: isProd ? "/Portfolio-NextJS" : "",
  // assetPrefix: isProd ? "/Portfolio-NextJS/" : "",
  // images: {
  //   unoptimized: true,   // required for static export
  // },
};

export default nextConfig;