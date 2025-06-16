'use client';

import Image from 'next/image';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

interface GallerySection {
  title: string;
  images: string[];
}

const gallerySections: GallerySection[] = [
  {
    title: "São Tomé and Príncipe",
    images: ['/gallery/sao1.jpg', '/gallery/sao2.jpg', '/gallery/sao3.jpg', '/gallery/sao4.jpg', '/gallery/sao5.jpg']
  },
  {
    title: "Malawi",
    images: ['/gallery/malawi1.DNG', '/gallery/malawi2.JPG', '/gallery/malawi3.JPG', '/gallery/malawi4.JPG', '/gallery/malawi5.JPG']
  },
  {
    title: "Liberia",
    images: ['/gallery/liberia1.jpeg', '/gallery/liberia2.jpeg', '/gallery/liberia3.jpg', '/gallery/liberia4.jpeg', '/gallery/liberia5.jpeg']
  },
  {
    title: "Kenya",
    images: ['/gallery/kenya1.jpeg', '/gallery/kenya2.jpeg', '/gallery/kenya3.jpeg', '/gallery/kenya4.jpeg', '/gallery/kenya5.jpeg']
  },
  {
    title: "Maio, Cape Verde",
    images: ['/gallery/maiocape1.jpeg', '/gallery/maiocape2.jpeg', '/gallery/maiocape3.jpeg', '/gallery/maiocape4.jpeg', '/gallery/maiocape5.jpeg']
  },
  {
    title: "Achada, Cape Verde",
    images: ['/gallery/achacape1.jpeg', '/gallery/achacape2.jpeg', '/gallery/achacape3.jpeg', '/gallery/achacape4.jpeg', '/gallery/achacape5.jpeg']
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center text-gray-900 mb-4 mt-10"
          >
            Our Global Impact
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
          >
            Explore our journey through these captivating moments from around the world
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {gallerySections.map((section, index) => (
              <button
                key={index}
                onClick={() => setSelectedSection(selectedSection === section.title ? null : section.title)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSection === section.title
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          
          {gallerySections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`mb-20 ${selectedSection && selectedSection !== section.title ? 'hidden' : ''}`}
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-8 border-b pb-2">{section.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {section.images.map((image, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square overflow-hidden rounded-xl shadow-xl cursor-pointer group"
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image}
                      alt={`${section.title} - Image ${imgIndex + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div 
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="relative max-w-5xl max-h-[90vh]"
                >
                  <Image
                    src={selectedImage}
                    alt="Enlarged view"
                    width={1600}
                    height={1200}
                    className="object-contain max-h-[90vh] rounded-lg"
                  />
                  <button
                    className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(null);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
}
