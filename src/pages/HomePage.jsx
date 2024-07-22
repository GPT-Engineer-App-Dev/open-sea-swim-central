import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: 'url("/images/hero-background.jpg")'}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Open Sea Swimming</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the freedom of the open water</p>
          <Button size="lg">Join Us Today</Button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Welcome to Open Sea Swimming</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Discover the exhilarating world of open sea swimming. Whether you're a beginner or an experienced swimmer,
            our community offers support, guidance, and exciting events for all levels.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((event) => (
              <Card key={event}>
                <CardHeader>
                  <CardTitle>Summer Solstice Swim</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Join us for a magical swim as we celebrate the longest day of the year.
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    June 21, 2024
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="mr-2 h-4 w-4" />
                    Sunset Beach
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery Preview</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((image) => (
              <img
                key={image}
                src={`/images/gallery-preview-${image}.jpg`}
                alt={`Open sea swimming preview ${image}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">View Full Gallery</Button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8">
            Have questions or want to join our community? We'd love to hear from you!
          </p>
          <Button size="lg">Contact Us</Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;