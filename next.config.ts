const nextConfig = {
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: { subsets: ['latin'] },
      },
    ],
  },
  images: {
    domains: [
      'images.unsplash.com',
      'img.freepik.com',
      'www.publicdomainpictures.net',
      'cdn.pixabay.com', // ✅ Added this
      'www.ramco.com',
      "encrypted-tbn0.gstatic.com",

      'www.rsiconcepts.com',
      'media.licdn.com',
      'bairesdev.mo.cloudinary.net',
      'media.studentcrowd.net',
    ],
  },
};

module.exports = nextConfig;
