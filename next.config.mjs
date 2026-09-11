/** @type {import('next').NextConfig} */

// If you deploy to https://<username>.github.io/<repo-name>/ (project page),
// set BASE_PATH to "/<repo-name>". If you deploy to a user/org page
// (https://<username>.github.io/) or a custom domain, leave it as "".
const BASE_PATH = process.env.BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH ? `${BASE_PATH}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
