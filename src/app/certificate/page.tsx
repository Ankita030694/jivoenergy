'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PdfThumbnail = dynamic(() => import('@/components/PdfThumbnail'), { ssr: false });

const certifications = [
  {
    title: "ISO 9001:2015 Quality Management System",
    file: "ISO 9001 JIVO ENERGY PRIVATE LIMITED.pdf"
  },
  {
    title: "ISO 14001:2015 Environmental Management System",
    file: "ISO 14001 JIVO ENERGY PRIVATE LIMITED.pdf"
  },
  {
    title: "ISO 14064-1:2018 The Greenhouse Gases Part 1",
    file: "ISO 14064 JIVO ENERGY PRIVATE LIMITED.pdf"
  },
  {
    title: "ISO/IEC 27001:2022 Information Security Management System",
    file: "ISO 27001 JIVO ENERGY PRIVATE LIMITED.pdf"
  },
  {
    title: "ISO 20400:2017 Sustainable Procurement",
    file: "ISO 20400 JIVO ENERGY PRIVATE LIMITED.pdf"
  },
  {
    title: "ISO 31000:2018 Risk Management",
    file: "ISO 31000 JIVO ENERGY PRIVATE LIMITED.pdf"
  },
  {
    title: "ISO 37001:2016 Anti-Bribery Management System",
    file: "ISO 37001 JIVO ENERGY PRIVATE LIMITED.pdf"
  },
  {
    title: "ISO 45001:2018 Occupational Health & Safety Management System",
    file: "ISO 45001 JIVO ENERGY PRIVATE LIMITED.pdf"
  }
];

const Certificate = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[65vh] bg-[#062516] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/cert_vid.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white text-center px-4">
            CERTIFICATIONS
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert, index) => (
            <a 
              key={index}
              href={`/certifications/${cert.file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center group cursor-pointer w-full md:w-[calc(50%-2rem)] lg:w-[30%]"
            >
              <div className="w-full bg-gray-100 relative border-b border-gray-100">
                <PdfThumbnail file={`/certifications/${cert.file}`} width={350} />
              </div>

              <div className="p-8 flex flex-col items-center flex-grow w-full">
                <h3 className="text-xl font-bold text-[#062516] mb-6 flex-grow line-clamp-3">
                  {cert.title}
                </h3>
                
                <span 
                  className="inline-flex items-center px-6 py-3 bg-[#062516] text-white rounded-lg group-hover:bg-[#051e12] transition-colors duration-300 font-medium mt-auto"
                >
                  <span>View Certificate</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Certificate;
