/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      type: 'json',
    });
    return config;
  },
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'www.irena.org' },
      { protocol: 'https', hostname: 'www.unglobalcompact.org' },
      { protocol: 'https', hostname: 'dii-desertenergy.org' },
      { protocol: 'https', hostname: 'tnfd.global' },
      { protocol: 'https', hostname: 'naturepositive.org' },
      { protocol: 'https', hostname: 'www.iea.org' },
      { protocol: 'https', hostname: 'assets.weforum.org' },
      { protocol: 'https', hostname: 'gwec.net' },
      { protocol: 'https', hostname: 'www.solarpowereurope.org' },
      { protocol: 'https', hostname: 'isolaralliance.org' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

module.exports = nextConfig