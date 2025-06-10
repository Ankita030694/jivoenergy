'use client'
import React from 'react';
import Image from 'next/image';

interface MediaCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const mediaCards: MediaCard[] = [
  {
    id: 1,
    title: "Renewable Energy News",
    description: "Stay updated with the latest developments in renewable energy technology and sustainable practices.",
    image: "/media-news.jpg"
  },
  {
    id: 2,
    title: "Success Stories",
    description: "Discover how our innovative solutions have transformed businesses and communities worldwide.",
    image: "/media-success.jpg"
  },
  {
    id: 3,
    title: "Industry Insights",
    description: "Expert analysis and deep dives into the future of sustainable energy and green technology.",
    image: "/media-insights.jpg"
  }
];

const Media = () => {
  return (
    <section className="w-full py-16 bg-[#0A5C35] relative">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/jivobn1.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.97,
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Media & Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaCards.map((card) => (
            <div 
              key={card.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-gray-100">{card.description}</p>
                <button className="mt-4 px-4 py-2 bg-white/20 text-white rounded-md hover:bg-white/30 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media; 