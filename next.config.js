/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/app/assets/(favicon.ico|favicons|apple-touch-icon.png)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
    // Weitere Konfigurationsoptionen können hier hinzugefügt werden
  };
  
  module.exports = nextConfig;