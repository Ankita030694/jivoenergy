'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role?: string;
  image: string;
  linkedin?: string;
}

const Team = () => {
  const mentor: TeamMember = {
    name: 'Rajesh Chugh',
    role: 'The Mentor Leader',
    image: '', // Missing image
    linkedin: '#'
  };

  const technicalSpecialists: TeamMember[] = [
    { name: 'Akshay Sharma', image: '' },
    { name: 'Ankit Srivastava', image: '/team/Ankit.JPG' },
    { name: 'Ashok Kumar', image: '/team/Ashok.JPG' },
    { name: 'Manvendra Singh Hada', image: '/team/Manvendra.JPG' },
    { name: 'Nitin', image: '' },
    { name: 'Pauline Wambui Wachira', image: '/team/Pauline.jpeg' },
    { name: 'Prayas Gupta', image: '/team/Prayas Photo.jpeg' },
    { name: 'Ravi Kumar', image: '/team/Ravi.JPG' },
    { name: 'Rohit Shivaji Nalavade', image: '/team/Rohit.JPG' },
    { name: 'Samuel Walusimbi', image: '/team/Samuel.png' },
    { name: 'Shashi Kumar', image: '/team/Shashi.JPG' },
    { name: 'Tushar Saurabh', image: '' },
    { name: 'Vivek Gupta', image: '/team/Vivek.JPG' },
  ];

  const commercialSpecialists: TeamMember[] = [
    { name: 'Aakanksha', image: '/team/Aakanksha.JPG' },
    { name: 'Abhishek Batra', image: '/team/Abhishek.jpeg' },
    { name: 'Beatrice Kithinji', image: '/team/Beatrice.jpeg' },
    { name: 'Jorge Lascas', image: '/team/Jorge.jpeg' },
    { name: 'Naresh Kumar Singh Ghorla', image: '/team/Naresh.JPG' },
    { name: 'Nishank Madaan', image: '/team/Nishank.JPG' },
    { name: 'Nitesh Kumar', image: '/team/Nitesh.JPG' },
    { name: 'Patrice Yamintare Kounkorgo', image: '/team/Patrice.jpeg' },
  ];

  const functionalSpecialists: TeamMember[] = [
    { name: 'Ainemigisha Martha Tukahirwa Flavia', image: '/team/Martha.jpeg' },
    { name: 'Anuradha Nehra', image: '/team/Anuradha.JPG' },
    { name: 'Arun Kumar', image: '/team/Arun.JPG' },
    { name: 'Chavvi Ahuja', image: '/team/Chavvi.JPG' },
    { name: 'Gayatri Mudgil', image: '/team/Gayatri.jpg' },
    { name: 'Geetika Sondhi', image: '/team/Geetika.JPG' },
    { name: 'Nitin Kumar', image: '/team/Nitin.JPG' },
    { name: 'Shivalika Nagpal', image: '/team/Shivalika.JPG' },
    { name: 'Ujwal Arora', image: '/team/Ujwal.JPG' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <motion.div 
      variants={itemVariants}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
        <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#062516]/5 text-[#062516]/20">
              <span className="text-5xl font-bold font-serif">{member.name.charAt(0)}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#062516] via-[#062516]/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-center justify-end h-full pb-8">
             <a 
              href={member.linkedin || '#'} 
              className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-full text-white hover:bg-white hover:text-[#0077b5] transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with ${member.name} on LinkedIn`}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <span className="text-white/80 text-sm mt-3 font-light tracking-wide">Connect on LinkedIn</span>
          </div>
        </div>
        
        <div className="p-5 text-center flex-grow flex flex-col justify-center bg-white relative z-10 group-hover:bg-gray-50 transition-colors duration-300">
          <h3 className="font-bold text-[#062516] text-lg leading-tight mb-1 group-hover:text-[#062516] transition-colors">{member.name}</h3>
          {member.role && (
            <p className="text-sm text-gray-500 font-medium">{member.role}</p>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FFFA84] selection:text-[#062516]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#062516]">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#062516]/30 via-[#062516]/60 to-[#062516]" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#FFFA84]/10 text-[#FFFA84] text-sm font-semibold tracking-wider mb-6 border border-[#FFFA84]/20">
              THE PEOPLE BEHIND JIVO
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Meet Our <span className="text-[#FFFA84]">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              A diverse group of passionate individuals united by a single vision: driving the sustainable energy transition globally.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 space-y-32">
        
        {/* Mentor Leader Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row group hover:shadow-[0_20px_50px_rgba(6,37,22,0.1)] transition-shadow duration-500">
            <div className="md:w-5/12 relative min-h-[400px] bg-gray-100 overflow-hidden">
               {/* Placeholder for Mentor Image */}
               <div className="absolute inset-0 flex items-center justify-center bg-[#062516] text-[#FFFA84]">
                  <span className="text-8xl font-serif font-bold opacity-20">RC</span>
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-[#062516]/40 to-transparent" />
            </div>
            <div className="md:w-7/12 p-10 md:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M0 0h100v100H0z" />
                </svg>
              </div>
              
              <div className="uppercase tracking-widest text-xs text-[#062516] font-bold mb-2">Leadership</div>
              <h2 className="text-4xl font-bold text-[#062516] mb-2">{mentor.name}</h2>
              <div className="text-[#062516]/60 font-medium text-lg mb-8">{mentor.role}</div>
              
              <div className="relative pl-6 border-l-4 border-[#FFFA84] mb-8">
                <p className="text-gray-600 text-xl italic leading-relaxed">
                  "With a vision to contribute to clean energy transition globally."
                </p>
              </div>
              
              <a 
                href="#" 
                className="inline-flex items-center group/link text-[#062516] font-bold hover:text-[#062516]/70 transition-colors"
              >
                <span className="border-b-2 border-[#FFFA84] pb-1 group-hover/link:border-[#062516] transition-colors">Connect on LinkedIn</span>
                <ArrowUpRight className="w-5 h-5 ml-2 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Project Technical Specialists */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062516] mb-4">Project Technical Specialists</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Experts dedicated to driving technical excellence and innovation in every project.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {technicalSpecialists.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </motion.div>
        </section>

        {/* Commercial Specialists */}
        <section className="relative">
          <div className="absolute inset-0 bg-gray-50 -skew-y-3 -z-10 transform scale-110" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062516] mb-4">Commercial Specialists</h2>
            <div className="h-1.5 w-24 bg-[#FFFA84] mx-auto rounded-full" />
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">Strategists ensuring sustainable growth and commercial success.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {commercialSpecialists.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </motion.div>
        </section>

        {/* Functional Specialists */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062516] mb-4">Functional Specialists</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">The backbone of our operations, driving efficiency and support.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {functionalSpecialists.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </motion.div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default Team;
