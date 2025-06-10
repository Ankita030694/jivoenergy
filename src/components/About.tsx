import React from 'react';

const About = () => {
  return (
    <div className="w-full py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Video Section */}
          <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/video-poster.jpg"
            >
              <source src="/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#0A5C35]">About Jivo Energy</h2>
            <p className="text-lg text-gray-700">
              We are a leading energy solutions provider committed to transforming the way the world consumes energy. 
              Our innovative approach combines cutting-edge technology with sustainable practices to deliver reliable 
              and efficient energy solutions.
            </p>
            <p className="text-lg text-gray-700">
              With a global presence and a team of experts, we work tirelessly to create a more sustainable future 
              through renewable energy initiatives and smart energy management systems.
            </p>
            <button className="px-6 py-3 bg-[#0A5C35] text-white rounded-lg hover:bg-[#084A2C] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 