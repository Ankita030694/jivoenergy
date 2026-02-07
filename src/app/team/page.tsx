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
    image: '/team/Rajesh.jpg',
    linkedin: 'https://www.linkedin.com/in/rajeshchugh74/'
  };

  const projectDevelopment: TeamMember[] = [
    { name: 'Jorge Lascas', image: '/team/Jorge.jpg', linkedin: 'https://www.linkedin.com/in/jorgemslascas/' },
    { name: 'Aakanksha', image: '/team/Aakanksha.jpg', linkedin: 'https://www.linkedin.com/in/aakankshachugh/' },
    { name: 'Geetika Sondhi', image: '/team/Geetika.jpg', linkedin: 'https://www.linkedin.com/in/geetika-sondhi-82274520/' },
    { name: 'Nishank Madaan', image: '/team/Nishank.jpg', linkedin: 'https://www.linkedin.com/in/nishank-madaan-658177146/' },
    { name: 'Abhishek Batra', image: '/team/Abhishek.jpg', linkedin: 'https://www.linkedin.com/in/caabhishekbatra/' },
    { name: 'Naresh Kumar Singh Ghorla', image: '/team/Naresh.jpg', linkedin: 'https://www.linkedin.com/in/naresh-ghorla-805222150/' },
    { name: 'Nitesh Kumar', image: '/team/Nitesh.jpg', linkedin: 'https://www.linkedin.com/in/nitesh-jangra-a9567a278/' },
    { name: 'Beatrice Kithinji', image: '/team/Beatrice.jpg', linkedin: 'https://www.linkedin.com/in/beatrice-kithinji-mba-30aa448a/' },
    { name: 'Patrice Yamintare Kounkorgo', image: '/team/Patrice.jpg', linkedin: 'https://www.linkedin.com/in/yamintare-patrice-kounkorgo-058405179/' },
    { name: 'Ivan', image: '' },
    { name: 'Boydd', image: '' },
  ];

  const projectExecution: TeamMember[] = [
    { name: 'Prayas Gupta', image: '/team/Prayas.jpg', linkedin: 'https://www.linkedin.com/in/preyas-gupta/' },
    { name: 'Manvendra Singh Hada', image: '/team/Manvendra.jpg', linkedin: 'https://www.linkedin.com/in/hadamanvendrasingh/' },
    { name: 'Ankit Srivastava', image: '/team/Ankit.jpg', linkedin: 'https://www.linkedin.com/in/ankit-srivastava14/' },
    { name: 'Vivek Gupta', image: '/team/Vivek.jpg', linkedin: 'https://www.linkedin.com/in/vivek-vikram-56470a127/' },
    { name: 'Rohit Shivaji Nalavade', image: '/team/Rohit.jpg', linkedin: 'https://www.linkedin.com/in/rohit-nalavade-8a6780395/' },
    { name: 'Tushar Saurabh', image: '', linkedin: 'https://www.linkedin.com/in/tushar-saurabh-02b5277b/' },
    { name: 'Akshay Sharma', image: '' },
    { name: 'Ashok Kumar', image: '/team/Ashok.jpg', linkedin: 'https://www.linkedin.com/in/ashok-kumar-74a07064/' },
    { name: 'Shashi Kumar', image: '/team/Shashi.jpg', linkedin: 'https://www.linkedin.com/in/shashi-kumar-87449b148/' },
    { name: 'Samuel Walusimbi', image: '/team/Samuel.jpg', linkedin: 'https://www.linkedin.com/in/samuel-walusimbi-k/' },
    { name: 'Pauline Wambui Wachira', image: '/team/Pauline.jpg' },
    { name: 'Nitin Kumar', image: '/team/Nitin.jpg', linkedin: 'https://www.linkedin.com/in/nitin-kumar-195675157/' },
    { name: 'Alfred', image: '' },
    { name: 'Ravi Kumar', image: '/team/Ravi.jpg', linkedin: 'https://www.linkedin.com/in/ravi-kumar-yadav-36812a308/' },
  ];

  const projectSupport: TeamMember[] = [
    { name: 'Ujwal Arora', image: '/team/Ujwal.jpg', linkedin: 'https://www.linkedin.com/in/ca-ujwal-arora-6481108b/' },
    { name: 'Chavvi Ahuja', image: '/team/Chavvi.jpg', linkedin: 'https://www.linkedin.com/in/chavvi-ahuja-68507b20a/' },
    { name: 'Gayatri Mudgil', image: '/team/Gayatri.jpg', linkedin: 'https://www.linkedin.com/in/gayatri-m-92122918b/' },
    { name: 'Anuradha Nehra', image: '/team/Anuradha.jpg', linkedin: 'https://www.linkedin.com/in/graphologistanuradha/' },
    { name: 'Arun Kumar', image: '/team/Arun.jpg', linkedin: 'https://www.linkedin.com/in/arun-sharma-b5504918b/' },
    { name: 'Ainemigisha Martha Tukahirwa Flavia', image: '/team/Martha.jpg', linkedin: 'https://www.linkedin.com/in/martha-ainemigisha-a6a2b4238/' },
    { name: 'Shivalika Nagpal', image: '/team/Shivalika.jpg', linkedin: 'https://www.linkedin.com/in/shivalikanagpal/' },
    { name: 'Jaideep', image: '' },
    { name: 'Nidhi', image: '/team/nidhi.jpg' },
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
        ease: "easeOut" as const
      }
    }
  };

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col items-center"
    >
      <div 
        className={`relative w-32 h-32 md:w-36 md:h-36 overflow-hidden rounded-full bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-500 border-2 border-white group mb-4 ${member.linkedin ? 'cursor-pointer' : ''}`}
        onClick={() => member.linkedin && window.open(member.linkedin, '_blank')}
      >
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 150px, 200px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#062516]/5 text-[#062516]/20">
            <span className="text-3xl font-bold font-serif">{member.name.charAt(0)}</span>
          </div>
        )}
        
        {member.linkedin && (
           <div className="absolute inset-0 bg-[#062516]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/90 p-2 rounded-full shadow-sm">
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
              </div>
           </div>
        )}
      </div>
      
      <div className="text-center">
        <h3 className="font-bold text-[#062516] text-sm md:text-base leading-tight mb-1">{member.name}</h3>
        {member.linkedin ? (
          <a 
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#0077b5] hover:underline text-xs font-medium gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin className="w-3 h-3" />
            LinkedIn
          </a>
        ) : (
          member.role && <p className="text-xs text-gray-500 font-medium">{member.role}</p>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FFFA84] selection:text-[#062516]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#062516] mb-10">
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

      <div className="container mx-auto px-4 pt-20">
        
        {/* Mentor Leader Section */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-10"
        >
          <div className="flex flex-col items-center">
            <div 
              className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-full bg-gray-100 shadow-2xl transition-all duration-700 border-4 border-[#FFFA84] hover:scale-105 group mb-8 cursor-pointer"
              onClick={() => mentor.linkedin && window.open(mentor.linkedin, '_blank')}
            >
               {mentor.image ? (
                 <Image
                   src={mentor.image}
                   alt={mentor.name}
                   fill
                   className="object-cover object-top"
                   sizes="(max-width: 768px) 200px, 300px"
                 />
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center bg-[#062516] text-[#FFFA84]">
                    <span className="text-6xl font-serif font-bold opacity-20">{mentor.name.split(' ').map(n => n[0]).join('')}</span>
                 </div>
               )}
               {mentor.linkedin && (
                 <div className="absolute inset-0 bg-[#062516]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full shadow-lg">
                      <Linkedin className="w-6 h-6 text-[#0077b5]" />
                    </div>
                 </div>
               )}
            </div>

            <div className="space-y-4">
              <div className="uppercase tracking-[0.3em] text-xs text-[#062516] font-black">Leadership</div>
              <h2 className="text-4xl md:text-5xl font-black text-[#062516] tracking-tight">{mentor.name}</h2>
              <div className="text-[#062516]/60 font-bold text-lg">{mentor.role}</div>
              
              <div className="max-w-xl mx-auto py-6">
                <p className="text-gray-600 text-xl italic leading-relaxed">
                  "With a vision to contribute to clean energy transition globally."
                </p>
              </div>
              
              {mentor.linkedin && (
                <a 
                  href={mentor.linkedin} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#0077b5] text-white rounded-full font-bold hover:bg-[#005582] transition-colors shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
              )}
            </div>
          </div>
        </motion.section>

        {/* Project Development */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062516] mb-4">Project Development</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Strategists ensuring sustainable growth and commercial success.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
          >
            {projectDevelopment.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </motion.div>
        </section>

        {/* Project Execution */}
        <section className="relative">
          <div className="absolute inset-0 bg-gray-50 -skew-y-3 -z-10 transform scale-110" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 pt-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062516] mb-4">Project Execution</h2>
            <div className="h-1.5 w-24 bg-[#FFFA84] mx-auto rounded-full" />
            <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">Experts dedicated to driving technical excellence and innovation in every project.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
          >
            {projectExecution.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </motion.div>
        </section>

        {/* Project Support */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#062516] mb-4">Project Support</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">The backbone of our operations, driving efficiency and support.</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
          >
            {projectSupport.map((member, index) => (
              <MemberCard key={index} member={member} />
            ))}
          </motion.div>
        </section>

      </div>
      
      <div className="h-40 w-full bg-white"></div>

      <Footer />
    </div>
  );
};

export default Team;
