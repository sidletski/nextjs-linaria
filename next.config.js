const withPlugins = require('next-compose-plugins');
const nextLinaria = require('next-linaria');

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|webp|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: false,
            name: '[hash].[ext]',
            publicPath: '/_next/static/files',
            outputPath: 'static/files',
          },
        },
      ],
    });

    return config;
  },
};

module.exports = withPlugins([[nextLinaria]], nextConfig);
