'use client'
import React from 'react';
import Image from 'next/image';

interface MediaCard {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

const mediaCards: MediaCard[] = [
  {
    id: 1,
    title: "JIVO Energy constrói Central Solar de Santo Amaro em São Tomé",
    description: "A JIVO Energy concluiu com sucesso o projecto de Engenharia, Aquisição e Construção (EPC) de uma central fotovoltaica de 1,2 MWp ligada à rede em São Tomé e Príncipe.",
    image: "/media_assets/sao_tome_1.png",
    category: "News",
    link: "https://www.telanon.info/sociedade/2025/12/27/51256/jivo-energy-constroi-central-solar-de-santo-amaro-em-sao-tome/"
  },
  {
    id: 2,
    title: "JIVO Energy has built the Santo Amaro solar power plant in Sao Tome",
    description: "JIVO Energy successfully completed the Engineering, Procurement, and Construction (EPC) of a 1.2 MWp grid-connected solar PV plant in São Tomé and Príncipe.",
    image: "/media_assets/sao_tome_2.png",
    category: "News",
    link: "https://www.africanpowerplatform.org/news/press-releases-2/external/4551-jivo-energy-has-built-the-santo-amaro-solar-power-plant-in-sao-tome.html"
  },
  {
    id: 3,
    title: "JIVO Energy Adds 1.2 MWp Solar Capacity To Reduce Load-Shedding In São Tomé",
    description: "JIVO Energy commissions 1.2 MWp Santo Amaro Solar Plant in São Tomé, boosting renewable energy, reducing load-shedding, and supporting grid stability.",
    image: "/media_assets/sao_tome_3.png",
    category: "Press Release",
    link: "https://solarquarter.com/2026/01/16/jivo-energy-adds-1-2-mwp-solar-capacity-to-reduce-load-shedding-in-sao-tome/"
  },
  {
    id: 4,
    title: "JIVO Energy Powers 39 Off-Grid Health Facilities in Liberia with Solar + BESS",
    description: "JIVO Energy has completed the installation of Solar PV and Battery Energy Storage System (BESS) hybrid systems at 39 health facilities across Liberia, bringing reliable and eco-friendly power to previously off-grid locations.",
    image: "/media_assets/liberia_health.png",
    category: "News",
    link: "https://solarquarter.com/2026/01/21/jivo-energy-powers-39-off-grid-health-facilities-in-liberia-with-solar-bess/"
  },
  {
    id: 5,
    title: "JIVO Energy Solarizes Irrigation Water Pumps to Support Rice Farming in Northern Senegal",
    description: "JIVO Energy has solarized irrigation water pumps to support rice farming in northern Senegal, enhancing agricultural productivity and sustainable farming.",
    image: "/media_assets/senegal_1.png",
    category: "News",
    link: "https://africa-energy-portal.org/news/jivo-energy-solarizes-irrigation-water-pumps-support-rice-farming-northern-senegal"
  },
  {
    id: 6,
    title: "Solar-Powered Irrigation Initiative Boosts Climate-Resilient Agriculture in Senegal",
    description: "JIVO Energy installs 650 kW solar-powered irrigation systems in northern Senegal, improving water access and climate-resilient agriculture.",
    image: "/media_assets/senegal_2.png",
    category: "News",
    link: "https://solarquarter.com/2026/01/28/jivo-energy-solarizes-irrigation-water-pumps-to-support-rice-farming-in-northern-senegal/"
  },
  {
    id: 7,
    title: "Completion of 650 kW Solar PV Installations for Irrigation Projects in Senegal",
    description: "JIVO Energy completes 650 kW solar PV installations for irrigation projects in northern Senegal, supporting clean energy adoption in agriculture.",
    image: "/media_assets/senegal_3.png",
    category: "News",
    link: "https://solarquarter.com/2026/01/28/jivo-energy-completes-solar-pv-installations-for-irrigation-projects-in-northern-senegal/"
  },
  {
    id: 8,
    title: "Senegal Agricultural Irrigation Project Completion Featured on NOW Solar",
    description: "Jivo Energy successfully completed solar PV installations for irrigation projects in northern Senegal, as part of its commitment to sustainable agriculture.",
    image: "/media_assets/senegal_4.png",
    category: "News",
    link: "https://now.solar/2026/01/28/jivo-energy-completes-solar-pv-installations-for-irrigation-projects-in-northern-senegal-solarquarter/"
  },
  {
    id: 9,
    title: "SolarQuarter Shares Jivo Energy's Senegal Project Success on Instagram",
    description: "SolarQuarter highlights JIVO Energy's success in solarizing irrigation projects in Senegal on their social media platform.",
    image: "/media_assets/senegal_social.png",
    category: "Social Media",
    link: "https://www.instagram.com/p/DUC1DKblrOp/"
  }
];

interface MediaProps {
  limit?: number;
}

const Media = ({ limit }: MediaProps) => {
  const sortedCards = [...mediaCards].reverse();
  const displayedCards = limit ? sortedCards.slice(0, limit) : sortedCards;
  return (
    <section className="w-full py-20 bg-[#062516] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20 mb-6">
              Media & Resources
            </span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            <span className="block">Stay Informed With Our</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">
              Latest Updates & Insights
            </span>
          </h2>
          <p className="text-green-100 max-w-3xl mx-auto text-lg leading-relaxed opacity-90">
            Explore our comprehensive collection of industry news, success stories, and expert insights 
            to stay ahead in the renewable energy sector.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedCards.map((card) => (
            <a 
              key={card.id}
              href={card.link || '#'}
              target={card.link ? "_blank" : undefined}
              rel={card.link ? "noopener noreferrer" : undefined}
              className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover:bg-white hover:shadow-green-500/20 hover:-translate-y-3 hover:scale-105 transition-all duration-500 relative block"
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-4 py-2 bg-[#062516] text-white text-xs font-semibold rounded-full shadow-lg">
                  {card.category}
                </span>
              </div>
              
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#062516]/40 via-transparent to-transparent z-10"></div>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#062516] mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {card.description}
                </p>
                
                {/* CTA Button */}
                <div className="inline-flex items-center px-6 py-3 bg-[#062516] text-white font-semibold rounded-xl hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 group/btn">
                  <span>Learn More</span>
                  <svg 
                    className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Media; 