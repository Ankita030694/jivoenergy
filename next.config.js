/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      type: 'json',
    });
    return config;
  },
  images: {
    domains: [
      'www.irena.org',
      'www.unglobalcompact.org',
      'dii-desertenergy.org',
      'tnfd.global',
      'naturepositive.org',
      'www.iea.org',
      'assets.weforum.org',
      'gwec.net',
      'www.solarpowereurope.org',
      'isolaralliance.org',
      'images.unsplash.com'
    ],
  },
}

module.exports = nextConfig 