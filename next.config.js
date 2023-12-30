/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.myanimelist.net", "drive.google.com", "s4.anilist.co", "media.discordapp.net"]
  },
  redirects: async () => {
    return [
      {
        source: "/github",
        destination: "https://github.com/shallow/nekomoe",
        permanent: true,
      },
      {
        source: "/analytics",
        destination: "https://analytics.us.umami.is/websites/5032fad1-ca41-4242-aa9f-913e7054a5c4",
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
