'use client'
import React from 'react';
import Image from "next/image";
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Impact from '@/components/Impact';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Media from '@/components/Media';
import GlobeViz from '@/components/GlobeViz';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center w-full">
          <div className="w-full min-h-screen">
          <GlobeViz />
        </div>
        <About />
        <Projects />
        <Impact />
        <Media />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
} 