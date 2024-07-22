import { Button } from "@/components/ui/button";

const GalleryPage = () => {
  const images = [
    { src: '/images/gallery-preview-1.jpg', alt: 'Group of open sea swimmers' },
    { src: '/images/gallery-preview-2.jpg', alt: 'Lone swimmer in calm waters' },
    { src: '/images/gallery-preview-3.jpg', alt: 'Swimmers preparing for an event' },
    { src: '/images/gallery-preview-4.jpg', alt: 'Aerial view of open sea swimmers' },
    { src: '/images/hero-background.jpg', alt: 'Open sea swimming scene with sunset' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Open Sea Swimming Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center p-4">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button size="lg">Load More</Button>
      </div>
    </div>
  );
};

export default GalleryPage;